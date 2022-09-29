/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable camelcase */
import { xrpl_monthly_tx } from '.';
import { account_private } from '../account-privates';
import { admin_account } from '../admin-accounts';
import { admin_private } from '../admin-privates';
import { student_account } from '../student-accounts';
import { XrplMonthlyTx } from '@local/common';
import * as crypto from 'crypto-js';

xrpl_monthly_tx.onCreateHandler.push(async (snapshot, context) => {
  const data = snapshot.data()! as XrplMonthlyTx;
  // txsはトランザクション情報の配列
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

  let operatorAddress: string;
  let operator;
  // Adminの場合とそれ以外でseedの取得方法が異なる
  if (tx.from_account_id == 'admin' || tx.from_account_id == adminAccount[0].id) {
    const adminPrivate = await admin_private.list(adminAccount[0].id);
    const encryptedSeed = adminPrivate[0].xrp_seed_hot;
    const decryptedSeed = crypto.AES.decrypt(encryptedSeed, privKey).toString(crypto.enc.Utf8);
    operatorAddress = adminAccount[0].xrp_address_hot;
    operator = xrpl.Wallet.fromSeed(decryptedSeed);
  } else {
    const operatorStudent = await student_account.get(tx.from_account_id || '');
    const accountPrivate = await account_private.listLatest(tx.from_account_id || '');
    const encryptedSeed = accountPrivate[0].xrp_seed;
    const decryptedSeed = crypto.AES.decrypt(encryptedSeed, privKey).toString(crypto.enc.Utf8);
    operatorAddress = operatorStudent.xrp_address;
    operator = xrpl.Wallet.fromSeed(decryptedSeed);
  }
  let targetAddress: string;
  let target;
  // Adminの場合とそれ以外でseedの取得方法が異なる
  if (tx.dist_account_id == 'admin' || tx.dist_account_id == adminAccount[0].id) {
    const adminPrivate = await admin_private.list(adminAccount[0].id);
    const encryptedSeed = adminPrivate[0].xrp_seed_hot;
    const decryptedSeed = crypto.AES.decrypt(encryptedSeed, privKey).toString(crypto.enc.Utf8);
    targetAddress = adminAccount[0].xrp_address_hot;
    target = xrpl.Wallet.fromSeed(decryptedSeed);
  } else {
    const targetStudent = await student_account.get(tx.dist_account_id || '');
    const accountPrivate = await account_private.listLatest(tx.dist_account_id || '');
    const encryptedSeed = accountPrivate[0].xrp_seed;
    const decryptedSeed = crypto.AES.decrypt(encryptedSeed, privKey).toString(crypto.enc.Utf8);
    targetAddress = targetStudent.xrp_address;
    target = xrpl.Wallet.fromSeed(decryptedSeed);
  }

  const TEST_NET = 'wss://s.altnet.rippletest.net:51233';
  const client = new xrpl.Client(TEST_NET);

  await client.connect();
  // XRPL上のトークン残高 (TrustLine)を取得
  const trustLine = await client.request({
    command: 'account_lines',
    account: targetAddress,
    ledger_index: 'validated',
  });
  await client.disconnect();

  const spxAmount: string = trustLine.result.lines.find((line: { currency: string }) => line.currency == 'SPX').balance;
  const upxAmount: string = trustLine.result.lines.find((line: { currency: string }) => line.currency == 'UPX').balance;

  const uupxBalance = parseInt(upxAmount) * 1000000;
  const uspxBalance = parseInt(spxAmount) * 1000000;
  const uupxIssue = parseInt(tx.amount_uupx || '0');
  const uspxIssue = parseInt(tx.amount_uspx || '0');

  // UPX Tx
  if (uupxIssue > uupxBalance) {
    // UPX発行量>保有量のケース
    await client.connect();
    const vli = await client.getLedgerIndex();
    const sendUPXTx = {
      TransactionType: 'Payment',
      Account: operatorAddress,
      Amount: {
        currency: 'UPX',
        value: ((uupxIssue - uupxBalance) / 1000000).toString(),
        issuer: adminAccount[0].xrp_address_cold,
      },
      Destination: targetAddress,
      LastLedgerSequence: vli + 540,
    };
    const payPreparedUPX = await client.autofill(sendUPXTx);
    const paySignedUPX = operator.sign(payPreparedUPX);
    const payResultUPX = await client.submitAndWait(paySignedUPX.tx_blob);
    if (payResultUPX.result.meta.TransactionResult == 'tesSUCCESS') {
      console.log(`Transaction succeeded: https://testnet.xrpl.org/transactions/${paySignedUPX.hash}`);
    } else {
      // eslint-disable-next-line no-throw-literal
      console.log(`${tx.from_account_id} UPX Error sending transaction: ${payResultUPX.result.meta.TransactionResult}`);
    }
    await client.disconnect();
  } else if (uupxBalance > uupxIssue) {
    // UPX保有量>発行量のケース
    await client.connect();
    const vli = await client.getLedgerIndex();
    const sendUPXTx = {
      TransactionType: 'Payment',
      Account: targetAddress,
      Amount: {
        currency: 'UPX',
        value: ((uupxBalance - uupxIssue) / 1000000).toString(),
        issuer: adminAccount[0].xrp_address_cold,
      },
      Destination: operatorAddress,
      LastLedgerSequence: vli + 540,
    };
    const payPreparedUPX = await client.autofill(sendUPXTx);
    const paySignedUPX = target.sign(payPreparedUPX);
    const payResultUPX = await client.submitAndWait(paySignedUPX.tx_blob);
    if (payResultUPX.result.meta.TransactionResult == 'tesSUCCESS') {
      console.log(`Transaction succeeded: https://testnet.xrpl.org/transactions/${paySignedUPX.hash}`);
    } else {
      // eslint-disable-next-line no-throw-literal
      console.log(`${tx.from_account_id} UPX Error sending transaction: ${payResultUPX.result.meta.TransactionResult}`);
    }
    await client.disconnect();
  }

  // SPX Tx
  // 現状の仕様では月初のSPX付与はないため、SPX保有量>発行量のケースしかない
  if (uspxIssue > uspxBalance) {
    // SPX保有量>発行量のケース
    await client.connect();
    const vli = await client.getLedgerIndex();
    const sendSPXTx = {
      TransactionType: 'Payment',
      Account: operatorAddress,
      Amount: {
        currency: 'SPX',
        value: ((uspxIssue - uspxBalance) / 1000000).toString(),
        issuer: adminAccount[0].xrp_address_cold,
      },
      Destination: targetAddress,
      LastLedgerSequence: vli + 540,
    };
    const payPreparedSPX = await client.autofill(sendSPXTx);
    const paySignedSPX = operator.sign(payPreparedSPX);
    const payResultSPX = await client.submitAndWait(paySignedSPX.tx_blob);
    if (payResultSPX.result.meta.TransactionResult == 'tesSUCCESS') {
      console.log(`Transaction succeeded: https://testnet.xrpl.org/transactions/${paySignedSPX.hash}`);
    } else {
      // eslint-disable-next-line no-throw-literal
      console.log(`${tx.from_account_id} SPX Error sending transaction: ${payResultSPX.result.meta.TransactionResult}`);
    }
    await client.disconnect();
  } else if (uspxBalance > uspxIssue) {
    // SPX保有量>発行量のケース
    await client.connect();
    const vli = await client.getLedgerIndex();
    const sendSPXTx = {
      TransactionType: 'Payment',
      Account: targetAddress,
      Amount: {
        currency: 'SPX',
        value: ((uspxBalance - uspxIssue) / 1000000).toString(),
        issuer: adminAccount[0].xrp_address_cold,
      },
      Destination: operatorAddress,
      LastLedgerSequence: vli + 540,
    };
    const payPreparedSPX = await client.autofill(sendSPXTx);
    const paySignedSPX = target.sign(payPreparedSPX);
    const payResultSPX = await client.submitAndWait(paySignedSPX.tx_blob);
    if (payResultSPX.result.meta.TransactionResult == 'tesSUCCESS') {
      console.log(`Transaction succeeded: https://testnet.xrpl.org/transactions/${paySignedSPX.hash}`);
    } else {
      // eslint-disable-next-line no-throw-literal
      console.log(`${tx.from_account_id} SPX Error sending transaction: ${payResultSPX.result.meta.TransactionResult}`);
    }
    await client.disconnect();
  }

  // 配列の1つ目（処理したTx）以外を新しい配列にする
  const slicedTxs = txs.slice(1);
  if (slicedTxs.length) {
    // 新しい配列を新しいxrpl_monthly_txのドキュメントに作成。このOnCreateが再度実行される
    await xrpl_monthly_tx.create(
      new XrplMonthlyTx({
        txs: slicedTxs,
      }),
    );
  }
});
