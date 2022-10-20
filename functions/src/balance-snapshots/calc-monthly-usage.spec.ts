import { BalanceSnapshot, DailyPayment, MonthlyUsage } from '@local/common';

describe('Balance Snapshot test', () => {
  it('Calculate usage', () => {
    const data = new BalanceSnapshot({
      id: 'balance01',
      student_account_id: 'test01',
      amount_uupx: '10000000',
      amount_uspx: '0',
    });
    console.log(data.student_account_id, 'adjustment start.');
    const dailyPayments = [
      new DailyPayment({
        student_account_id: 'test01',
        amount_insufficiency: '0',
        amount_mwh: '3000000',
        amount_uupx: '3000000',
        amount_uspx: '0',
      }),
      new DailyPayment({
        student_account_id: 'test01',
        amount_insufficiency: '0',
        amount_mwh: '4000000',
        amount_uupx: '2000000',
        amount_uspx: '2000000',
      }),
    ];
    const date = new Date();
    const usage = dailyPayments.reduce((prev, current) => prev + parseInt(current.amount_mwh), 0);
    const monthlyUsage = new MonthlyUsage({
      student_account_id: data.student_account_id,
      year: date.getFullYear().toString(),
      month: date.getMonth().toString(),
      amount_mwh: usage.toString(),
    });
    expect(monthlyUsage.amount_mwh).toBe('7000000');
  });
});
