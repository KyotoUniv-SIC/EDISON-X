/* eslint-disable camelcase */
// import { single_price_renewable_settlement } from '.';
// import { admin_account } from '../admin-accounts';
import { renewable_ask_history } from '../renewable-ask-histories';
import { renewable_ask } from '../renewable-asks';
import { renewable_bid_history } from '../renewable-bid-histories';
import { renewable_bid } from '../renewable-bids';
import { renewable_settlement } from '../renewable-settlements';
import { renewableSettlementOnCreate } from '../renewable-settlements/create-balance';
import { xrpl_tx } from '../xrpl-txs';
import { proto, RenewableAskHistory, RenewableBidHistory, RenewableSettlement, XrplTx } from '@local/common';

// single_price_renewable_settlement.onCreateHandler.push()
export const singlePriceRenewableSettlementOnCreate = async (snapshot: any, context: any) => {
  const data = snapshot.data()! as RenewableSettlement;
  if (data.amount_uspx == '0') {
    console.log('no renewable contract');
    return;
  }

  const xrplTxs = new XrplTx({ txs: [] });

  const renewableBids = await renewable_bid.listValid();
  // 降順に並び替え
  const sortRenewableBids = renewableBids.sort((first, second) => parseInt(second.price_ujpy) - parseInt(first.price_ujpy));
  // 昇順に並び替え
  const renewableAsks = await renewable_ask.listValid();
  const sortRenewableAsks = renewableAsks.sort((first, second) => parseInt(first.price_ujpy) - parseInt(second.price_ujpy));

  let i = 0;
  let j = 0;
  const condition = true;
  while (condition) {
    // どちらかが成約価格から乖離した時点で終了、残りをHistoryへ
    if (
      parseInt(sortRenewableBids[i].price_ujpy) < parseInt(data.price_ujpy) ||
      parseInt(sortRenewableAsks[j].price_ujpy) > parseInt(data.price_ujpy)
    ) {
      for (; i < sortRenewableBids.length; i++) {
        await renewable_bid_history.create(
          new RenewableBidHistory(
            {
              account_id: sortRenewableBids[i].account_id,
              price_ujpy: sortRenewableBids[i].price_ujpy,
              amount_uspx: sortRenewableBids[i].amount_uspx,
              is_accepted: false,
              contract_price_ujpy: data.price_ujpy,
            },
            sortRenewableBids[i].created_at,
          ),
        );
        await renewable_bid.update({ id: sortRenewableBids[i].id, is_deleted: true });
      }

      for (; j < sortRenewableAsks.length; j++) {
        await renewable_ask_history.create(
          new RenewableAskHistory(
            {
              type: sortRenewableAsks[j].type as unknown as proto.main.RenewableAskHistoryType,
              account_id: sortRenewableAsks[j].account_id,
              price_ujpy: sortRenewableAsks[j].price_ujpy,
              amount_uspx: sortRenewableAsks[j].amount_uspx,
              is_accepted: false,
              contract_price_ujpy: data.price_ujpy,
            },
            sortRenewableAsks[j].created_at,
          ),
        );
        await renewable_ask.update({ id: sortRenewableAsks[j].id, is_deleted: true });
      }
      break;
    }

    if (parseInt(sortRenewableBids[i].amount_uspx) < parseInt(sortRenewableAsks[j].amount_uspx)) {
      const bidAccountId = sortRenewableBids[i].account_id;
      const askAccountId = sortRenewableAsks[j].account_id;
      const contractAmount = sortRenewableBids[i].amount_uspx;

      const renewableSettlement = new RenewableSettlement({
        bid_id: bidAccountId,
        ask_id: askAccountId,
        price_ujpy: data.price_ujpy,
        amount_uspx: contractAmount,
      });
      await renewable_settlement.create(renewableSettlement);

      await renewable_bid_history.create(
        new RenewableBidHistory(
          {
            account_id: bidAccountId,
            price_ujpy: sortRenewableBids[i].price_ujpy,
            amount_uspx: contractAmount,
            is_accepted: true,
            contract_price_ujpy: data.price_ujpy,
          },
          sortRenewableBids[i].created_at,
        ),
      );
      await renewable_bid.update({ id: sortRenewableBids[i].id, is_deleted: true });

      await renewable_ask_history.create(
        new RenewableAskHistory(
          {
            type: sortRenewableAsks[j].type as unknown as proto.main.RenewableAskHistoryType,
            account_id: askAccountId,
            price_ujpy: sortRenewableAsks[j].price_ujpy,
            amount_uspx: contractAmount,
            is_accepted: true,
            contract_price_ujpy: data.price_ujpy,
          },
          sortRenewableAsks[j].created_at,
        ),
      );
      await renewable_ask.update({ id: sortRenewableAsks[j].id, is_deleted: true });

      await renewableSettlementOnCreate({ data: () => renewableSettlement }, null);

      xrplTxs.txs.push({
        from_account_id: askAccountId,
        dist_account_id: bidAccountId,
        amount_uspx: contractAmount,
      });

      sortRenewableAsks[j].amount_uspx = (
        parseInt(sortRenewableAsks[j].amount_uspx) - parseInt(sortRenewableBids[i].amount_uspx)
      ).toString();
      i++;
      if (i >= sortRenewableBids.length) {
        // Bidがなくなると終了、残りのAskをHistoryへ
        for (; j < sortRenewableAsks.length; j++) {
          await renewable_ask_history.create(
            new RenewableAskHistory(
              {
                type: sortRenewableAsks[j].type as unknown as proto.main.RenewableAskHistoryType,
                account_id: sortRenewableAsks[j].account_id,
                price_ujpy: sortRenewableAsks[j].price_ujpy,
                amount_uspx: sortRenewableAsks[j].amount_uspx,
                is_accepted: false,
                contract_price_ujpy: data.price_ujpy,
              },
              sortRenewableAsks[j].created_at,
            ),
          );
          await renewable_ask.update({ id: sortRenewableAsks[j].id, is_deleted: true });
        }
        break;
      }
    } else if (parseInt(sortRenewableBids[i].amount_uspx) > parseInt(sortRenewableAsks[j].amount_uspx)) {
      const bidAccountId = sortRenewableBids[i].account_id;
      const askAccountId = sortRenewableAsks[j].account_id;
      const contractAmount = sortRenewableAsks[j].amount_uspx;

      const renewableSettlement = new RenewableSettlement({
        bid_id: bidAccountId,
        ask_id: askAccountId,
        price_ujpy: data.price_ujpy,
        amount_uspx: contractAmount,
      });
      await renewable_settlement.create(renewableSettlement);

      await renewable_bid_history.create(
        new RenewableBidHistory(
          {
            account_id: bidAccountId,
            price_ujpy: sortRenewableBids[i].price_ujpy,
            amount_uspx: contractAmount,
            is_accepted: true,
            contract_price_ujpy: data.price_ujpy,
          },
          sortRenewableBids[i].created_at,
        ),
      );
      await renewable_bid.update({ id: sortRenewableBids[i].id, is_deleted: true });

      await renewable_ask_history.create(
        new RenewableAskHistory(
          {
            type: sortRenewableAsks[j].type as unknown as proto.main.RenewableAskHistoryType,
            account_id: askAccountId,
            price_ujpy: sortRenewableAsks[j].price_ujpy,
            amount_uspx: contractAmount,
            is_accepted: true,
            contract_price_ujpy: data.price_ujpy,
          },
          sortRenewableAsks[j].created_at,
        ),
      );
      await renewable_ask.update({ id: sortRenewableAsks[j].id, is_deleted: true });

      await renewableSettlementOnCreate({ data: () => renewableSettlement }, null);

      xrplTxs.txs.push({
        from_account_id: askAccountId,
        dist_account_id: bidAccountId,
        amount_uspx: contractAmount,
      });

      sortRenewableBids[i].amount_uspx = (
        parseInt(sortRenewableBids[i].amount_uspx) - parseInt(sortRenewableAsks[j].amount_uspx)
      ).toString();
      j++;
      if (j >= sortRenewableAsks.length) {
        // Askがなくなると終了、残りのBidをHistoryへ
        for (; i < sortRenewableBids.length; i++) {
          await renewable_bid_history.create(
            new RenewableBidHistory(
              {
                account_id: sortRenewableBids[i].account_id,
                price_ujpy: sortRenewableBids[i].price_ujpy,
                amount_uspx: sortRenewableBids[i].amount_uspx,
                is_accepted: false,
                contract_price_ujpy: data.price_ujpy,
              },
              sortRenewableBids[i].created_at,
            ),
          );
          await renewable_bid.update({ id: sortRenewableBids[i].id, is_deleted: true });
        }
        break;
      }
    } else {
      const bidAccountId = sortRenewableBids[i].account_id;
      const askAccountId = sortRenewableAsks[j].account_id;
      const contractAmount = sortRenewableBids[i].amount_uspx;
      const renewableSettlement = new RenewableSettlement({
        bid_id: bidAccountId,
        ask_id: askAccountId,
        price_ujpy: data.price_ujpy,
        amount_uspx: contractAmount,
      });
      await renewable_settlement.create(renewableSettlement);

      await renewable_bid_history.create(
        new RenewableBidHistory(
          {
            account_id: bidAccountId,
            price_ujpy: sortRenewableBids[i].price_ujpy,
            amount_uspx: contractAmount,
            is_accepted: true,
            contract_price_ujpy: data.price_ujpy,
          },
          sortRenewableBids[i].created_at,
        ),
      );

      await renewable_bid.update({ id: sortRenewableBids[i].id, is_deleted: true });

      await renewable_ask_history.create(
        new RenewableAskHistory(
          {
            type: sortRenewableAsks[j].type as unknown as proto.main.RenewableAskHistoryType,
            account_id: askAccountId,
            price_ujpy: sortRenewableAsks[j].price_ujpy,
            amount_uspx: contractAmount,
            is_accepted: true,
            contract_price_ujpy: data.price_ujpy,
          },
          sortRenewableAsks[j].created_at,
        ),
      );
      await renewable_ask.update({ id: sortRenewableAsks[j].id, is_deleted: true });

      await renewableSettlementOnCreate({ data: () => renewableSettlement }, null);

      xrplTxs.txs.push({
        from_account_id: askAccountId,
        dist_account_id: bidAccountId,
        amount_uspx: contractAmount,
      });

      i++;
      j++;
      if (i >= sortRenewableBids.length || j >= sortRenewableAsks.length) {
        for (; i < sortRenewableBids.length; i++) {
          await renewable_bid_history.create(
            new RenewableBidHistory(
              {
                account_id: sortRenewableBids[i].account_id,
                price_ujpy: sortRenewableBids[i].price_ujpy,
                amount_uspx: sortRenewableBids[i].amount_uspx,
                is_accepted: false,
                contract_price_ujpy: data.price_ujpy,
              },
              sortRenewableBids[i].created_at,
            ),
          );
          await renewable_bid.update({ id: sortRenewableBids[i].id, is_deleted: true });
        }

        for (; j < sortRenewableAsks.length; j++) {
          await renewable_ask_history.create(
            new RenewableAskHistory(
              {
                type: sortRenewableAsks[j].type as unknown as proto.main.RenewableAskHistoryType,
                account_id: sortRenewableAsks[j].account_id,
                price_ujpy: sortRenewableAsks[j].price_ujpy,
                amount_uspx: sortRenewableAsks[j].amount_uspx,
                is_accepted: false,
                contract_price_ujpy: data.price_ujpy,
              },
              sortRenewableAsks[j].created_at,
            ),
          );
          await renewable_ask.update({ id: sortRenewableAsks[j].id, is_deleted: true });
        }
        break;
      }
    }
  }
  await xrpl_tx.create(xrplTxs);
  console.log('complete Renewable settlement');
};
