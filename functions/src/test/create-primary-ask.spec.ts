/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable camelcase */
import { getLatest, list } from './firestore.service';
import { getLatestByStudentID,  listLastMonth, listLatestByStudentID } from './firestore.student.service';
import { Balance, BalanceSnapshot, MonthlyPayment, MonthlyUsage, StudentAccount } from '@local/common';
import 'jest';

describe('test', () => {
  it('create primary ask', async () => {
    const data = (await getLatestByStudentID('3yBkwbYIpfJtArN4l64e', 'balances')) as BalanceSnapshot;
    console.log(data.student_account_id, 'adjustment start.');

    const studentID = data.student_account_id;
    console.log(studentID);
    const student = await getStudentAccount(studentID,'accounts') as StudentAccount;
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    const primaryAskSetting = await primary_ask_setting.getLatest();


    const primaryAsks = await list('primary_ask');
    const normalBids = await list('normal_bids');
    const normalAsks = await list('normal_asks');
    const renewableBids = await list('renewable_bid');
    const renewableAsks = await list('renewable_ask');
    // const discounts = await discount_price.listLatest();
    const uspxRanking = await getLatest('renewable_rankings');
    const rewardSetting = await getLatest('renewable_reward_settings');

    let primaryPayment: number;
    // let adjustPayment: number;

    // primaryPayment, adjustPaymentの算出
    if (primaryAsks.length) {
      primaryPayment = primaryAsks.reduce(
        (previous, current) => previous + (parseInt(current.price_ujpy) * parseInt(current.amount_uupx)) / 1000000,
        0,
      );
      // if (tokens >= 0) {
      //   adjustPayment = -((parseInt(primaryAsks[0].price_ujpy) - parseInt(discounts[0].price_ujpy)) * tokens) / 1000000;
      // } else {
      //   adjustPayment = -((parseInt(primaryAsks[0].price_ujpy) + parseInt(discounts[0].price_ujpy)) * tokens) / 1000000;
      // }
    } else {
      primaryPayment = 0;
      // if (tokens >= 0) {
      //   adjustPayment = -((27 * 1000000 - parseInt(discounts[0].price_ujpy)) * tokens) / 1000000;
      // } else {
      //   adjustPayment = -((27 * 1000000 + parseInt(discounts[0].price_ujpy)) * tokens) / 1000000;
      // }
    }

    // rewardPaymentの算出
    let rewardPayment: number;
    if (uspxRanking.first_student_id == data.student_account_id) {
      rewardPayment = -parseInt(rewardSetting.first_price_ujpy);
    } else if (uspxRanking.second_student_id == data.student_account_id) {
      rewardPayment = -parseInt(rewardSetting.second_price_ujpy);
    } else if (uspxRanking.third_student_id == data.student_account_id) {
      rewardPayment = -parseInt(rewardSetting.third_price_ujpy);
    } else {
      rewardPayment = 0;
    }

    // marketPaymentの算出
    let marketPayment = 0;
    for (const normalBid of normalBids) {
      if (normalBid.is_accepted == true) {
        marketPayment += (parseInt(normalBid.contract_price_ujpy) * parseInt(normalBid.amount_uupx)) / 1000000;
      }
    }
    for (const normalAsk of normalAsks) {
      if (normalAsk.is_accepted == true) {
        marketPayment -= (parseInt(normalAsk.contract_price_ujpy) * parseInt(normalAsk.amount_uupx)) / 1000000;
      }
    }
    for (const renewableBid of renewableBids) {
      if (renewableBid.is_accepted == true) {
        marketPayment += (parseInt(renewableBid.contract_price_ujpy) * parseInt(renewableBid.amount_uspx)) / 1000000;
      }
    }
    for (const renewableAsk of renewableAsks) {
      if (renewableAsk.is_accepted == true) {
        marketPayment -= (parseInt(renewableAsk.contract_price_ujpy) * parseInt(renewableAsk.amount_uspx)) / 1000000;
      }
    }

    const date = new Date();

    const latestBalance = await listLatestByStudentID(studentID, 'balances');

    const balance = new Balance({
      student_account_id: latestBalance[0].student_account_id,
      amount_uspx: '0',
      amount_uupx: '0',
    });
    console.log(balance);
    // await createByStudentID(studentID, 'balances', balance);

    console.log(
      new Balance({
        student_account_id: latestBalance[0].student_account_id,
        amount_uspx: '0',
        amount_uupx: '0',
      }),
    );

    const monthlyPayment = new MonthlyPayment({
      student_account_id: data.student_account_id,
      year: date.getFullYear().toString(),
      month: date.getMonth().toString(),
      amount_ujpy: (primaryPayment + marketPayment + rewardPayment).toString(),
      amount_primary_ujpy: primaryPayment.toString(),
      // amount_adjust_ujpy: adjustPayment.toString(),
      amount_market_ujpy: marketPayment.toString(),
      amount_reward_ujpy: rewardPayment.toString(),
      amount_utoken: tokens.toString(),
    });
    console.log(monthlyPayment);

    // await createByStudentID(studentID, 'monthly_payments', monthlyPayment);

    const dailyPayments = await listLastMonth(data.student_account_id, 'daily_payments');
    const usage = dailyPayments.reduce((prev, current) => prev + parseInt(current.amount_mwh), 0);
    const monthlyUsage = new MonthlyUsage({
      student_account_id: data.student_account_id,
      year: date.getFullYear().toString(),
      month: date.getMonth().toString(),
      amount_mwh: usage.toString(),
    });
    console.log(monthlyUsage);
    // await createByStudentID(studentID, 'monthly_usage', monthlyUsage);
    // await monthlyUsageOnCreate({ data: () => monthlyUsage }, null);
    expect(true).toBeTruthy();
  });
});
