import { Balance, PrimaryAsk, PrimaryBid, XrplTx } from '@local/common';

describe('Primary Ask Test', () => {
  it('Update balance', () => {
    const data = new PrimaryAsk({ account_id: 'test01', price_ujpy: '27000000', amount_uupx: '112500000' });
    console.log(new PrimaryBid(data, data.created_at, data.updated_at));
    const askAmount = parseInt(data.amount_uupx);
    const accountBalance = [new Balance({ student_account_id: 'test01', amount_uupx: '0', amount_uspx: '0' })];
    if (!accountBalance.length) {
      return;
    }
    const updatedBalance = new Balance({
      student_account_id: data.account_id,
      amount_uupx: (parseInt(accountBalance[0].amount_uupx) + askAmount).toString(),
      amount_uspx: accountBalance[0].amount_uspx,
    });
    console.log(updatedBalance);
    console.log(
      new XrplTx({
        txs: [{ from_account_id: 'admin', dist_account_id: data.account_id, amount_uupx: data.amount_uupx, amount_uspx: '0' }],
      }),
    );
    expect(updatedBalance.amount_uupx).toBe('112500000');
    expect(updatedBalance.amount_uspx).toBe('0');
  });
});
