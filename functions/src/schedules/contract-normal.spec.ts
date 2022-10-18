import { normalAskListValid } from '../models/normal-ask/list-valid.data';
import { normalBidListValid } from '../models/normal-bid/list-valid.data';
import { NormalAskHistory, NormalBidHistory, SinglePriceNormalSettlement } from '@local/common';

describe('Normal Contract Test', () => {
  it('Build Single Price Settlement', async () => {
    const normalBids = normalBidListValid();
    const normalAsks = normalAskListValid();
    if (!normalBids.length || !normalAsks.length) {
      console.log('bid,askの不足でUPX成約は0です。');

      console.log(
        new SinglePriceNormalSettlement({
          price_ujpy: '0',
          amount_uupx: '0',
        }),
      );

      await Promise.all(
        normalBids.map(async (bid) => {
          console.log(
            new NormalBidHistory(
              {
                account_id: bid.account_id,
                price_ujpy: bid.price_ujpy,
                amount_uupx: bid.amount_uupx,
                is_accepted: false,
                contract_price_ujpy: '0',
              },
              bid.created_at,
            ),
          );
          // await normal_bid.delete_(bid.id);
        }),
      );

      await Promise.all(
        normalAsks.map(async (ask) => {
          console.log(
            new NormalAskHistory(
              {
                account_id: ask.account_id,
                price_ujpy: ask.price_ujpy,
                amount_uupx: ask.amount_uupx,
                is_accepted: false,
                contract_price_ujpy: '0',
              },
              ask.created_at,
            ),
          );
          // await normal_ask.delete_(ask.id);
        }),
      );

      return;
    }

    // Bidを価格の高い順に並び替える
    const sortNormalBids = normalBids.sort((first, second) => parseInt(second.price_ujpy) - parseInt(first.price_ujpy));

    // Askを価格の低い順に並び替える
    const sortNormalAsks = normalAsks.sort((first, second) => parseInt(first.price_ujpy) - parseInt(second.price_ujpy));

    // 最高値のBidが最安値のAskより低い場合0成約で終了
    if (parseInt(sortNormalBids[0].price_ujpy) < parseInt(sortNormalAsks[0].price_ujpy)) {
      console.log('UPX成約はありませんでした。');

      console.log(
        new SinglePriceNormalSettlement({
          price_ujpy: '0',
          amount_uupx: '0',
        }),
      );

      await Promise.all(
        sortNormalBids.map(async (bid) => {
          console.log(
            new NormalBidHistory(
              {
                account_id: bid.account_id,
                price_ujpy: bid.price_ujpy,
                amount_uupx: bid.amount_uupx,
                is_accepted: false,
                contract_price_ujpy: '0',
              },
              bid.created_at,
            ),
          );
          // await normal_bid.delete_(bid.id);
        }),
      );

      await Promise.all(
        sortNormalAsks.map(async (ask) => {
          console.log(
            new NormalAskHistory(
              {
                account_id: ask.account_id,
                price_ujpy: ask.price_ujpy,
                amount_uupx: ask.amount_uupx,
                is_accepted: false,
                contract_price_ujpy: '0',
              },
              ask.created_at,
            ),
          );
          // await normal_ask.delete_(ask.id);
        }),
      );
      return;
    }

    // Bidの量の推移を配列にする
    let sumBidAmount = 0;
    const sumBidAmountHistory = [];
    for (const bid of sortNormalBids) {
      sumBidAmount += parseInt(bid.amount_uupx);
      sumBidAmountHistory.push(sumBidAmount);
    }

    // Askの量の推移を配列にする
    let sumAskAmount = 0;
    const sumAskAmountHistory = [];
    for (const ask of sortNormalAsks) {
      sumAskAmount += parseInt(ask.amount_uupx);
      sumAskAmountHistory.push(sumAskAmount);
    }
    // 階段状の累積受給曲線を歩調を合わせて登ることで均衡価格を発見
    let i = 0;
    let j = 0;
    let equilibriumPrice = 0;
    let equilibriumAmount = 0;
    const condition = true;
    while (condition) {
      if (parseInt(sortNormalBids[i].price_ujpy) < parseInt(sortNormalAsks[j].price_ujpy)) {
        break;
      }
      if (sumBidAmountHistory[i] <= sumAskAmountHistory[j]) {
        equilibriumPrice = parseInt(sortNormalAsks[j].price_ujpy);
        equilibriumAmount = sumBidAmountHistory[i];
        if (!sortNormalBids[i + 1]) {
          break;
        }
        i++;
      } else {
        equilibriumPrice = parseInt(sortNormalBids[i].price_ujpy);
        equilibriumAmount = sumAskAmountHistory[j];
        if (!sortNormalAsks[j + 1]) {
          break;
        }
        j++;
      }
    }

    // 止まったときの低い方の価格が均衡価格となる
    // const equilibriumPrice = sortNormalBids[i].price <= sortNormalAsks[j].price ? sortNormalBids[i].price : sortNormalAsks[j].price;
    // 止まったときの低い方が成約取引量となる
    // const equilibriumAmount = sumBidAmountHistory[i] <= sumAskAmountHistory[j] ? sumBidAmountHistory[i] : sumAskAmountHistory[j];
    const singlePrice = new SinglePriceNormalSettlement({
      price_ujpy: equilibriumPrice.toString(),
      amount_uupx: equilibriumAmount.toString(),
    });
    console.log(singlePrice);

    if (equilibriumAmount == 0) {
      await Promise.all(
        normalBids.map(async (bid) => {
          console.log(
            new NormalBidHistory(
              {
                account_id: bid.account_id,
                price_ujpy: bid.price_ujpy,
                amount_uupx: bid.amount_uupx,
                is_accepted: false,
                contract_price_ujpy: '0',
              },
              bid.created_at,
            ),
          );
          // await normal_bid.delete_(bid.id);
        }),
      );

      await Promise.all(
        normalAsks.map(async (ask) => {
          console.log(
            new NormalAskHistory(
              {
                account_id: ask.account_id,
                price_ujpy: ask.price_ujpy,
                amount_uupx: ask.amount_uupx,
                is_accepted: false,
                contract_price_ujpy: '0',
              },
              ask.created_at,
            ),
          );
          // await normal_ask.delete_(ask.id);
        }),
      );
    } else {
      console.log('singlePriceNormalSettlementOnCreate: ', singlePrice);
      // await singlePriceNormalSettlementOnCreate({ data: () => singlePrice }, null);
    }
  });
  expect(true).toBeTruthy();
});
