/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable camelcase */
import { admin_account } from '../admin-accounts';
import { balance } from '../balances';
import { Balance, RenewableSettlement } from '@local/common';

// renewable_settlement.onCreateHandler.push()
export const renewableSettlementOnCreate = async (snapshot: any, context: any) => {
  const data = snapshot.data()! as RenewableSettlement;
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
        amount_uupx: bidderBalance[0].amount_uupx,
        amount_uspx: (parseInt(bidderBalance[0].amount_uspx) + parseInt(data.amount_uspx)).toString(),
      }),
    );
  }

  if (data.ask_id != adminAccount[0].id) {
    const sellerBalance = await balance.listLatest(data.ask_id);
    await balance.create(
      new Balance({
        student_account_id: data.ask_id,
        amount_uupx: sellerBalance[0].amount_uupx,
        amount_uspx: (parseInt(sellerBalance[0].amount_uspx) - parseInt(data.amount_uspx)).toString(),
      }),
    );
  }
};
