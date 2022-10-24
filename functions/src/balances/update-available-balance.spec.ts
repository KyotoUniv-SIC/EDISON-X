import { AvailableBalance, Balance } from '@local/common';

describe('Balance Test', () => {
  it('Update AvailableBalance', async () => {
    let result: AvailableBalance;
    const data = new Balance({ id: 'testBalance', student_account_id: 'student01', amount_uupx: '3000000', amount_uspx: '4000000' });
    console.log('If Available Balance exists');
    let availableBalance = [
      new AvailableBalance({ id: 'testAvaBalance', student_account_id: 'student01', amount_uupx: '6000000', amount_uspx: '4000000' }),
    ];
    if (!availableBalance.length) {
      result = new AvailableBalance(data);
    } else {
      result = new AvailableBalance({
        id: availableBalance[0].id,
        student_account_id: data.student_account_id,
        amount_uupx: data.amount_uupx,
        amount_uspx: data.amount_uspx,
      });
    }
    expect(result.id).toBe('testAvaBalance');
    expect(result.amount_uspx).toBe('4000000');
    expect(result.amount_uupx).toBe('3000000');
    expect(result.amount_uspx).toBe('4000000');

    console.log('If Available Balance does not exist');
    availableBalance = [];
    if (!availableBalance.length) {
      result = new AvailableBalance(data);
    } else {
      result = new AvailableBalance({
        id: availableBalance[0].id,
        student_account_id: data.student_account_id,
        amount_uupx: data.amount_uupx,
        amount_uspx: data.amount_uspx,
      });
    }
    expect(result.amount_uupx).toBe('3000000');
    expect(result.amount_uspx).toBe('4000000');
  });
});
