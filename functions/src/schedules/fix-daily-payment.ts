/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable camelcase */
import { daily_payment } from '../daily-payments';
import { daily_usage } from '../daily-usages';
import { student_account } from '../student-accounts';
import { DailyPayment } from '@local/common';
import * as functions from 'firebase-functions';
import { Timestamp } from 'firebase/firestore';

const f = functions.region('asia-northeast1').runWith({ timeoutSeconds: 540, memory: '2GB', secrets: ['PRIV_KEY'] });
module.exports.fixDailyPayments = f.pubsub
  .schedule('30 19 12 * *')
  // .schedule('20,40,50 * * * *')
  .timeZone('Asia/Tokyo') // Users can choose timezone - default is America/Los_Angeles
  .onRun(async () => {
    const students = await student_account.list();
    for (const student of students) {
      const payments = await daily_payment.listLastMonthFix(student.id);
      const payment = payments.find((a) => (a.created_at as Timestamp).toDate().getDate() == 7);

      if (payment) {
        console.log('calc', student.id, student.name);
        const usages = await daily_usage.listLastMonthFix(student.room_id);
        let uspxBalance = parseInt(payment.amount_uspx);

        const usage2nd = usages.find((a) => (a.created_at as Timestamp).toDate().getDate() == 2);
        console.log(usage2nd);
        if (usage2nd) {
          const amount = parseInt(usage2nd.amount_kwh_str) * 1000000;
          let uupx;
          let uspx;
          if (uspxBalance) {
            if (uspxBalance > amount) {
              uupx = 0;
              uspx = amount;
              uspxBalance -= amount;
            } else {
              uupx = amount - uspxBalance;
              uspx = uspxBalance;
              uspxBalance = 0;
            }
          } else {
            uupx = amount;
            uspx = 0;
          }
          const payment3rd = new DailyPayment({
            student_account_id: student.id,
            year: '2022',
            month: '7',
            date: '3',
            amount_mwh: amount.toString(),
            amount_uupx: uupx.toString(),
            amount_uspx: uspx.toString(),
            amount_insufficiency: '0',
          });
          console.log('3rd', payment3rd.amount_mwh);
          await daily_payment.create3rd(payment3rd);
        }

        const usage3rd = usages.find((a) => (a.created_at as Timestamp).toDate().getDate() == 3);
        if (usage3rd) {
          const amount = parseInt(usage3rd.amount_kwh_str) * 1000000;
          let uupx;
          let uspx;
          if (uspxBalance) {
            if (uspxBalance > amount) {
              uupx = 0;
              uspx = amount;
              uspxBalance -= amount;
            } else {
              uupx = amount - uspxBalance;
              uspx = uspxBalance;
              uspxBalance = 0;
            }
          } else {
            uupx = amount;
            uspx = 0;
          }
          const payment4th = new DailyPayment({
            student_account_id: student.id,
            year: '2022',
            month: '7',
            date: '4',
            amount_mwh: amount.toString(),
            amount_uupx: uupx.toString(),
            amount_uspx: uspx.toString(),
            amount_insufficiency: '0',
          });
          console.log('4th', payment4th.amount_mwh);
          await daily_payment.create4th(payment4th);
        }

        const usage4th = usages.find((a) => (a.created_at as Timestamp).toDate().getDate() == 4);
        if (usage4th) {
          const amount = parseInt(usage4th.amount_kwh_str) * 1000000;
          let uupx;
          let uspx;
          if (uspxBalance) {
            if (uspxBalance > amount) {
              uupx = 0;
              uspx = amount;
              uspxBalance -= amount;
            } else {
              uupx = amount - uspxBalance;
              uspx = uspxBalance;
              uspxBalance = 0;
            }
          } else {
            uupx = amount;
            uspx = 0;
          }
          const payment5th = new DailyPayment({
            student_account_id: student.id,
            year: '2022',
            month: '7',
            date: '5',
            amount_mwh: amount.toString(),
            amount_uupx: uupx.toString(),
            amount_uspx: uspx.toString(),
            amount_insufficiency: '0',
          });
          console.log('5th', payment5th.amount_mwh);
          await daily_payment.create5th(payment5th);
        }

        const usage5th = usages.find((a) => (a.created_at as Timestamp).toDate().getDate() == 5);
        if (usage5th) {
          const amount = parseInt(usage5th.amount_kwh_str) * 1000000;
          let uupx;
          let uspx;
          if (uspxBalance) {
            if (uspxBalance > amount) {
              uupx = 0;
              uspx = amount;
              uspxBalance -= amount;
            } else {
              uupx = amount - uspxBalance;
              uspx = uspxBalance;
              uspxBalance = 0;
            }
          } else {
            uupx = amount;
            uspx = 0;
          }
          const payment6th = new DailyPayment(
            {
              student_account_id: student.id,
              year: '2022',
              month: '7',
              date: '6',
              amount_mwh: amount.toString(),
              amount_uupx: uupx.toString(),
              amount_uspx: uspx.toString(),
              amount_insufficiency: '0',
            },
            Timestamp.fromDate(new Date('2022-07-06T09:30:00')),
          );
          console.log('6th', payment6th.amount_mwh);
          await daily_payment.create6th(payment6th);
        }

        const usage6th = usages.find((a) => (a.created_at as Timestamp).toDate().getDate() == 6);
        if (usage6th) {
          const amount = parseInt(usage6th.amount_kwh_str) * 1000000;
          let uupx;
          let uspx;
          if (uspxBalance) {
            if (uspxBalance > amount) {
              uupx = 0;
              uspx = amount;
              uspxBalance -= amount;
            } else {
              uupx = amount - uspxBalance;
              uspx = uspxBalance;
              uspxBalance = 0;
            }
          } else {
            uupx = amount;
            uspx = 0;
          }
          const payment7th = new DailyPayment(
            {
              student_account_id: student.id,
              year: '2022',
              month: '7',
              date: '7',
              amount_mwh: amount.toString(),
              amount_uupx: uupx.toString(),
              amount_uspx: uspx.toString(),
              amount_insufficiency: '0',
            },
            Timestamp.fromDate(new Date('2022-07-07T09:30:00')),
          );
          console.log('7th', payment7th.amount_mwh);
          await daily_payment.create7th(payment7th);
        }

        if (usage2nd && usage3rd && usage4th && usage5th && usage6th) {
          const beforeAmount = parseInt(payment.amount_mwh);
          const totalAmount =
            (parseInt(usage2nd.amount_kwh_str) +
              parseInt(usage3rd.amount_kwh_str) +
              parseInt(usage4th.amount_kwh_str) +
              parseInt(usage5th.amount_kwh_str) +
              parseInt(usage6th.amount_kwh_str)) *
            1000000;
          if (beforeAmount == totalAmount) {
            console.log('complete');
          } else {
            console.log(student.id, 'unequal amount before', beforeAmount, 'total', totalAmount);
          }
        } else console.log('err');
      } else {
        console.log(student.name, 'no operation');
      }
    }
  });
