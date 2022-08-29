/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable camelcase */
import { balance } from '../balances';
import { primary_bid } from '../primary-bids';
import { xrpl_tx } from '../xrpl-txs';
import { Balance, PrimaryAsk, PrimaryBid, XrplTx } from '@local/common';

// primary_ask.onCreateHandler.push();
export const primaryAskOnCreate = async (snapshot: any, context: any) => {
  const data = snapshot.data()! as PrimaryAsk;
  await primary_bid.create(new PrimaryBid(data, data.created_at, data.updated_at));
  const askAmount = parseInt(data.amount_uupx);
  const accountBalance = await balance.listLatest(data.account_id);
  if (!accountBalance.length) {
    return;
  }
  await balance.create(
    new Balance({
      student_account_id: data.account_id,
      amount_uupx: (parseInt(accountBalance[0].amount_uupx) + askAmount).toString(),
      amount_uspx: accountBalance[0].amount_uspx,
    }),
  );

  await xrpl_tx.create(
    new XrplTx({
      txs: [{ from_account_id: 'admin', dist_account_id: data.account_id, amount_uupx: data.amount_uupx, amount_uspx: '0' }],
    }),
  );
};
