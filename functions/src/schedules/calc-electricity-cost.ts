/* eslint-disable camelcase */
import { monthly_usage } from '../monthly-usages';
import { student_account } from '../student-accounts';
import * as functions from 'firebase-functions';

const f = functions.region('asia-northeast1').runWith({ timeoutSeconds: 540, memory: '2GB' });
module.exports.calcElectricityCost = f.pubsub
  .schedule('0 12 1 * *')
  // .schedule('5,35 * * * *')
  .timeZone('Asia/Tokyo') // Users can choose timezone - default is America/Los_Angeles
  .onRun(async () => {
    const priceEastJuly = 29 * 1000000;
    const priceDormJuly = 19 * 1000000;
    const rate = 1.5;
    const students = await student_account.list();

    let amountDormKwh = 0;
    let countDorm = 0;
    let amountEastKwh = 0;
    for (const student of students) {
      // String.prototype.indexOf() Not find return -1
      if (student.room_id.indexOf('koushi' || 'sentetsu') !== -1) {
        const monthlyUsages = await monthly_usage.listLatest(student.id);
        if (monthlyUsages.length) {
          amountDormKwh += parseInt(monthlyUsages[0].amount_mwh) / 1000000;
        }
        countDorm++;
      } else {
        const monthlyUsages = await monthly_usage.listLatest(student.id);
        if (monthlyUsages.length) {
          amountEastKwh += parseInt(monthlyUsages[0].amount_mwh) / 1000000;
        }
      }
    }
    const priceDormAverage = 12.87 * 1000000 + (542 * 1000000 * countDorm) / amountDormKwh;

    // sigma = (priceEastJuly - alpha * priceDormAverage)^2 + (priceDormJuly - alpha * priceDormAverage / rate)^2
    // 上記の式を最小化し，alphaを求める。

    // alpha = (priceEastJuly + priceDormJuly / rate) / ((1 + 1 / rate ^ 2) * priceDormAverage)
    const alpha = (priceEastJuly + priceDormJuly / rate) / (1 + 1 / rate / rate) / priceDormAverage;
    console.log('alpha: ' + alpha);

    const priceEast = alpha * priceDormAverage;
    const priceDorm = (alpha * priceDormAverage) / rate;
    console.log('East price: ' + priceEast, 'Dorm price: ' + priceDorm);
    const cost = priceEast * amountEastKwh + priceDorm * amountDormKwh;
    console.log('electricity cost: ' + cost);
  });
