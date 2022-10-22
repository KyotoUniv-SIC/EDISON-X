import {
  AdminAccount,
  DeltaAmount,
  NormalAsk,
  NormalAskHistory,
  NormalAskSetting,
  NormalBid,
  NormalBidHistory,
  proto,
  SinglePriceNormalSettlement,
} from '@local/common';

describe('Operation Normal Test', () => {
  it('Create normal-order', () => {
    // Operationを行うかのテスト変数
    const operation = true;
    let orderCreated = false;
    // しきい値
    const threshold = 2000000;
    // 価格の決定
    const setting = new NormalAskSetting({ id: 'setting01', price_ujpy: '23000000', ratio_percentage: '100', enable: true });
    const now = new Date();
    const price = !setting || now.getDate() == 1 ? 21500000 : parseInt(setting.price_ujpy);
    const ratio = setting.ratio_percentage ? parseInt(setting.ratio_percentage) : 100;
    const enable = setting.enable ? setting.enable : false;

    console.log(new NormalAskSetting({ price_ujpy: price.toString(), ratio_percentage: ratio.toString(), enable: enable }));

    const adminAccount = [new AdminAccount({ id: 'admin01', name: 'admin' })];
    const contracts = operation
      ? [
          new SinglePriceNormalSettlement({ id: 'single02', price_ujpy: '17000000', amount_uupx: '8000000' }),
          new SinglePriceNormalSettlement({ id: 'single01', price_ujpy: '22000000', amount_uupx: '15000000' }),
        ]
      : [
          new SinglePriceNormalSettlement({ id: 'single02', price_ujpy: '21000000', amount_uupx: '8000000' }),
          new SinglePriceNormalSettlement({ id: 'single01', price_ujpy: '22000000', amount_uupx: '15000000' }),
        ];
    const deltaPrice = parseInt(contracts[0].price_ujpy) - parseInt(contracts[1].price_ujpy);

    const todayAsks = operation
      ? [
          new NormalAskHistory({
            id: 'ask01',
            type: 2,
            account_id: 'test01',
            price_ujpy: '17000000',
            amount_uupx: '10000000',
            is_accepted: true,
            contract_price_ujpy: '17000000',
          }),
          new NormalAskHistory({
            id: 'ask02',
            type: 2,
            account_id: 'test02',
            price_ujpy: '2000000',
            amount_uupx: '4000000',
            is_accepted: false,
            contract_price_ujpy: '17000000',
          }),
        ]
      : [
          new NormalAskHistory({
            id: 'ask01',
            type: 2,
            account_id: 'test01',
            price_ujpy: '23000000',
            amount_uupx: '3000000',
            is_accepted: true,
            contract_price_ujpy: '21000000',
          }),
          new NormalAskHistory({
            id: 'ask02',
            type: 2,
            account_id: 'test02',
            price_ujpy: '2000000',
            amount_uupx: '4000000',
            is_accepted: false,
            contract_price_ujpy: '21000000',
          }),
        ];
    const todayAsksAmount = todayAsks.reduce((prev, current) => prev + parseInt(current.amount_uupx), 0);
    const yesterdayAsks = [
      new NormalAskHistory({
        id: 'ask01',
        type: 2,
        account_id: 'test01',
        price_ujpy: '22000000',
        amount_uupx: '1000000',
        is_accepted: true,
        contract_price_ujpy: '22000000',
      }),
      new NormalAskHistory({
        id: 'ask03',
        type: 2,
        account_id: 'test01',
        price_ujpy: '22000000',
        amount_uupx: '2000000',
        is_accepted: false,
        contract_price_ujpy: '22000000',
      }),
      new NormalAskHistory({
        id: 'ask02',
        type: 2,
        account_id: 'test02',
        price_ujpy: '24000000',
        amount_uupx: '500000',
        is_accepted: false,
        contract_price_ujpy: '22000000',
      }),
    ];
    const yesterdayAsksAmount = yesterdayAsks.reduce((prev, current) => prev + parseInt(current.amount_uupx), 0);
    const deltaAsksAmount = todayAsksAmount - yesterdayAsksAmount;

    const todayBids = operation
      ? [
          new NormalBidHistory({
            id: 'bid01',
            account_id: 'test03',
            price_ujpy: '15000000',
            amount_uupx: '3000000',
            is_accepted: true,
            contract_price_ujpy: '17000000',
          }),
        ]
      : [
          new NormalBidHistory({
            id: 'bid01',
            account_id: 'test03',
            price_ujpy: '19000000',
            amount_uupx: '3000000',
            is_accepted: true,
            contract_price_ujpy: '21000000',
          }),
        ];
    const todayBidsAmount = todayBids.reduce((prev, current) => prev + parseInt(current.amount_uupx), 0);
    const yesterdayBids = [
      new NormalBidHistory({
        id: 'bid01',
        account_id: 'test03',
        price_ujpy: '19000000',
        amount_uupx: '1000000',
        is_accepted: true,
        contract_price_ujpy: '22000000',
      }),
      new NormalBidHistory({
        id: 'bid02',
        account_id: 'test04',
        price_ujpy: '23000000',
        amount_uupx: '3000000',
        is_accepted: false,
        contract_price_ujpy: '22000000',
      }),
    ];
    const yesterdayBidsAmount = yesterdayBids.reduce((prev, current) => prev + parseInt(current.amount_uupx), 0);
    const deltaBidsAmount = todayBidsAmount - yesterdayBidsAmount;

    // 2→3→4→1の順番で場合分けして処理
    if (Math.abs(deltaPrice) <= threshold || !enable) {
      console.log('No Market Operation & create delta-amount');
      console.log(
        new DeltaAmount({
          asks_amount_utoken: Math.floor(deltaAsksAmount).toString(),
          bids_amount_utoken: Math.floor(deltaBidsAmount).toString(),
        }),
      );
      orderCreated = false;
    } else {
      console.log('Run Normal Market Operation');
      const deltaAmounts = [
        new DeltaAmount({ id: 'delta01', asks_amount_utoken: '0', bids_amount_utoken: '-3000000' }),
        new DeltaAmount({ id: 'delta02', asks_amount_utoken: '12000000', bids_amount_utoken: '-3000000' }),
      ];
      if (!deltaAmounts.length) {
        console.log('No deltaAmount data.');
        return;
      }
      const aveAsksDeltaAmount =
        deltaAmounts.reduce((prev, current) => prev + parseInt(current.asks_amount_utoken), 0) / deltaAmounts.length;
      const aveBidsDeltaAmount =
        deltaAmounts.reduce((prev, current) => prev + parseInt(current.bids_amount_utoken), 0) / deltaAmounts.length;
      if (deltaPrice > 0) {
        if (aveAsksDeltaAmount - deltaAsksAmount > deltaBidsAmount - aveBidsDeltaAmount) {
          console.log('supply shortage');
          // 供給(売り)減→価格上昇
          // 供給(売り)増→価格低下, 基準電力価格で売り注文を入れる。
          if (aveAsksDeltaAmount - deltaAsksAmount > 0) {
            console.log(
              new NormalAsk({
                type: proto.main.NormalAskType.PRIMARYADDITIONAL,
                account_id: adminAccount[0].id,
                price_ujpy: price.toString(),
                amount_uupx: Math.floor(((aveAsksDeltaAmount - deltaAsksAmount) * ratio) / 100).toString(),
                is_deleted: false,
              }),
            );
          }
          orderCreated = true;
        } else {
          console.log('excessive demand');
          // 需要(買い)増→価格上昇
          // 供給 売り増→価格低下, 基準電力価格で売り注文を入れる 。
          if (deltaBidsAmount - aveBidsDeltaAmount > 0) {
            console.log(
              new NormalAsk({
                type: proto.main.NormalAskType.PRIMARYADDITIONAL,
                account_id: adminAccount[0].id,
                price_ujpy: price.toString(),
                amount_uupx: Math.floor(((deltaBidsAmount - aveBidsDeltaAmount) * ratio) / 100).toString(),
                is_deleted: false,
              }),
            );
            orderCreated = true;
          }
        }
      } else {
        if (aveBidsDeltaAmount - deltaBidsAmount > deltaAsksAmount - aveAsksDeltaAmount) {
          console.log('demand shortage');
          // 需要(買い) 減→価格低下
          // 需要(買い)増 →価格上昇基準電力価格で買い注文を入れる。
          if (aveBidsDeltaAmount - deltaBidsAmount > 0) {
            console.log(
              new NormalBid({
                account_id: adminAccount[0].id,
                price_ujpy: price.toString(),
                amount_uupx: Math.floor(((aveBidsDeltaAmount - deltaBidsAmount) * ratio) / 100).toString(),
                is_deleted: false,
              }),
            );
            orderCreated = true;
          }
        } else {
          console.log('excessive supply');
          console.log(deltaAsksAmount, aveAsksDeltaAmount);
          // 供給 売り増→価格低下
          // 需要 買い増→価格上昇,基準電力価格で買い注文を入れる。
          if (deltaAsksAmount - aveAsksDeltaAmount > 0) {
            console.log(
              new NormalBid({
                account_id: adminAccount[0].id,
                price_ujpy: price.toString(),
                amount_uupx: Math.floor(((deltaAsksAmount - aveAsksDeltaAmount) * ratio) / 100).toString(),
                is_deleted: false,
              }),
            );
            orderCreated = true;
          }
        }
      }
    }

    expect(orderCreated).toBe(operation);
  });
});
