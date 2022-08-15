/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable camelcase */
import { account_private } from '../account-privates';
import { admin_account } from '../admin-accounts';
import { admin_private } from '../admin-privates';
import { balance } from '../balances';
import { student_account } from '../student-accounts';
import * as crypto from 'crypto-js';
import * as functions from 'firebase-functions';

const f = functions.region('asia-northeast1').runWith({ timeoutSeconds: 540, memory: '2GB', secrets: ['PRIV_KEY'] });
module.exports.fetchBalance = f.pubsub
  .schedule('0 17 15 * *')
  // .schedule('20,40,50 * * * *')
  .timeZone('Asia/Tokyo') // Users can choose timezone - default is America/Los_Angeles
  .onRun(async () => {
    const xrpl = require('xrpl');
    const TEST_NET = 'wss://s.altnet.rippletest.net:51233';
    const client = new xrpl.Client(TEST_NET);
    const students = await student_account.list();
    const privKey = process.env.PRIV_KEY;
    if (!privKey) {
      console.log('no privKey');
      return;
    }
    const adminAccount = await admin_account.getByName('admin');
    const adminPrivate = await admin_private.list(adminAccount[0].id);
    const adminEncryptedSeed = adminPrivate[0].xrp_seed_hot;
    const adminDecryptedSeed = crypto.AES.decrypt(adminEncryptedSeed, privKey).toString(crypto.enc.Utf8);
    const adminWallet = xrpl.Wallet.fromSeed(adminDecryptedSeed);

    for (const student of students) {
      const balances = await balance.listLatest(student.id);
      const edisonBalance = balances[0];
      const uupxEdisonBalance = parseInt(edisonBalance.amount_uupx);
      const uspxEdisonBalance = parseInt(edisonBalance.amount_uspx);
      await client.connect();
      const trustLine = await client.request({
        command: 'account_lines',
        account: student.xrp_address,
        ledger_index: 'validated',
      });
      await client.disconnect();
      const spxAmount: string = trustLine.result.lines.find((line: { currency: string }) => line.currency == 'SPX').balance;
      const upxAmount: string = trustLine.result.lines.find((line: { currency: string }) => line.currency == 'UPX').balance;

      const uupxXrplBalance = parseInt(upxAmount) * 1000000;
      const uspxXrplBalance = parseInt(spxAmount) * 1000000;

      const accountPrivate = await account_private.list(student.id);
      const studentEncryptedSeed = accountPrivate[0].xrp_seed;
      const studentDecryptedSeed = crypto.AES.decrypt(studentEncryptedSeed, privKey).toString(crypto.enc.Utf8);
      const studentWallet = xrpl.Wallet.fromSeed(studentDecryptedSeed);

      if (uupxEdisonBalance != uupxXrplBalance) {
        console.log(student.name, 'different UPX balance', 'edison', uupxEdisonBalance, 'xrpl', uupxXrplBalance);
        if (uupxXrplBalance > uupxEdisonBalance) {
          await client.connect();
          const vli = await client.getLedgerIndex();
          const sendUPXTx = {
            TransactionType: 'Payment',
            Account: student.xrp_address,
            Amount: {
              currency: 'UPX',
              value: ((uupxXrplBalance - uupxEdisonBalance) / 1000000).toString(),
              issuer: adminAccount[0].xrp_address_cold,
            },
            Destination: adminAccount[0].xrp_address_hot,
            LastLedgerSequence: vli + 540,
          };
          const payPreparedUPX = await client.autofill(sendUPXTx);
          const paySignedUPX = studentWallet.sign(payPreparedUPX);
          const payResultUPX = await client.submitAndWait(paySignedUPX.tx_blob);
          if (payResultUPX.result.meta.TransactionResult == 'tesSUCCESS') {
            console.log(`Transaction succeeded: https://testnet.xrpl.org/transactions/${paySignedUPX.hash}`);
          } else {
            // eslint-disable-next-line no-throw-literal
            console.log(`${student.id} UPX Error sending transaction: ${payResultUPX.result.meta.TransactionResult}`);
          }
          await client.disconnect();
        } else {
          await client.connect();
          const vli = await client.getLedgerIndex();
          const sendUPXTx = {
            TransactionType: 'Payment',
            Account: adminAccount[0].xrp_address_hot,
            Amount: {
              currency: 'UPX',
              value: ((uupxEdisonBalance - uupxEdisonBalance) / 1000000).toString(),
              issuer: adminAccount[0].xrp_address_cold,
            },
            Destination: student.xrp_address,
            LastLedgerSequence: vli + 540,
          };
          const payPreparedUPX = await client.autofill(sendUPXTx);
          const paySignedUPX = adminWallet.sign(payPreparedUPX);
          const payResultUPX = await client.submitAndWait(paySignedUPX.tx_blob);
          if (payResultUPX.result.meta.TransactionResult == 'tesSUCCESS') {
            console.log(`Transaction succeeded: https://testnet.xrpl.org/transactions/${paySignedUPX.hash}`);
          } else {
            // eslint-disable-next-line no-throw-literal
            console.log(`${student.id} UPX Error sending transaction: ${payResultUPX.result.meta.TransactionResult}`);
          }
          await client.disconnect();
        }
      } else {
        console.log(student.name, 'correct UPX balance');
      }

      if (uspxEdisonBalance != uspxXrplBalance) {
        console.log(student.name, 'different SPX balance', 'edison', uspxEdisonBalance, 'xrpl', uspxXrplBalance);
        if (uspxXrplBalance > uupxEdisonBalance) {
          await client.connect();
          const vli = await client.getLedgerIndex();
          const sendSPXTx = {
            TransactionType: 'Payment',
            Account: student.xrp_address,
            Amount: {
              currency: 'SPX',
              value: ((uspxXrplBalance - uspxEdisonBalance) / 1000000).toString(),
              issuer: adminAccount[0].xrp_address_cold,
            },
            Destination: adminAccount[0].xrp_address_hot,
            LastLedgerSequence: vli + 540,
          };
          const payPreparedSPX = await client.autofill(sendSPXTx);
          const paySignedSPX = studentWallet.sign(payPreparedSPX);
          const payResultSPX = await client.submitAndWait(paySignedSPX.tx_blob);
          if (payResultSPX.result.meta.TransactionResult == 'tesSUCCESS') {
            console.log(`Transaction succeeded: https://testnet.xrpl.org/transactions/${paySignedSPX.hash}`);
          } else {
            // eslint-disable-next-line no-throw-literal
            console.log(`${student.id} SPX Error sending transaction: ${payResultSPX.result.meta.TransactionResult}`);
          }
          await client.disconnect();
        } else {
          await client.connect();
          const vli = await client.getLedgerIndex();
          const sendSPXTx = {
            TransactionType: 'Payment',
            Account: adminAccount[0].xrp_address_hot,
            Amount: {
              currency: 'SPX',
              value: ((uspxEdisonBalance - uspxXrplBalance) / 1000000).toString(),
              issuer: adminAccount[0].xrp_address_cold,
            },
            Destination: student.xrp_address,
            LastLedgerSequence: vli + 540,
          };
          const payPreparedSPX = await client.autofill(sendSPXTx);
          const paySignedSPX = adminWallet.sign(payPreparedSPX);
          const payResultSPX = await client.submitAndWait(paySignedSPX.tx_blob);
          if (payResultSPX.result.meta.TransactionResult == 'tesSUCCESS') {
            console.log(`Transaction succeeded: https://testnet.xrpl.org/transactions/${paySignedSPX.hash}`);
          } else {
            // eslint-disable-next-line no-throw-literal
            console.log(`${student.id} SPX Error sending transaction: ${payResultSPX.result.meta.TransactionResult}`);
          }
          await client.disconnect();
        }
      } else {
        console.log(student.name, 'correct SPX balance');
      }
    }
  });
