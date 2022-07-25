/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable camelcase */
import { daily_payment_tx } from '.';
import { account_private } from '../account-privates';
import { admin_account } from '../admin-accounts';
import { DailyPaymentTx } from '@local/common';
import * as crypto from 'crypto-js';

daily_payment_tx.onCreateHandler.push(async (snapshot, context) => {
  const data = snapshot.data()! as DailyPaymentTx;
  const txs = data.txs;
  const privKey = process.env.PRIV_KEY;
  if (!privKey) {
    console.log('no privKey');
    return;
  }
  let slicedTxs;
  if (data.txs.length > 10) {
    slicedTxs = txs.slice(0, 9);
  } else {
    slicedTxs = txs;
  }
  for (const tx of slicedTxs) {
    if (tx.student_account_id) {
      const accountPrivate = await account_private.list(tx.student_account_id);
      if (accountPrivate.length) {
        const adminAccount = await admin_account.getByName('admin');

        const xrpl = require('xrpl');
        const TEST_NET = 'wss://s.altnet.rippletest.net:51233';
        const client = new xrpl.Client(TEST_NET);

        const decrypted = crypto.AES.decrypt(accountPrivate[0].xrp_seed, privKey).toString(crypto.enc.Utf8);

        if (tx.amount_uupx && tx.amount_uupx != '0') {
          await client.connect();
          const sender = xrpl.Wallet.fromSeed(decrypted);
          const vli = await client.getLedgerIndex();
          const sendUPXTx = {
            TransactionType: 'Payment',
            Account: sender.address,
            Amount: {
              currency: 'UPX',
              value: (parseInt(tx.amount_uupx) / 1000000).toString(),
              issuer: adminAccount[0].xrp_address_cold,
            },
            Destination: adminAccount[0].xrp_address_hot,
            LastLedgerSequence: vli + 540,
          };
          const payPreparedUPX = await client.autofill(sendUPXTx);
          const paySignedUPX = sender.sign(payPreparedUPX);
          const payResultUPX = await client.submitAndWait(paySignedUPX.tx_blob);
          if (payResultUPX.result.meta.TransactionResult == 'tesSUCCESS') {
            console.log(`Transaction succeeded: https://testnet.xrpl.org/transactions/${paySignedUPX.hash}`);
          } else {
            // eslint-disable-next-line no-throw-literal
            throw `${tx.student_account_id} UPX Error sending transaction: ${payResultUPX.result.meta.TransactionResult}`;
          }
          await client.disconnect();
        }

        if (tx.amount_uspx && tx.amount_uspx != '0') {
          await client.connect();
          const sender = xrpl.Wallet.fromSeed(decrypted);
          const vli = await client.getLedgerIndex();
          const sendSPXTx = {
            TransactionType: 'Payment',
            Account: sender.address,
            Amount: {
              currency: 'SPX',
              value: (parseInt(tx.amount_uspx) / 1000000).toString(),
              issuer: adminAccount[0].xrp_address_cold,
            },
            Destination: adminAccount[0].xrp_address_hot,
            LastLedgerSequence: vli + 540,
          };
          const payPreparedSPX = await client.autofill(sendSPXTx);
          const paySignedSPX = sender.sign(payPreparedSPX);
          const payResultSPX = await client.submitAndWait(paySignedSPX.tx_blob);
          if (payResultSPX.result.meta.TransactionResult == 'tesSUCCESS') {
            console.log(`Transaction succeeded: https://testnet.xrpl.org/transactions/${paySignedSPX.hash}`);
          } else {
            // eslint-disable-next-line no-throw-literal
            throw `${tx.student_account_id} SPX Error sending transaction: ${payResultSPX.result.meta.TransactionResult}`;
          }
          await await client.disconnect();
        }
      }
    }
  }
  if (data.txs.length > 10) {
    const nextTxs = txs.slice(10);
    const nextdailyPaymentTxs = new DailyPaymentTx({ txs: nextTxs });
    daily_payment_tx.create(nextdailyPaymentTxs);
  }
});
