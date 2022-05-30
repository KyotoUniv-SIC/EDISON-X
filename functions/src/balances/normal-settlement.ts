/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable camelcase */
import { balance } from '.';
import { account_private } from '../account-privates';
import { admin_account } from '../admin-accounts';
import { admin_private } from '../admin-privates';
import { market_status } from '../market-statuses';
import { normal_settlement } from '../normal-settlements';
import { student_account } from '../student-accounts';
import { MarketStatus, NormalSettlement } from '@local/common';
import * as crypto from 'crypto-js';
import * as functions from 'firebase-functions';

normal_settlement.onCreateHandler.push(async (snapshot, context) => {
  const data = snapshot.data()! as NormalSettlement;
  const bidderBalance = await balance.getLatest(data.bid_id);
  await balance.update({
    id: bidderBalance[0].id,
    student_account_id: data.bid_id,
    amount_uupx: (parseInt(bidderBalance[0].amount_uupx) + parseInt(data.amount_uupx)).toString(),
  });

  const marketStatus = await market_status.getToday();
  if (!marketStatus.length) {
    await market_status.create(new MarketStatus({ is_finished_normal: true, is_finished_renewable: false }));
  } else {
    await market_status.update({ id: marketStatus[0].id, is_finished_normal: true });
  }
  console.log(marketStatus);

  const xrpl = require('xrpl');
  const TEST_NET = 'wss://s.altnet.rippletest.net:51233';
  const client = new xrpl.Client(TEST_NET);
  const adminAccount = await admin_account.getByName('admin');
  const bidder = await student_account.get(data.bid_id);

  if (data.ask_id == adminAccount[0].id) {
    const adminPrivate = await admin_private.list(adminAccount[0].id);
    const config = functions.config();
    const confXrpl = config['xrpl'];
    const privKey = confXrpl.private_key;

    const encryptedSeed = adminPrivate[0].xrp_seed_hot;
    const decryptedSeed = crypto.AES.decrypt(encryptedSeed, privKey).toString(crypto.enc.Utf8);
    if (!bidder.xrp_address) {
      console.log(data.bid_id, 'no XRP address');
      return;
    }
    await client.connect();
    const sender = xrpl.Wallet.fromSeed(decryptedSeed);
    const sendTokenTx = {
      TransactionType: 'Payment',
      Account: sender.address,
      Amount: {
        currency: 'UPX',
        value: (parseInt(data.amount_uupx) / 1000000).toString(),
        issuer: adminAccount[0].xrp_address_cold,
      },
      Destination: bidder.xrp_address,
    };
    const payPrepared = await client.autofill(sendTokenTx);
    const paySigned = sender.sign(payPrepared);
    const payResult = await client.submitAndWait(paySigned.tx_blob);
    if (payResult.result.meta.TransactionResult == 'tesSUCCESS') {
      console.log(`Transaction succeeded: https://testnet.xrpl.org/transactions/${paySigned.hash}`);
    } else {
      // eslint-disable-next-line no-throw-literal
      throw `Error sending transaction: ${payResult.result.meta.TransactionResult}`;
    }
    client.disconnect();
  } else {
    const sellerBalance = await balance.getLatest(data.ask_id);
    await balance.update({
      id: sellerBalance[0].id,
      student_account_id: data.ask_id,
      amount_uupx: (parseInt(sellerBalance[0].amount_uupx) - parseInt(data.amount_uupx)).toString(),
    });

    const seller = await student_account.get(data.ask_id);
    const sellerPrivate = await account_private.list(data.ask_id);
    if (!bidder.xrp_address) {
      console.log(data.bid_id, 'no XRP address');
      return;
    }
    if (!seller.xrp_address) {
      console.log(data.ask_id, 'no XRP address');
      return;
    }
    await client.connect();
    const config = functions.config();
    const confXrpl = config['xrpl'];
    const privKey = confXrpl.private_key;
    const decrypted = crypto.AES.decrypt(sellerPrivate[0].xrp_seed, privKey);
    const sender = xrpl.Wallet.fromSeed(decrypted);
    const sendTokenTx = {
      TransactionType: 'Payment',
      Account: sender.address,
      Amount: {
        currency: 'UPX',
        value: (parseInt(data.amount_uupx) / 1000000).toString(),
        issuer: adminAccount[0].xrp_address_cold,
      },
      Destination: bidder.xrp_address,
    };
    const payPrepared = await client.autofill(sendTokenTx);
    const paySigned = sender.sign(payPrepared);
    const payResult = await client.submitAndWait(paySigned.tx_blob);
    if (payResult.result.meta.TransactionResult == 'tesSUCCESS') {
      console.log(`Transaction succeeded: https://testnet.xrpl.org/transactions/${paySigned.hash}`);
    } else {
      // eslint-disable-next-line no-throw-literal
      throw `Error sending transaction: ${payResult.result.meta.TransactionResult}`;
    }
    client.disconnect();
  }
});
