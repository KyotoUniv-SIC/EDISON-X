/* eslint-disable camelcase */
// import { single_price_normal_settlement } from '.';
// import { admin_account } from '../admin-accounts';
import { normal_ask_history } from '../normal-ask-histories';
import { normal_ask } from '../normal-asks';
import { normal_bid_history } from '../normal-bid-histories';
import { normal_bid } from '../normal-bids';
import { normal_settlement } from '../normal-settlements';
import { normalSettlementOnCreate } from '../normal-settlements/create-balance';
import { xrpl_tx } from '../xrpl-txs';
import { NormalAskHistory, NormalBidHistory, NormalSettlement, proto, SinglePriceNormalSettlement, XrplTx } from '@local/common';

// single_price_normal_settlement.onCreateHandler.push()
export const singlePriceNormalSettlementOnCreate = async (snapshot: any, context: any) => {
  const data = snapshot.data()! as SinglePriceNormalSettlement;
  if (data.amount_uupx == '0') {
    console.log('no normal contract');
    return;
  }

  const xrplTxs = new XrplTx({ txs: [] });

  const normalBids = await normal_bid.listValid();
  // 降順に並び替え
  const sortNormalBids = normalBids.sort((first, second) => parseInt(second.price_ujpy) - parseInt(first.price_ujpy));

  const normalAsks = await normal_ask.listValid();
  // 昇順に並び替え
  const sortNormalAsks = normalAsks.sort((first, second) => parseInt(first.price_ujpy) - parseInt(second.price_ujpy));

  let i = 0;
  let j = 0;
  const condition = true;
  while (condition) {
    // どちらかが成約価格から乖離した時点で終了、残りをHistoryへ。
    if (
      parseInt(sortNormalBids[i].price_ujpy) < parseInt(data.price_ujpy) ||
      parseInt(sortNormalAsks[j].price_ujpy) > parseInt(data.price_ujpy)
    ) {
      for (; i < sortNormalBids.length; i++) {
        await normal_bid_history.create(
          new NormalBidHistory(
            {
              account_id: sortNormalBids[i].account_id,
              price_ujpy: sortNormalBids[i].price_ujpy,
              amount_uupx: sortNormalBids[i].amount_uupx,
              is_accepted: false,
              contract_price_ujpy: data.price_ujpy,
            },
            sortNormalBids[i].created_at,
          ),
        );
        await normal_bid.delete_(sortNormalBids[i].id);
      }

      for (; j < sortNormalAsks.length; j++) {
        await normal_ask_history.create(
          new NormalAskHistory(
            {
              type: sortNormalAsks[j].type as unknown as proto.main.NormalAskHistoryType,
              account_id: sortNormalAsks[j].account_id,
              price_ujpy: sortNormalAsks[j].price_ujpy,
              amount_uupx: sortNormalAsks[j].amount_uupx,
              is_accepted: false,
              contract_price_ujpy: data.price_ujpy,
            },
            sortNormalAsks[j].created_at,
          ),
        );
        await normal_ask.delete_(sortNormalAsks[j].id);
      }
      break;
    }

    if (parseInt(sortNormalBids[i].amount_uupx) < parseInt(sortNormalAsks[j].amount_uupx)) {
      const bidAccountId = sortNormalBids[i].account_id;
      const askAccountId = sortNormalAsks[j].account_id;
      const contractAmount = sortNormalBids[i].amount_uupx;

      const normalSettlement = new NormalSettlement({
        bid_id: bidAccountId,
        ask_id: askAccountId,
        price_ujpy: data.price_ujpy,
        amount_uupx: contractAmount,
      });
      await normal_settlement.create(normalSettlement);

      await normal_bid_history.create(
        new NormalBidHistory(
          {
            account_id: bidAccountId,
            price_ujpy: sortNormalBids[i].price_ujpy,
            amount_uupx: contractAmount,
            is_accepted: true,
            contract_price_ujpy: data.price_ujpy,
          },
          sortNormalBids[i].created_at,
        ),
      );
      await normal_bid.delete_(sortNormalBids[i].id);

      await normal_ask_history.create(
        new NormalAskHistory(
          {
            type: sortNormalAsks[j].type as unknown as proto.main.NormalAskHistoryType,
            account_id: askAccountId,
            price_ujpy: sortNormalAsks[j].price_ujpy,
            amount_uupx: contractAmount,
            is_accepted: true,
            contract_price_ujpy: data.price_ujpy,
          },
          sortNormalAsks[j].created_at,
        ),
      );
      await normal_ask.delete_(sortNormalAsks[j].id);

      await normalSettlementOnCreate({ data: () => normalSettlement }, null);
      xrplTxs.txs.push({
        from_account_id: askAccountId,
        dist_account_id: bidAccountId,
        amount_uupx: contractAmount,
      });

      sortNormalAsks[j].amount_uupx = (parseInt(sortNormalAsks[j].amount_uupx) - parseInt(sortNormalBids[i].amount_uupx)).toString();
      i++;
      if (i >= sortNormalBids.length) {
        // Bidがなくなると終了、残りのAskをHistoryへ
        for (; j < sortNormalAsks.length; j++) {
          await normal_ask_history.create(
            new NormalAskHistory(
              {
                type: sortNormalAsks[j].type as unknown as proto.main.NormalAskHistoryType,
                account_id: sortNormalAsks[j].account_id,
                price_ujpy: sortNormalAsks[j].price_ujpy,
                amount_uupx: sortNormalAsks[j].amount_uupx,
                is_accepted: false,
                contract_price_ujpy: data.price_ujpy,
              },
              sortNormalAsks[j].created_at,
            ),
          );
          await normal_ask.delete_(sortNormalAsks[j].id);
        }
        break;
      }
    } else if (parseInt(sortNormalBids[i].amount_uupx) > parseInt(sortNormalAsks[j].amount_uupx)) {
      const bidAccountId = sortNormalBids[i].account_id;
      const askAccountId = sortNormalAsks[j].account_id;
      const contractAmount = sortNormalAsks[j].amount_uupx;

      const normalSettlement = new NormalSettlement({
        bid_id: bidAccountId,
        ask_id: askAccountId,
        price_ujpy: data.price_ujpy,
        amount_uupx: contractAmount,
      });
      await normal_settlement.create(normalSettlement);

      await normal_bid_history.create(
        new NormalBidHistory(
          {
            account_id: bidAccountId,
            price_ujpy: sortNormalBids[i].price_ujpy,
            amount_uupx: contractAmount,
            is_accepted: true,
            contract_price_ujpy: data.price_ujpy,
          },
          sortNormalBids[i].created_at,
        ),
      );
      await normal_bid.delete_(sortNormalBids[i].id);

      await normal_ask_history.create(
        new NormalAskHistory(
          {
            type: sortNormalAsks[j].type as unknown as proto.main.NormalAskHistoryType,
            account_id: askAccountId,
            price_ujpy: sortNormalAsks[j].price_ujpy,
            amount_uupx: contractAmount,
            is_accepted: true,
            contract_price_ujpy: data.price_ujpy,
          },
          sortNormalAsks[j].created_at,
        ),
      );
      await normal_ask.delete_(sortNormalAsks[j].id);

      await normalSettlementOnCreate({ data: () => normalSettlement }, null);
      xrplTxs.txs.push({
        from_account_id: askAccountId,
        dist_account_id: bidAccountId,
        amount_uupx: contractAmount,
      });

      sortNormalBids[i].amount_uupx = (parseInt(sortNormalBids[i].amount_uupx) - parseInt(sortNormalAsks[j].amount_uupx)).toString();
      j++;
      if (j >= sortNormalAsks.length) {
        // Askがなくなると終了、残りのBidをHistoryへ
        for (; i < sortNormalBids.length; i++) {
          await normal_bid_history.create(
            new NormalBidHistory(
              {
                account_id: sortNormalBids[i].account_id,
                price_ujpy: sortNormalBids[i].price_ujpy,
                amount_uupx: sortNormalBids[i].amount_uupx,
                is_accepted: false,
                contract_price_ujpy: data.price_ujpy,
              },
              sortNormalBids[i].created_at,
            ),
          );
          await normal_bid.delete_(sortNormalBids[i].id);
        }
        break;
      }
    } else {
      const bidAccountId = sortNormalBids[i].account_id;
      const askAccountId = sortNormalAsks[j].account_id;
      const contractAmount = sortNormalBids[i].amount_uupx;

      const normalSettlement = new NormalSettlement({
        bid_id: bidAccountId,
        ask_id: askAccountId,
        price_ujpy: data.price_ujpy,
        amount_uupx: contractAmount,
      });
      await normal_settlement.create(normalSettlement);

      await normal_bid_history.create(
        new NormalBidHistory(
          {
            account_id: bidAccountId,
            price_ujpy: sortNormalBids[i].price_ujpy,
            amount_uupx: contractAmount,
            is_accepted: true,
            contract_price_ujpy: data.price_ujpy,
          },
          sortNormalBids[i].created_at,
        ),
      );

      await normal_bid.delete_(sortNormalBids[i].id);

      await normal_ask_history.create(
        new NormalAskHistory(
          {
            type: sortNormalAsks[j].type as unknown as proto.main.NormalAskHistoryType,
            account_id: askAccountId,
            price_ujpy: sortNormalAsks[j].price_ujpy,
            amount_uupx: contractAmount,
            is_accepted: true,
            contract_price_ujpy: data.price_ujpy,
          },
          sortNormalAsks[j].created_at,
        ),
      );
      await normal_ask.delete_(sortNormalAsks[j].id);

      await normalSettlementOnCreate({ data: () => normalSettlement }, null);
      xrplTxs.txs.push({
        from_account_id: askAccountId,
        dist_account_id: bidAccountId,
        amount_uupx: contractAmount,
      });

      i++;
      j++;
      // Bid, Askどちらかがなくなると終了、残りをHistoryへ
      if (i >= sortNormalBids.length || j >= sortNormalAsks.length) {
        for (; i < sortNormalBids.length; i++) {
          await normal_bid_history.create(
            new NormalBidHistory(
              {
                account_id: sortNormalBids[i].account_id,
                price_ujpy: sortNormalBids[i].price_ujpy,
                amount_uupx: sortNormalBids[i].amount_uupx,
                is_accepted: false,
                contract_price_ujpy: data.price_ujpy,
              },
              sortNormalBids[i].created_at,
            ),
          );
          await normal_bid.delete_(sortNormalBids[i].id);
        }

        for (; j < sortNormalAsks.length; j++) {
          await normal_ask_history.create(
            new NormalAskHistory(
              {
                type: sortNormalAsks[j].type as unknown as proto.main.NormalAskHistoryType,
                account_id: sortNormalAsks[j].account_id,
                price_ujpy: sortNormalAsks[j].price_ujpy,
                amount_uupx: sortNormalAsks[j].amount_uupx,
                is_accepted: false,
                contract_price_ujpy: data.price_ujpy,
              },
              sortNormalAsks[j].created_at,
            ),
          );
          await normal_ask.delete_(sortNormalAsks[j].id);
        }
        break;
      }
    }
  }
  await xrpl_tx.create(xrplTxs);
  console.log('complete Normal settlement');
};
