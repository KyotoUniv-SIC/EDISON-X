/* eslint-disable camelcase */
import { balance } from '../balances';
import { monthly_usage } from '../monthly-usages';
import { normal_ask } from '../normal-asks';
import { normal_bid } from '../normal-bids';
import { normal_settlement } from '../normal-settlements';
import { student_account } from '../student-accounts';
import { NormalAsk, NormalBid, proto } from '@local/common';
import * as functions from 'firebase-functions';

const f = functions.region('asia-northeast1').runWith({ timeoutSeconds: 540, memory: '2GB' });
module.exports.autoOrder = f.pubsub
  .schedule('0 11 * * *')
  .timeZone('Asia/Tokyo') // Users can choose timezone - default is America/Los_Angeles
  .onRun(async () => {
    // AutoOrder Algorithm
    // The following three data are required for operation
    // 1. latest normal settlement (contract price)
    // 2. latest balance (each user)
    // 3. latest monthly usage (each user)

    const learningRate = 0.005;
    const seasonRate = [
      1.2, // Jan
      1.08, // Feb
      1.02, // Mar
      0.81, // Apr
      0.9, // May
      0.88, // Jun
      0.96, // Jul
      1.2, // Aug
      1.06, // Sep
      0.94, // Oct
      0.92, // Nov
      1.08, // Dec
    ];
    const latestNormalSettlements = await normal_settlement.listLatest();
    if (latestNormalSettlements.length === 0) {
      console.log('normal settlement not found');
      return;
    }
    const latestMicroPrice = Number(latestNormalSettlements[0].price_ujpy);
    const students = await student_account.list();
    const autoOrderStudents = students.filter((student) => student.auto_order);

    for (const student of autoOrderStudents) {
      const studentBalances = await balance.listLatest(student.id);
      if (studentBalances.length === 0) {
        console.log('balance not found');
        return;
      }
      const monthlyUsages = await monthly_usage.listLatest(student.id);
      if (monthlyUsages.length === 0) {
        console.log('monthly usage not found');
        return;
      }

      const now = new Date();
      const month = now.getMonth(); // number 0-11;

      const estimatedMicroUsage = Number(monthlyUsages[0].amount_mwh) * seasonRate[month];
      const numberOfDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
      const sellMicroAmount =
        Number(studentBalances[0].amount_uspx) +
        Number(studentBalances[0].amount_uupx) -
        (estimatedMicroUsage * (numberOfDays - now.getDate())) / numberOfDays;
      // if sell, microPriceChange is positive. if buy, microPriceChange is negative.
      const microPriceChange = ((learningRate * sellMicroAmount * numberOfDays) / estimatedMicroUsage) * latestMicroPrice;
      // if sell, estimatedMicroPrice is lower than latestMicroPrice. if buy, estimatedMicroPrice is higher than latestMicroPrice.
      const estimatedMicroPrice = latestMicroPrice - microPriceChange;

      if (sellMicroAmount > 0) {
        await normal_ask.create(
          new NormalAsk({
            type: proto.main.NormalAskType.SECONDARY,
            account_id: student.id,
            price_ujpy: Math.floor(estimatedMicroPrice).toString(),
            amount_uupx: Math.floor(sellMicroAmount).toString(),
            is_deleted: false,
          }),
        );
      } else if (sellMicroAmount < 0) {
        await normal_bid.create(
          new NormalBid({
            account_id: student.id,
            price_ujpy: Math.floor(estimatedMicroPrice).toString(),
            amount_uupx: Math.floor(-sellMicroAmount).toString(),
            is_deleted: false,
          }),
        );
      } else {
        console.log('current balance & desired balance are equal. no order');
      }
    }
  });
