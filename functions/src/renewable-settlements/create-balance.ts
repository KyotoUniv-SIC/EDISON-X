/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable camelcase */
// import { renewable_settlement } from '.';
// import { account_private } from '../account-privates';
import { admin_account } from '../admin-accounts';
// import { admin_private } from '../admin-privates';
import { balance } from '../balances';
// import { student_account } from '../student-accounts';
import { Balance, RenewableSettlement } from '@local/common';

// import * as crypto from 'crypto-js';

// renewable_settlement.onCreateHandler.push()
export const renewableSettlementOnCreate = async (snapshot: any, context: any) => {
  const data = snapshot.data()! as RenewableSettlement;
  const adminAccount = await admin_account.getByName('admin');
  if (data.bid_id == data.ask_id) {
    console.log('Bid & Ask sent by same user');
    return;
  }
  if (data.bid_id != adminAccount[0].id) {
    const bidderBalance = await balance.listLatest(data.bid_id);
    await balance.create(
      new Balance({
        student_account_id: data.bid_id,
        amount_uupx: bidderBalance[0].amount_uupx,
        amount_uspx: (parseInt(bidderBalance[0].amount_uspx) + parseInt(data.amount_uspx)).toString(),
      }),
    );
  }

  if (data.ask_id != adminAccount[0].id) {
    const sellerBalance = await balance.listLatest(data.ask_id);
    await balance.create(
      new Balance({
        student_account_id: data.ask_id,
        amount_uupx: sellerBalance[0].amount_uupx,
        amount_uspx: (parseInt(sellerBalance[0].amount_uspx) - parseInt(data.amount_uspx)).toString(),
      }),
    );
  }

  // const xrpl = require('xrpl');
  // const TEST_NET = 'wss://s.altnet.rippletest.net:51233';
  // const client = new xrpl.Client(TEST_NET);
  // let bidderAddress: string;
  // if (data.bid_id != adminAccount[0].id) {
  //   const bidder = await student_account.get(data.bid_id);
  //   if (!bidder.xrp_address) {
  //     console.log(data.bid_id, 'no XRP address');
  //     return;
  //   }
  //   bidderAddress = bidder.xrp_address;
  // } else {
  //   bidderAddress = adminAccount[0].xrp_address_hot;
  // }

  // if (data.ask_id == adminAccount[0].id) {
  //   const adminPrivate = await admin_private.list(adminAccount[0].id);
  //   const privKey = process.env.PRIV_KEY;
  //   if (!privKey) {
  //     console.log('no privKey');
  //     return;
  //   }

  //   const encryptedSeed = adminPrivate[0].xrp_seed_hot;
  //   const decryptedSeed = crypto.AES.decrypt(encryptedSeed, privKey).toString(crypto.enc.Utf8);
  //   await client.connect();
  //   const sender = xrpl.Wallet.fromSeed(decryptedSeed);
  //   const vli = await client.getLedgerIndex();
  //   const sendTokenTx = {
  //     TransactionType: 'Payment',
  //     Account: sender.address,
  //     Amount: {
  //       currency: 'SPX',
  //       value: (parseInt(data.amount_uspx) / 1000000).toString(),
  //       issuer: adminAccount[0].xrp_address_cold,
  //     },
  //     Destination: bidderAddress,
  //     LastLedgerSequence: vli + 540,
  //   };
  //   const payPrepared = await client.autofill(sendTokenTx);
  //   const paySigned = sender.sign(payPrepared);
  //   const payResult = await client.submitAndWait(paySigned.tx_blob);
  //   if (payResult.result.meta.TransactionResult == 'tesSUCCESS') {
  //     console.log(`Transaction succeeded: https://testnet.xrpl.org/transactions/${paySigned.hash}`);
  //   } else {
  //     // eslint-disable-next-line no-throw-literal
  //     console.log(`Error sending transaction: ${payResult.result.meta.TransactionResult}`);
  //   }
  //   await client.disconnect();
  // } else {
  //   const seller = await student_account.get(data.ask_id);
  //   const sellerPrivate = await account_private.listLatest(data.ask_id);
  //   if (!seller.xrp_address) {
  //     console.log(data.ask_id, 'no XRP address');
  //     return;
  //   }
  //   await client.connect();
  //   const privKey = process.env.PRIV_KEY;
  //   if (!privKey) {
  //     console.log('no privKey');
  //     return;
  //   }
  //   const decrypted = crypto.AES.decrypt(sellerPrivate[0].xrp_seed, privKey).toString(crypto.enc.Utf8);
  //   const sender = xrpl.Wallet.fromSeed(decrypted);
  //   const vli = await client.getLedgerIndex();
  //   const sendTokenTx = {
  //     TransactionType: 'Payment',
  //     Account: sender.address,
  //     Amount: {
  //       currency: 'SPX',
  //       value: (parseInt(data.amount_uspx) / 1000000).toString(),
  //       issuer: adminAccount[0].xrp_address_cold,
  //     },
  //     Destination: bidderAddress,
  //     LastLedgerSequence: vli + 540,
  //   };
  //   const payPrepared = await client.autofill(sendTokenTx);
  //   const paySigned = sender.sign(payPrepared);
  //   const payResult = await client.submitAndWait(paySigned.tx_blob);
  //   if (payResult.result.meta.TransactionResult == 'tesSUCCESS') {
  //     console.log(`Transaction succeeded: https://testnet.xrpl.org/transactions/${paySigned.hash}`);
  //   } else {
  //     // eslint-disable-next-line no-throw-literal
  //     console.log(`Error sending transaction: ${payResult.result.meta.TransactionResult}`);
  //   }
  //   await client.disconnect();
  // }
};
