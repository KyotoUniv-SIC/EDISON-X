import {
  NormalAsk,
  NormalAskHistory,
  NormalBid,
  NormalBidHistory,
  NormalSettlement,
  proto,
  SinglePriceNormalSettlement,
  XrplTx,
} from '@local/common';

describe('Single Price Normal Settlement Test', () => {
  it('Create normal-settlement & xrpl-txs', () => {
    const data = new SinglePriceNormalSettlement({ price_ujpy: '25000000', amount_uupx: '85000000' });
    if (data.amount_uupx == '0') {
      console.log('no normal contract');
      return;
    }

    const xrplTxs = new XrplTx({ txs: [] });

    const normalBids = [
      new NormalBid({ id: 'bid01', account_id: 'test01', price_ujpy: '15000000', amount_uupx: '40000000' }),
      new NormalBid({ id: 'bid02', account_id: 'test02', price_ujpy: '24000000', amount_uupx: '20000000' }),
      new NormalBid({ id: 'bid03', account_id: 'test03', price_ujpy: '27000000', amount_uupx: '15000000' }),
      new NormalBid({ id: 'bid04', account_id: 'test04', price_ujpy: '20000000', amount_uupx: '100000000' }),
      new NormalBid({ id: 'bid05', account_id: 'test05', price_ujpy: '28000000', amount_uupx: '25000000' }),
      new NormalBid({ id: 'bid06', account_id: 'test06', price_ujpy: '25000000', amount_uupx: '50000000' }),
    ];
    // 降順に並び替え
    const sortNormalBids = normalBids.sort((first, second) => parseInt(second.price_ujpy) - parseInt(first.price_ujpy));

    const normalAsks = [
      new NormalAsk({ id: 'ask01', account_id: 'test07', price_ujpy: '32000000', amount_uupx: '40000000' }),
      new NormalAsk({ id: 'ask02', account_id: 'test08', price_ujpy: '27000000', amount_uupx: '30000000' }),
      new NormalAsk({ id: 'ask03', account_id: 'test09', price_ujpy: '25000000', amount_uupx: '25000000' }),
      new NormalAsk({ id: 'ask04', account_id: 'test10', price_ujpy: '28000000', amount_uupx: '90000000' }),
      new NormalAsk({ id: 'ask05', account_id: 'test11', price_ujpy: '20000000', amount_uupx: '10000000' }),
      new NormalAsk({ id: 'ask06', account_id: 'test12', price_ujpy: '12000000', amount_uupx: '50000000' }),
    ];
    // 昇順に並び替え
    const sortNormalAsks = normalAsks.sort((first, second) => parseInt(first.price_ujpy) - parseInt(second.price_ujpy));

    const bidHistories = [];
    const askHistories = [];
    const normalSettlements = [];
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
          bidHistories.push(
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
        }

        for (; j < sortNormalAsks.length; j++) {
          askHistories.push(
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
        normalSettlements.push(normalSettlement);

        bidHistories.push(
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

        askHistories.push(
          new NormalAskHistory({
            type: sortNormalAsks[j].type as unknown as proto.main.NormalAskHistoryType,
            account_id: askAccountId,
            price_ujpy: sortNormalAsks[j].price_ujpy,
            amount_uupx: contractAmount,
            is_accepted: true,
            contract_price_ujpy: data.price_ujpy,
          }),
        );

        // await normalSettlementOnCreate({ data: () => normalSettlement }, null);
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
            askHistories.push(
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
        normalSettlements.push(normalSettlement);

        bidHistories.push(
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

        askHistories.push(
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

        // await normalSettlementOnCreate({ data: () => normalSettlement }, null);
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
            bidHistories.push(
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
        normalSettlements.push(normalSettlement);

        bidHistories.push(
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

        askHistories.push(
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

        // await normalSettlementOnCreate({ data: () => normalSettlement }, null);
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
            bidHistories.push(
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
          }

          for (; j < sortNormalAsks.length; j++) {
            askHistories.push(
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
          }
          break;
        }
      }
    }
    console.log(xrplTxs);
    console.log(normalSettlements);
    expect(xrplTxs.txs.length).toBe(normalSettlements.length);

    console.log(bidHistories);
    expect(bidHistories.filter((bid) => bid.is_accepted == true).length).toBe(normalSettlements.length);
    console.log(askHistories);
    expect(askHistories.filter((ask) => ask.is_accepted == true).length).toBe(normalSettlements.length);
    console.log('complete Normal settlement');
  });
});
