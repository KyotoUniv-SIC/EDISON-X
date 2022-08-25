/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable camelcase */
import { xrpl_tx } from '.';
import { account_private } from '../account-privates';
import { admin_account } from '../admin-accounts';
import { admin_private } from '../admin-privates';
import { student_account } from '../student-accounts';
import { XrplTx } from '@local/common';
import * as crypto from 'crypto-js';

xrpl_tx.onCreateHandler.push(async (snapshot, context) => {
  const data = snapshot.data()! as XrplTx;
  const txs = data.txs;
  const privKey = process.env.PRIV_KEY;
  if (!privKey) {
    console.log('no privKey');
    return;
  }
  if (!txs.length) {
    console.log('no tx');
    return;
  }
  const tx = txs[0];

  const xrpl = require('xrpl');
  const adminAccount = await admin_account.getByName('admin');

  let senderAddress: string;
  let sender;
  if (tx.from_account_id == 'admin' || tx.from_account_id == adminAccount[0].id) {
    const adminPrivate = await admin_private.list(adminAccount[0].id);
    const encryptedSeed = adminPrivate[0].xrp_seed_hot;
    const decryptedSeed = crypto.AES.decrypt(encryptedSeed, privKey).toString(crypto.enc.Utf8);
    senderAddress = adminAccount[0].xrp_address_hot;
    sender = xrpl.Wallet.fromSeed(decryptedSeed);
  } else {
    const fromStudent = await student_account.get(tx.from_account_id || '');
    const accountPrivate = await account_private.listLatest(tx.from_account_id || '');

    const encryptedSeed = accountPrivate[0].xrp_seed;
    const decryptedSeed = crypto.AES.decrypt(encryptedSeed, privKey).toString(crypto.enc.Utf8);
    senderAddress = fromStudent.xrp_address;
    sender = xrpl.Wallet.fromSeed(decryptedSeed);
  }
  let distAddress: string;
  if (tx.dist_account_id == 'admin' || tx.dist_account_id == adminAccount[0].id) {
    distAddress = adminAccount[0].xrp_address_hot;
  } else {
    const distStudent = await student_account.get(tx.dist_account_id || '');
    distAddress = distStudent.xrp_address;
  }

  const TEST_NET = 'wss://s.altnet.rippletest.net:51233';
  const client = new xrpl.Client(TEST_NET);

  if (tx.amount_uupx && tx.amount_uupx != '0') {
    await client.connect();
    const vli = await client.getLedgerIndex();
    const sendUPXTx = {
      TransactionType: 'Payment',
      Account: senderAddress,
      Amount: {
        currency: 'UPX',
        value: (parseInt(tx.amount_uupx) / 1000000).toString(),
        issuer: adminAccount[0].xrp_address_cold,
      },
      Destination: distAddress,
      LastLedgerSequence: vli + 540,
    };
    const payPreparedUPX = await client.autofill(sendUPXTx);
    const paySignedUPX = sender.sign(payPreparedUPX);
    const payResultUPX = await client.submitAndWait(paySignedUPX.tx_blob);
    if (payResultUPX.result.meta.TransactionResult == 'tesSUCCESS') {
      console.log(`Transaction succeeded: https://testnet.xrpl.org/transactions/${paySignedUPX.hash}`);
    } else {
      // eslint-disable-next-line no-throw-literal
      console.log(`${tx.from_account_id} UPX Error sending transaction: ${payResultUPX.result.meta.TransactionResult}`);
    }
    await client.disconnect();
  }

  if (tx.amount_uspx && tx.amount_uspx != '0') {
    await client.connect();
    const vli = await client.getLedgerIndex();
    const sendSPXTx = {
      TransactionType: 'Payment',
      Account: senderAddress,
      Amount: {
        currency: 'SPX',
        value: (parseInt(tx.amount_uspx) / 1000000).toString(),
        issuer: adminAccount[0].xrp_address_cold,
      },
      Destination: distAddress,
      LastLedgerSequence: vli + 540,
    };
    const payPreparedSPX = await client.autofill(sendSPXTx);
    const paySignedSPX = sender.sign(payPreparedSPX);
    const payResultSPX = await client.submitAndWait(paySignedSPX.tx_blob);
    if (payResultSPX.result.meta.TransactionResult == 'tesSUCCESS') {
      console.log(`Transaction succeeded: https://testnet.xrpl.org/transactions/${paySignedSPX.hash}`);
    } else {
      // eslint-disable-next-line no-throw-literal
      console.log(`${tx.from_account_id} UPX Error sending transaction: ${payResultSPX.result.meta.TransactionResult}`);
    }
    await client.disconnect();
  }

  const slicedTxs = txs.slice(1);
  if (slicedTxs.length) {
    await xrpl_tx.create(
      new XrplTx({
        txs: slicedTxs,
      }),
    );
  }
});
