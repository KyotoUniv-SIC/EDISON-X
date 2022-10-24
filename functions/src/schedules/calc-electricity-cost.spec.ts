import { CostSetting, MonthlyUsage, StudentAccount } from '@local/common';

describe('Calc Cost Test', () => {
  it('Create cost-setting', () => {
    const priceEastJuly = 29 * 1000000;
    const priceDormJuly = 19 * 1000000;
    const rate = 1.5;
    const students = [
      new StudentAccount({ id: 'test01', room_id: 'higashi301' }),
      new StudentAccount({ id: 'test02', room_id: 'koushi201' }),
      new StudentAccount({ id: 'test03', room_id: 'sentetsu401' }),
    ];
    // monthlyUsages
    const monthlyUsagesList = [
      new MonthlyUsage({ id: 'usage01', student_account_id: 'test01', amount_mwh: '100000000' }),
      new MonthlyUsage({ id: 'usage02', student_account_id: 'test02', amount_mwh: '120000000' }),
      new MonthlyUsage({ id: 'usage03', student_account_id: 'test03', amount_mwh: '150000000' }),
    ];

    let amountDormKwh = 0;
    let countDorm = 0;
    let amountEastKwh = 0;
    for (const student of students) {
      // String.prototype.indexOf() Not find return -1
      if (student.room_id.indexOf('koushi' || 'sentetsu') !== -1) {
        const monthlyUsages = monthlyUsagesList.filter((usage) => usage.student_account_id == student.id);
        if (monthlyUsages.length) {
          amountDormKwh += parseInt(monthlyUsages[0].amount_mwh) / 1000000;
        }
        countDorm++;
      } else {
        const monthlyUsages = monthlyUsagesList.filter((usage) => usage.student_account_id == student.id);
        if (monthlyUsages.length) {
          amountEastKwh += parseInt(monthlyUsages[0].amount_mwh) / 1000000;
        }
      }
    }
    const priceDormAverage = 12.87 * 1000000 + (542 * 1000000 * countDorm) / amountDormKwh;

    // sigma = (priceEastJuly - alpha * priceDormAverage)^2 + (priceDormJuly - alpha * priceDormAverage / rate)^2
    // 上記の式を最小化し，alphaを求める。

    // alpha = (priceEastJuly + priceDormJuly / rate) / ((1 + 1 / rate ^ 2) * priceDormAverage)
    const alpha = (priceEastJuly + priceDormJuly / rate) / (1 + 1 / rate / rate) / priceDormAverage;
    console.log('alpha: ' + alpha);

    const priceEast = alpha * priceDormAverage;
    const priceDorm = (alpha * priceDormAverage) / rate;
    console.log('East price: ' + priceEast, 'Dorm price: ' + priceDorm);
    const cost = priceEast * amountEastKwh + priceDorm * amountDormKwh;
    console.log('electricity cost: ' + cost);
    const costSetting = new CostSetting({ system_cost_ujpy: '0', electricity_cost_ujpy: Math.floor(cost).toString() });
    console.log(costSetting);

    expect(costSetting.system_cost_ujpy).toBe('0');
    expect(costSetting.electricity_cost_ujpy).toBe('9519230769');
  });
});
