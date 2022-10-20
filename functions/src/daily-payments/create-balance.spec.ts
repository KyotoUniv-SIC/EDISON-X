import { Balance, DailyPayment, InsufficientBalance } from '@local/common';

describe('Daily Payment test', () => {
  it('Create balance', () => {
    const data = new DailyPayment({
      student_account_id: 'test01',
      amount_insufficiency: '1000000',
      amount_mwh: '4000000',
      amount_uspx: '0',
      amount_uupx: '3000000',
    });

    const accountBalance = [new Balance({ student_account_id: 'test01', amount_uupx: '3000000', amount_uspx: '0' })];
    const balance = new Balance({
      student_account_id: data.student_account_id,
      amount_uupx: (parseInt(accountBalance[0].amount_uupx) - parseInt(data.amount_uupx)).toString(),
      amount_uspx: (parseInt(accountBalance[0].amount_uspx) - parseInt(data.amount_uspx)).toString(),
    });
    console.log(balance);

    if (data.amount_insufficiency != '0') {
      console.log(new InsufficientBalance({ student_account_id: data.student_account_id, amount_utoken: data.amount_insufficiency }));
    }

    expect(balance.amount_uupx).toBe('0');
  });
});
