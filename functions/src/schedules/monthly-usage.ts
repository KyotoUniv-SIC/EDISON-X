/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable camelcase */
import { balance } from '../balances';
import { daily_payment } from '../daily-payments';
import { monthly_usage } from '../monthly-usages';
import { primary_ask } from '../primary-asks';
import { student_account } from '../student-accounts';
import { Balance } from '@local/common';
import * as functions from 'firebase-functions';

const f = functions.region('asia-northeast1').runWith({ timeoutSeconds: 540, memory: '2GB', secrets: ['PRIV_KEY'] });
module.exports.monthlyUsage = f.pubsub
  .schedule('0 23 * * *')
  // .schedule('20,40,50 * * * *')
  .timeZone('Asia/Tokyo') // Users can choose timezone - default is America/Los_Angeles
  .onRun(async () => {
    const students = await student_account.list();
    for (const student of students) {
      const payments = await daily_payment.listLastMonthFix(student.id);
      const usage = payments.reduce((prev, current) => prev + parseInt(current.amount_mwh), 0);
      console.log(student.name, usage, 'mwh');
      const monthlyUsages = await monthly_usage.listLatest(student.id);
      const monthlyUsage = monthlyUsages[0];
      await monthly_usage.update({
        id: monthlyUsage.id,
        student_account_id: monthlyUsage.student_account_id,
        amount_mwh: usage.toString(),
      });

      if (student.id != 'nOwrY8P1FMATI3Y4l3I6' && student.id != 'LZU4hA5VcHq9jYCwjrPS' && student.id != 'HGKDiV9NEU5TgI7uaDFJ') {
        const primaryAsks = await primary_ask.listLastMonthByID(student.id);
        const primaryAsk = primaryAsks[0];
        await primary_ask.update({ id: primaryAsk.id, account_id: primaryAsk.account_id, amount_uupx: usage.toString() });
        const balances = await balance.listLatest(student.id);
        const ba = balances[0];

        const token = usage - parseInt(primaryAsk.amount_uupx);
        if (token < 0) {
          console.log('error minus detected');
        }
        await balance.create(
          new Balance({
            student_account_id: student.id,
            amount_uupx: (parseInt(ba.amount_uupx) + token).toString(),
            amount_uspx: ba.amount_uspx,
          }),
        );
        console.log('ok', student.name);
      }
    }
  });
