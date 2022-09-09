/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable camelcase */
import { admin_account } from '../admin-accounts';
import { balance } from '../balances';
import { Balance, NormalSettlement } from '@local/common';

// normal_settlement.onCreateHandler.push()
export const normalSettlementOnCreate = async (snapshot: any, context: any) => {
  const data = snapshot.data()! as NormalSettlement;
  const adminAccount = await admin_account.getByName('admin');
  if (data.bid_id == data.ask_id) {
    console.log('Bid & Ask sent by same user');
    return;
  }
  if (data.bid_id != adminAccount[0].id) {
    const bidderBalance = await balance.listLatest(data.bid_id);
    await balance.create(
      new Balance({
        student_account_id: data.bid_id,
        amount_uupx: (parseInt(bidderBalance[0].amount_uupx) + parseInt(data.amount_uupx)).toString(),
        amount_uspx: bidderBalance[0].amount_uspx,
      }),
    );
  }

  if (data.ask_id != adminAccount[0].id) {
    const sellerBalance = await balance.listLatest(data.ask_id);
    await balance.create(
      new Balance({
        student_account_id: data.ask_id,
        amount_uupx: (parseInt(sellerBalance[0].amount_uupx) - parseInt(data.amount_uupx)).toString(),
        amount_uspx: sellerBalance[0].amount_uspx,
      }),
    );
  }
};
