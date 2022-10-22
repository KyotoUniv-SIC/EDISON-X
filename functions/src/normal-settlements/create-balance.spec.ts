/* eslint-disable camelcase */
import { AdminAccount, Balance, NormalSettlement } from '@local/common';

describe('Normal Settlement Test', () => {
  it('Change balance with the settlement', () => {
    const data = new NormalSettlement({
      bid_id: 'test01',
      ask_id: 'test02',
      price_ujpy: '2000000',
      amount_uupx: '10000000',
    });
    const adminAccount = [new AdminAccount({ id: 'admin01', name: 'admin' })];

    if (data.bid_id == data.ask_id) {
      console.log('Bid & Ask sent by same user');
      return;
    }
    let updatedBidderBalance;
    if (data.bid_id != adminAccount[0].id) {
      const bidderBalance = [
        new Balance({ id: 'balance01', student_account_id: 'test01', amount_uupx: '25000000', amount_uspx: '10000000' }),
      ];
      updatedBidderBalance = new Balance({
        student_account_id: data.bid_id,
        amount_uupx: (parseInt(bidderBalance[0].amount_uupx) + parseInt(data.amount_uupx)).toString(),
        amount_uspx: bidderBalance[0].amount_uspx,
      });
      console.log(updatedBidderBalance);
    }

    let updatedSellerBalance;
    if (data.ask_id != adminAccount[0].id) {
      const sellerBalance = [
        new Balance({ id: 'balance02', student_account_id: 'test02', amount_uupx: '30000000', amount_uspx: '15000000' }),
      ];
      updatedSellerBalance = new Balance({
        student_account_id: data.ask_id,
        amount_uupx: (parseInt(sellerBalance[0].amount_uupx) - parseInt(data.amount_uupx)).toString(),
        amount_uspx: sellerBalance[0].amount_uspx,
      });
      console.log(updatedSellerBalance);
    }

    expect(updatedBidderBalance?.amount_uupx).toBe('35000000');
    expect(updatedSellerBalance?.amount_uupx).toBe('20000000');
  });
});
