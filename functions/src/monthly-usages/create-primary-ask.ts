/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable camelcase */
import { balance } from '../balances';
import { daily_usage } from '../daily-usages';
import { primary_ask_setting } from '../primary-ask-settings';
import { primary_ask } from '../primary-asks';
import { primary_bid } from '../primary-bids';
import { student_account } from '../student-accounts';
import { MonthlyUsage, PrimaryAsk, Balance } from '@local/common';
import { Timestamp } from 'firebase/firestore';

// monthly_usage.onCreateHandler.push();
export const monthlyUsageOnCreate = async (snapshot: any, context: any) => {
  // 前年同月=>前月に参照するデータを変更
  // const now = new Date();
  // const monthlyUsage = await monthly_usage.getLastYear(studentID, now);
  // const usageAmount = !monthlyUsage.length ? 0 : monthlyUsage[0].amount_kwh_str;
  // const issueAmount = usageAmount < 120 ? 108 : usageAmount * 0.9;

  const data = snapshot.data()! as MonthlyUsage;
  const studentID = data.student_account_id;
  const student = await student_account.get(studentID);
  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);
  const primaryAskSetting = await primary_ask_setting.getLatest();
  const price = primaryAskSetting.price_ujpy ?? '21500000';
  const ratio = parseInt(primaryAskSetting.ratio_percentage) / 100 ?? 1;

  let primaryAsk: PrimaryAsk;
  if ((student.created_at as Timestamp).toDate() > lastMonth) {
    // 一ヶ月以内に作成されたアカウントの場合
    const usages = await daily_usage.listLastMonth(student.room_id);
    const uupxAmount = usages.reduce((previous, current) => previous + parseInt(current.amount_kwh_str), 0) * ratio * 1000000;
    if (!uupxAmount) {
      console.log(student.room_id, 'have no usage data');
    }
    primaryAsk = new PrimaryAsk({ account_id: studentID, price_ujpy: price, amount_uupx: uupxAmount.toString() });
  } else {
    // 一ヶ月以内に作成されたアカウントでない場合
    const issueAmount = parseInt(data.amount_mwh) * ratio;
    primaryAsk = new PrimaryAsk({ account_id: studentID, price_ujpy: price, amount_uupx: issueAmount.toString() });
  }

  await primary_ask.create(primaryAsk);
  await primary_bid.create(primaryAsk);
  await balance.create(
    new Balance({
      student_account_id: studentID,
      amount_uupx: primaryAsk.amount_uupx,
      amount_uspx: '0',
    }),
  );

  // XRPL tx
  return { from_account_id: 'admin', dist_account_id: data.student_account_id, amount_uupx: primaryAsk.amount_uupx, amount_uspx: '0' };
};
