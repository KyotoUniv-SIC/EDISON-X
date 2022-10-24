import { AvailableBalance, NormalAsk, proto } from '@local/common';

describe('Normal Ask Test', () => {
  it('Update available-balance', async () => {
    const data = new NormalAsk({
      id: 'ask01',
      type: 2,
      account_id: 'test01',
      price_ujpy: '23000000',
      amount_uupx: '4000000',
      is_deleted: false,
    });
    const availableBalance = [
      new AvailableBalance({
        id: 'available01',
        student_account_id: 'test01',
        amount_uupx: '40000000',
        amount_uspx: '10000000',
      }),
    ];

    let updatedAvailable;
    if (data.type == proto.main.NormalAskType.SECONDARY) {
      updatedAvailable = {
        id: availableBalance[0].id,
        student_account_id: availableBalance[0].student_account_id,
        amount_uupx: (parseInt(availableBalance[0].amount_uupx) - parseInt(data.amount_uupx)).toString(),
        // amount_spx: availableBalance[0].amount_spx,
      };
      console.log(updatedAvailable);
    }
    // eslint-disable-next-line camelcase
    expect(updatedAvailable?.amount_uupx).toBe('36000000');
  });
});
