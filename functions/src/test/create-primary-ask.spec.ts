/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable camelcase */
import { getLatest, listLastMonth } from './firestore.service';
import { getLatestByStudentID, getStudentAccountByStudentID } from './firestore.student.service';
import { MonthlyUsage, StudentAccount, PrimaryAsk } from '@local/common';
import { Timestamp } from 'firebase/firestore';
// import { Timestamp } from 'firebase/firestore';
import 'jest';

describe('test', () => {
  it('create primary ask', async () => {
    const data = (await getLatestByStudentID('3yBkwbYIpfJtArN4l64e', 'monthly_usages')) as MonthlyUsage;
    console.log(data.student_account_id, 'adjustment start.');
    console.log(data);
    console.log(data.amount_mwh);
    const studentID = data.student_account_id;
    const student = (await getStudentAccountByStudentID(studentID, 'student_accounts')) as StudentAccount;
    console.log(student.room_id);
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    const primaryAskSetting = await getLatest('primary_ask_settings');
    console.log(primaryAskSetting);
    const price = primaryAskSetting.price_ujpy ?? '21500000';
    const ratio = parseInt(primaryAskSetting.ratio_percentage) / 100 ?? 1;
    console.log(ratio);

    let primaryAsk: PrimaryAsk;
    if ((student.created_at as Timestamp).toDate() > lastMonth) {
      // 一ヶ月以内に作成されたアカウントの場合
      const usages = await listLastMonth('daily_usage', student.room_id);
      console.log(usages);
      const uupxAmount = usages.reduce((previous, current) => previous + parseInt(current.amount_kwh_str), 0) * ratio * 1000000;
      if (!uupxAmount) {
        console.log(student.room_id, 'have no usage data');
      }
      primaryAsk = new PrimaryAsk({ account_id: studentID, price_ujpy: price, amount_uupx: uupxAmount.toString() });
    } else {
      // 一ヶ月以内に作成されたアカウントでない場合
      const issueAmount = parseInt(data.amount_mwh) * ratio;
      console.log(parseInt(data.amount_mwh));
      primaryAsk = new PrimaryAsk({ account_id: studentID, price_ujpy: price, amount_uupx: issueAmount.toString() });
    }
    console.log(primaryAsk);

    expect(true).toBeTruthy();
  });
});
