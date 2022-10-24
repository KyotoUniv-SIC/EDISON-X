import {
  Balance,
  BalanceSnapshot,
  InsufficientBalance,
  MonthlyPayment,
  NormalAskHistory,
  NormalBidHistory,
  PrimaryAsk,
  RenewableAskHistory,
  RenewableBidHistory,
  RenewableRanking,
  RenewableRewardSetting,
} from '@local/common';

describe('Balance Snapshot Test', () => {
  it('Calculate payment', () => {
    const data = new BalanceSnapshot({
      id: 'balance01',
      student_account_id: 'test01',
      amount_uupx: '10000000',
      amount_uspx: '0',
    });
    console.log(data.student_account_id, 'adjustment start.');
    const insufficiencies = [
      new InsufficientBalance({ id: 'insuff01', student_account_id: 'test01', amount_utoken: '10000000' }),
      new InsufficientBalance({ id: 'insuff01', student_account_id: 'test01', amount_utoken: '5000000' }),
    ].reduce((sum, element) => sum + parseInt(element.amount_utoken), 0);
    const tokens = parseInt(data.amount_uupx) + parseInt(data.amount_uspx) - insufficiencies;

    const primaryAsks = [new PrimaryAsk({ id: 'primary01', account_id: 'test01', price_ujpy: '27000000', amount_uupx: '120000000' })];
    const normalBids = [
      new NormalBidHistory({
        account_id: 'test01',
        price_ujpy: '28000000',
        amount_uupx: '10000000',
        is_accepted: true,
        contract_price_ujpy: '26000000',
      }),
      new NormalBidHistory({
        account_id: 'test01',
        price_ujpy: '16000000',
        amount_uupx: '20000000',
        is_accepted: false,
        contract_price_ujpy: '27000000',
      }),
    ];
    const normalAsks = [
      new NormalAskHistory({
        account_id: 'test01',
        price_ujpy: '16000000',
        amount_uupx: '20000000',
        is_accepted: true,
        contract_price_ujpy: '25700000',
      }),
      new NormalAskHistory({
        account_id: 'test01',
        price_ujpy: '40000000',
        amount_uupx: '30000000',
        is_accepted: false,
        contract_price_ujpy: '27000000',
      }),
    ];
    const renewableBids = [
      new RenewableBidHistory({
        account_id: 'test01',
        price_ujpy: '28000000',
        amount_uspx: '15000000',
        is_accepted: true,
        contract_price_ujpy: '27000000',
      }),
      new RenewableBidHistory({
        account_id: 'test01',
        price_ujpy: '16000000',
        amount_uspx: '20000000',
        is_accepted: false,
        contract_price_ujpy: '28000000',
      }),
    ];
    const renewableAsks = [
      new RenewableAskHistory({
        account_id: 'test01',
        price_ujpy: '16000000',
        amount_uspx: '30000000',
        is_accepted: true,
        contract_price_ujpy: '26000000',
      }),
      new RenewableAskHistory({
        account_id: 'test01',
        price_ujpy: '40000000',
        amount_uspx: '50000000',
        is_accepted: false,
        contract_price_ujpy: '27500000',
      }),
    ];
    const uspxRanking = new RenewableRanking({ first_student_id: 'test00', second_student_id: 'test01', third_student_id: 'test02' });
    const rewardSetting = new RenewableRewardSetting({
      first_price_ujpy: '600000000',
      second_price_ujpy: '300000000',
      third_price_ujpy: '100000000',
    });

    let primaryPayment: number;

    // primaryPayment, adjustPaymentの算出
    if (primaryAsks.length) {
      primaryPayment = primaryAsks.reduce(
        (previous, current) => previous + (parseInt(current.price_ujpy) * parseInt(current.amount_uupx)) / 1000000,
        0,
      );
    } else {
      primaryPayment = 0;
    }
    // rewardPaymentの算出
    let rewardPayment: number;
    if (uspxRanking.first_student_id == data.student_account_id) {
      rewardPayment = -parseInt(rewardSetting.first_price_ujpy);
    } else if (uspxRanking.second_student_id == data.student_account_id) {
      rewardPayment = -parseInt(rewardSetting.second_price_ujpy);
    } else if (uspxRanking.third_student_id == data.student_account_id) {
      rewardPayment = -parseInt(rewardSetting.third_price_ujpy);
    } else {
      rewardPayment = 0;
    }

    // marketPaymentの算出
    let marketPayment = 0;
    for (const normalBid of normalBids) {
      if (normalBid.is_accepted == true) {
        marketPayment += (parseInt(normalBid.contract_price_ujpy) * parseInt(normalBid.amount_uupx)) / 1000000;
      }
    }
    for (const normalAsk of normalAsks) {
      if (normalAsk.is_accepted == true) {
        marketPayment -= (parseInt(normalAsk.contract_price_ujpy) * parseInt(normalAsk.amount_uupx)) / 1000000;
      }
    }
    for (const renewableBid of renewableBids) {
      if (renewableBid.is_accepted == true) {
        marketPayment += (parseInt(renewableBid.contract_price_ujpy) * parseInt(renewableBid.amount_uspx)) / 1000000;
      }
    }
    for (const renewableAsk of renewableAsks) {
      if (renewableAsk.is_accepted == true) {
        marketPayment -= (parseInt(renewableAsk.contract_price_ujpy) * parseInt(renewableAsk.amount_uspx)) / 1000000;
      }
    }

    const date = new Date();

    console.log(
      new Balance({
        student_account_id: data.student_account_id,
        amount_uspx: '0',
        amount_uupx: '0',
      }),
    );

    const monthlyPayment = new MonthlyPayment({
      student_account_id: data.student_account_id,
      year: date.getFullYear().toString(),
      month: date.getMonth().toString(),
      amount_ujpy: (primaryPayment + marketPayment + rewardPayment).toString(),
      amount_primary_ujpy: primaryPayment.toString(),
      // amount_adjust_ujpy: adjustPayment.toString(),
      amount_market_ujpy: marketPayment.toString(),
      amount_reward_ujpy: rewardPayment.toString(),
      amount_utoken: tokens.toString(),
    });

    console.log(monthlyPayment);
    expect(monthlyPayment.amount_ujpy).toBe('2311000000');
    expect(monthlyPayment.amount_utoken).toBe('-5000000');
  });
});
