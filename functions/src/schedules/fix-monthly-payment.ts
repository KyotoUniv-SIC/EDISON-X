/* eslint-disable camelcase */
import { monthly_payment } from '../monthly-payments';
import { student_account } from '../student-accounts';
import * as functions from 'firebase-functions';

const f = functions.region('asia-northeast1').runWith({ timeoutSeconds: 540, memory: '2GB' });
module.exports.calcElectricityCost = f.pubsub
  .schedule('0 12 1 * *')
  // .schedule('5,35 * * * *')
  .timeZone('Asia/Tokyo') // Users can choose timezone - default is America/Los_Angeles
  .onRun(async () => {
    const students = await student_account.list();
    for (const student of students) {
      const monthlyPayments = await monthly_payment.listLatest(student.id);
      if (monthlyPayments.length) {
        for (const payment of monthlyPayments) {
          const total =
            parseInt(payment.amount_adjust_ujpy ?? '0') +
            parseInt(payment.amount_market_ujpy ?? '0') +
            parseInt(payment.amount_primary_ujpy ?? '0') +
            parseInt(payment.amount_reward_ujpy ?? '0');

          await monthly_payment.update({
            id: payment.id,
            student_account_id: payment.student_account_id,
            amount_ujpy: total.toString(),
          });
        }
      }
    }
  });
