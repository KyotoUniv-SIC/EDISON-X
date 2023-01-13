import { CostSetting, DiscountPrice, MonthlyPayment, MonthlySettlement, PrimaryAsk, StudentAccount } from '@local/common';

describe('Cost Setting Test', () => {
  it('Calculate monthly-payment', () => {
    const data = new CostSetting({
      electricity_cost_ujpy: '30000000000',
      system_cost_ujpy: '10000000000',
    });
    const systemCost = parseInt(data.system_cost_ujpy);
    const electricityCost = parseInt(data.electricity_cost_ujpy);
    const monthlySettlement = [
      new MonthlySettlement({
        purchase_utoken: '100000000',
        sale_utoken: '50000000',
        reward_ujpy: '1000000000',
        system_income_ujpy: '30000000000',
      }),
    ];
    const reward = parseInt(monthlySettlement[0].reward_ujpy);
    const income = parseInt(monthlySettlement[0].system_income_ujpy);
    const purchase = parseInt(monthlySettlement[0].purchase_utoken);
    const sale = parseInt(monthlySettlement[0].sale_utoken);
    const primaryAsks = [new PrimaryAsk({ amount_uupx: '100000000', price_ujpy: '21500000' })];

    const primaryPrice = primaryAsks.length ? parseInt(primaryAsks[0].price_ujpy) : 25;

    // 0で割るのを避ける
    let discountRate: number;
    if (purchase + sale) {
      discountRate =
        (systemCost + electricityCost + reward - income + ((purchase - sale) * parseInt(primaryAsks[0].price_ujpy)) / 1000000) /
        (((purchase + sale) * primaryPrice) / 1000000);
    } else {
      discountRate = 0;
    }
    console.log('Discount rate', discountRate);
    const price = parseInt(primaryAsks[0].price_ujpy) * discountRate;

    const discountPrice = new DiscountPrice({
      price_ujpy: Math.floor(price).toString(),
      amount_purchase_utoken: purchase.toString(),
      amount_sale_utoken: sale.toString(),
    });
    console.log(discountPrice);

    let adjustment;
    const students = [new StudentAccount({ id: 'test01', name: 'test', room_id: 'higashi301' })];
    for (const student of students) {
      const monthlyPayments = [
        new MonthlyPayment({
          student_account_id: student.id,
          amount_ujpy: '2311000000',
          amount_primary_ujpy: '3240000000',
          amount_market_ujpy: '-629000000',
          amount_reward_ujpy: '-300000000',
          amount_utoken: '-5000000',
        }),
      ];
      if (monthlyPayments.length) {
        const monthlyPayment = monthlyPayments[0];
        const tokens = parseInt(monthlyPayment.amount_utoken);
        const discount = parseInt(discountPrice.price_ujpy);
        let adjustPayment: number;
        if (tokens >= 0) {
          adjustPayment = -((primaryPrice - discount) * tokens) / 1000000;
        } else {
          adjustPayment = -((primaryPrice + discount) * tokens) / 1000000;
        }
        console.log({
          id: monthlyPayment.id,
          student_account_id: monthlyPayment.student_account_id,
          amount_adjust_ujpy: adjustPayment.toString(),
          amount_ujpy: (parseInt(monthlyPayment.amount_ujpy) + adjustPayment).toString(),
        });
        adjustment = adjustPayment.toString();
      }
    }

    expect(adjustment).toBe('510000000');
  });
});
