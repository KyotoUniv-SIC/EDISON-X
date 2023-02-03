/* eslint-disable camelcase */
import { AdminAccount, DailyPayment, DailyUsage, proto, RenewableAsk, RenewableAskSetting, StudentAccount } from '@local/common';

describe('Operation Renewable Test', () => {
  it('Create renewable-order', () => {
    const setting = new RenewableAskSetting({ id: 'setting01', price_ujpy: '22000000', amount_uspx: '30000000' });
    const type = proto.main.RenewableAskType.PRIMARY;
    const adminAccount = [new AdminAccount({ id: 'admin01', name: 'admin' })];
    const price = !setting.price_ujpy ? '22000000' : setting.price_ujpy;

    const dailyUsages = [
      new DailyUsage({ id: 'usage01', amount_kwh_str: '4', room_id: 'higashi301' }),
      new DailyUsage({ id: 'usage02', amount_kwh_str: '9', room_id: 'higashi301' }),
      new DailyUsage({ id: 'usage03', amount_kwh_str: '2', room_id: 'higashi301' }),
      new DailyUsage({ id: 'usage04', amount_kwh_str: '4', room_id: 'higashi301' }),
      new DailyUsage({ id: 'usage05', amount_kwh_str: '2', room_id: 'higashi301' }),
      new DailyUsage({ id: 'usage06', amount_kwh_str: '3', room_id: 'koushi201' }),
      new DailyUsage({ id: 'usage07', amount_kwh_str: '5', room_id: 'sentetsu401' }),
      new DailyUsage({ id: 'usage08', amount_kwh_str: '3', room_id: 'koushi211' }),
    ];
    const dailyUsageAmount = dailyUsages.reduce((previous, current) => previous + parseInt(current.amount_kwh_str), 0) * 1000000;
    const students = [
      new StudentAccount({ id: 'test01', name: 'test01', room_id: 'higashi301' }),
      new StudentAccount({ id: 'test02', name: 'test02', room_id: 'koushi201' }),
      new StudentAccount({ id: 'test03', name: 'test03', room_id: 'sentetsu401' }),
      new StudentAccount({ id: 'test04', name: 'test04', room_id: 'koushi211' }),
    ];
    const payments = [
      new DailyPayment({
        student_account_id: 'test01',
        amount_insufficiency: '0',
        amount_mwh: '3000000',
        amount_uupx: '3000000',
        amount_uspx: '0',
      }),
      new DailyPayment({
        student_account_id: 'test02',
        amount_insufficiency: '0',
        amount_mwh: '4000000',
        amount_uupx: '2000000',
        amount_uspx: '2000000',
      }),
      new DailyPayment({
        student_account_id: 'test03',
        amount_insufficiency: '2000000',
        amount_mwh: '4000000',
        amount_uupx: '2000000',
        amount_uspx: '0',
      }),
      new DailyPayment({
        student_account_id: 'test04',
        amount_insufficiency: '0',
        amount_mwh: '3000000',
        amount_uupx: '0',
        amount_uspx: '3000000',
      }),
    ];

    let paymentAmount = 0;
    for (const student of students) {
      const dailyPayments = payments.filter((payment) => payment.student_account_id == student.id);
      paymentAmount += dailyPayments.reduce((previous, current) => previous + parseInt(current.amount_mwh), 0);
    }
    console.log('Payment Amount', paymentAmount);
    expect(paymentAmount).toBe(14000000);
    console.log('Daily Usage Amount', dailyUsageAmount);
    expect(dailyUsageAmount).toBe(32000000);

    const amount = !setting.amount_uspx
      ? Math.floor((25000000 * paymentAmount) / dailyUsageAmount).toString()
      : Math.floor((parseInt(setting.amount_uspx) * paymentAmount) / dailyUsageAmount).toString();

    console.log('Isuue Amount', amount);

    let renewableAsk;
    if (parseInt(amount) > 0) {
      renewableAsk = new RenewableAsk({
        account_id: adminAccount[0].id,
        type: type,
        price_ujpy: price,
        amount_uspx: amount,
        is_deleted: false,
      });
    }
    expect(renewableAsk?.price_ujpy).toBe('22000000');
    expect(renewableAsk?.amount_uspx).toBe('13125000');

    const renewableAskSetting = new RenewableAskSetting({
      price_ujpy: price,
      amount_uspx: !setting.amount_uspx ? '25000000' : setting.amount_uspx,
    });
    expect(renewableAskSetting.amount_uspx).toBe('30000000');
  });
});
