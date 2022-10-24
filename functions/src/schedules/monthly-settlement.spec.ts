import { Balance, BalanceSnapshot, DiscountPrice, MarketStatus, PrimaryAsk, StudentAccount } from '@local/common';
import { Timestamp } from 'firebase/firestore';

describe('Monthly Settlement Test', () => {
  it('Create monthly-settlement', () => {
    // WIP
    const students = [
      new StudentAccount({ id: 'test01', name: 'test01', room_id: 'higashi301' }),
      new StudentAccount({ id: 'test02', name: 'test02', room_id: 'koushi201' }),
      new StudentAccount({ id: 'test03', name: 'test03', room_id: 'sentetsu401' }),
      new StudentAccount({ id: 'test04', name: 'test04', room_id: 'sentetsu401' }),
    ];
    const balances = [
      new Balance({
        id: 'balance01',
        student_account_id: 'test01',
        amount_uupx: '10000000',
        amount_uspx: '10000000',
      }),
      new Balance({
        id: 'balance02',
        student_account_id: 'test02',
        amount_uupx: '0',
        amount_uspx: '0',
      }),
      new Balance({
        id: 'balance03',
        student_account_id: 'test03',
        amount_uupx: '25000000',
        amount_uspx: '0',
      }),
      new Balance({
        id: 'balance04',
        student_account_id: 'test04',
        amount_uupx: '30000000',
        amount_uspx: '2000000',
      }),
    ];
    let purchase = 0;
    let sale = 0;
    for (const student of students) {
      const studentID = student.id;
      const lastMonthBalance = await balance.listLatest(studentID);
      const insufficiencies = (await insufficient_balance.listLastMonth(studentID)).reduce(
        (sum, element) => sum + parseInt(element.amount_utoken),
        0,
      );
      const totalBalance = parseInt(lastMonthBalance[0].amount_uspx) + parseInt(lastMonthBalance[0].amount_uupx) - insufficiencies;
      if (totalBalance >= 0) {
        purchase += totalBalance;
      } else {
        sale += -totalBalance;
      }
    }
    const adminAccount = await admin_account.getByName('admin');
    const primaryAsks = await primary_ask.listLastMonth();
    const normalAsks = await normal_ask_history.listLastMonth(adminAccount[0].id);
    const normalBids = await normal_bid_history.listLastMonth(adminAccount[0].id);
    const renewableAsks = await renewable_ask_history.listLastMonth(adminAccount[0].id);
    let income = 0;
    for (const ask of primaryAsks) {
      income += (parseInt(ask.price_ujpy) * parseInt(ask.amount_uupx)) / 1000000;
    }
    for (const ask of normalAsks) {
      if (ask.is_accepted) {
        income += (parseInt(ask.price_ujpy) * parseInt(ask.amount_uupx)) / 1000000;
      }
    }
    for (const bid of normalBids) {
      if (bid.is_accepted) {
        income -= (parseInt(bid.price_ujpy) * parseInt(bid.amount_uupx)) / 1000000;
      }
    }
    for (const ask of renewableAsks) {
      if (ask.is_accepted) {
        income += (parseInt(ask.price_ujpy) * parseInt(ask.amount_uspx)) / 1000000;
      }
    }
    const date = new Date();
    const rewardSetting = await renewable_reward_setting.getLatest();
    const reward =
      parseInt(rewardSetting.first_price_ujpy) + parseInt(rewardSetting.second_price_ujpy) + parseInt(rewardSetting.third_price_ujpy);

    await monthly_settlement.create(
      new MonthlySettlement({
        year: date.getFullYear().toString(),
        month: date.getMonth().toString(),
        reward_ujpy: reward.toString(),
        system_income_ujpy: income.toString(),
        purchase_utoken: purchase.toString(),
        sale_utoken: sale.toString(),
      }),
    );

    // const costSetting = await cost_setting.getLatest();
    // // システム運用コスト
    // const cost = !costSetting ? 0 : parseInt(costSetting.system_cost_ujpy);
    // // 電気料金
    // const electricity = !costSetting ? 150000 * 1000000 : parseInt(costSetting.electricity_cost_ujpy);

    // const rewardSetting = await renewable_reward_setting.getLatest();
    // const reward =
    //   parseInt(rewardSetting.first_price_ujpy) + parseInt(rewardSetting.second_price_ujpy) + parseInt(rewardSetting.third_price_ujpy);

    // // 0で割るのを避ける
    // let price: number;
    // if (purchase + sale) {
    //   price =
    //     (cost + electricity + reward - income + ((purchase - sale) * parseInt(primaryAsks[0].price_ujpy)) / 1000000) /
    //     (((purchase + sale) * parseInt(primaryAsks[0].price_ujpy)) / 1000000);
    // } else {
    //   price = 0;
    // }
    // console.log('Discount price', price);

    // await discount_price.create(
    //   new DiscountPrice({
    //     price_ujpy: Math.floor(price).toString(),
    //     amount_purchase_utoken: purchase.toString(),
    //     amount_sale_utoken: sale.toString(),
    //   }),
    // );

    const uspxPercentages = [];
    for (const student of students) {
      const studentID = student.id;
      const dailyPayments = await daily_payment.listLastMonth(studentID);
      let mwhCount = 0;
      let uspxCount = 0;
      for (const payment of dailyPayments) {
        mwhCount += parseInt(payment.amount_mwh);
        uspxCount += parseInt(payment.amount_uspx);
      }
      // 0で割るのを避ける
      let uspxPercentage: number;
      if (mwhCount) {
        uspxPercentage = uspxCount / mwhCount;
      } else {
        uspxPercentage = 0;
      }
      uspxPercentages.push({ studentID, uspxPercentage });
    }
    const uspxSortedPercentages = uspxPercentages.sort((first, second) => second.uspxPercentage - first.uspxPercentage);
    await renewable_ranking.create(
      new RenewableRanking({
        first_student_id: uspxSortedPercentages[0].studentID,
        second_student_id: uspxSortedPercentages[1].studentID,
        third_student_id: uspxSortedPercentages[2].studentID,
      }),
    );

    // BalanceSnapshotが計算のトリガーなので分割している
    const xrplTxs = new XrplMonthlyTx({ txs: [] });
    for (const student of students) {
      const studentID = student.id;
      console.log(studentID, 'payment start');
      const lastMonthBalance = await balance.listLatest(studentID);
      await balance_snapshot.create(new BalanceSnapshot(lastMonthBalance[0]));
      const primaryAsk = await balanceSnapshotOnCreate({ data: () => lastMonthBalance[0] }, null);
      xrplTxs.txs.push(primaryAsk);
    }
    await xrpl_monthly_tx.create(xrplTxs);
    // await Promise.all(
    //   students.map(async (student) => {
    //     const studentID = student.id;
    //     const lastMonthBalance = await balance.listLatest(studentID);
    //     await balance_snapshot.create(new BalanceSnapshot(lastMonthBalance[0]));
    //     await balanceSnapshotOnCreate({ data: () => lastMonthBalance[0] }, null);
    //   }),
    // );
    console.log('tx end');
  });
  expect(true).toBeFalsy()
});
