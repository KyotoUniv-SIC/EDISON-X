/* eslint-disable camelcase */
import { available_balance } from '../available-balances';
import { balance } from '../balances';
import { daily_payment } from '../daily-payments';
import { dailyPaymentOnCreate } from '../daily-payments/create-balance';
import { daily_usage } from '../daily-usages';
import { student_account } from '../student-accounts';
import { xrpl_tx } from '../xrpl-txs';
import { DailyPayment, XrplTx } from '@local/common';
import * as functions from 'firebase-functions';

const f = functions.region('asia-northeast1').runWith({ timeoutSeconds: 540, memory: '2GB', secrets: ['PRIV_KEY'] });
module.exports.dailyWithdraw = f.pubsub
  .schedule('30 9 * * *') //
  // .schedule('15,45 * * * *')
  .timeZone('Asia/Tokyo') // Users can choose timezone - default is America/Los_Angeles
  .onRun(async () => {
    const dailyUsages = await daily_usage.listYesterday();
    const now = new Date();
    const xrplTxs = new XrplTx({ txs: [] });

    for (const dailyUsage of dailyUsages) {
      const usage = parseInt(dailyUsage.amount_kwh_str) * 1000000;
      const students = await student_account.getByRoomID(dailyUsage.room_id);
      if (usage <= 0) {
        for (const student of students) {
          const dailyPayment = new DailyPayment({
            student_account_id: student.id,
            year: now.getFullYear().toString(),
            month: (now.getMonth() + 1).toString(),
            date: now.getDate().toString(),
            amount_mwh: usage.toString(),
            amount_uupx: '0',
            amount_uspx: '0',
            amount_insufficiency: '0',
          });
          await daily_payment.create(dailyPayment);

          // 残高更新がない場合，available-balanceのリセットを行う
          const currentBalance = await balance.listLatest(student.id);
          const availableBalance = await available_balance.getLatest(student.id);

          await available_balance.update({
            id: availableBalance[0].id,
            student_account_id: availableBalance[0].student_account_id,
            amount_uupx: currentBalance[0].amount_uupx,
            amount_uspx: currentBalance[0].amount_uspx,
          });
        }
      } else if (!students.length) {
        // console.log(dailyUsage.room_id, 'no student');
      } else {
        console.log('create DailyPayment', dailyUsage.room_id);
        for (const student of students) {
          const accountBalance = await balance.listLatest(student.id);
          const uupxAmount = parseInt(accountBalance[0].amount_uupx);
          const uspxAmount = parseInt(accountBalance[0].amount_uspx);
          const totalBalance = uupxAmount + uspxAmount;

          // uspxが大きい場合は全額ここから支払い、それ以外はuspxをすべて支払い
          let uupxPayment: string;
          let uspxPayment: string;
          let insufficiency: string;

          if (usage < uspxAmount) {
            uspxPayment = usage.toString();
            uupxPayment = '0';
            insufficiency = '0';
          } else if (usage < totalBalance) {
            uspxPayment = uspxAmount.toString();
            uupxPayment = (usage - uspxAmount).toString();
            insufficiency = '0';
          } else {
            uupxPayment = uupxAmount.toString();
            uspxPayment = uspxAmount.toString();
            insufficiency = (usage - totalBalance).toString();
          }

          const dailyPayment = new DailyPayment({
            student_account_id: student.id,
            year: now.getFullYear().toString(),
            month: (now.getMonth() + 1).toString(),
            date: now.getDate().toString(),
            amount_mwh: usage.toString(),
            amount_uupx: uupxPayment,
            amount_uspx: uspxPayment,
            amount_insufficiency: insufficiency,
          });

          await daily_payment.create(dailyPayment);
          await dailyPaymentOnCreate({ data: () => dailyPayment }, null);
          xrplTxs.txs.push({ from_account_id: student.id, dist_account_id: 'admin', amount_uupx: uupxPayment, amount_uspx: uspxPayment });
        }
      }
    }
    await xrpl_tx.create(xrplTxs);
  });
