import { Timestamp } from '@firebase/firestore';
import { DailyUsage, MonthlyUsage, PrimaryAsk, PrimaryAskSetting, StudentAccount } from '@local/common';

describe('Monthly Usage test', () => {
  it('calc primary-ask issue amount', async () => {
    const now = new Date();
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    const data = new MonthlyUsage({ student_account_id: 'test01', year: '2021', month: '12', amount_mwh: '110000000' });
    const studentID = data.student_account_id;
    // 1ヶ月以内作成かどうか切り替え
    const recent = false;
    const student = new StudentAccount({ id: 'test01', name: 'test', room_id: 'higashi301' }, Timestamp.fromDate(recent ? now : lastMonth));

    const primaryAskSetting = new PrimaryAskSetting({ price_ujpy: '21500000', ratio_percentage: '100' });
    const price = primaryAskSetting.price_ujpy ?? '21500000';
    const ratio = parseInt(primaryAskSetting.ratio_percentage) / 100 ?? 1;

    let primaryAsk: PrimaryAsk;
    if ((student.created_at as Timestamp).toDate() > lastMonth) {
      // 一ヶ月以内に作成されたアカウントの場合
      const usages = [
        new DailyUsage({ room_id: 'higashi301', amount_kwh_str: '3' }),
        new DailyUsage({ room_id: 'higashi301', amount_kwh_str: '4' }),
        new DailyUsage({ room_id: 'higashi301', amount_kwh_str: '5' }),
      ];
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
    console.log(primaryAsk);
    expect(primaryAsk.amount_uupx).toBe(recent ? '12000000' : '110000000');
  });
});
