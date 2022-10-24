import {
  Balance,
  DailyPayment,
  InsufficientBalance,
  MonthlySettlement,
  NormalAskHistory,
  NormalBidHistory,
  PrimaryAsk,
  RenewableAskHistory,
  RenewableRanking,
  RenewableRewardSetting,
  StudentAccount,
} from '@local/common';

describe('Monthly Settlement Test', () => {
  it('Create monthly-settlement', () => {
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
    const insufficientBalances = [
      new InsufficientBalance({
        id: 'insufficient01',
        student_account_id: 'test01',
        amount_utoken: '1000000',
      }),
      new InsufficientBalance({
        id: 'insufficient02',
        student_account_id: 'test02',
        amount_utoken: '3000000',
      }),
      new InsufficientBalance({
        id: 'insufficient03',
        student_account_id: 'test02',
        amount_utoken: '2000000',
      }),
    ];
    let purchase = 0;
    let sale = 0;
    for (const student of students) {
      const studentID = student.id;
      const lastMonthBalance = balances.filter((element) => element.student_account_id == studentID);
      const insufficiencies = insufficientBalances
        .filter((element) => element.student_account_id == studentID)
        .reduce((sum, element) => sum + parseInt(element.amount_utoken), 0);
      const totalBalance = parseInt(lastMonthBalance[0].amount_uspx) + parseInt(lastMonthBalance[0].amount_uupx) - insufficiencies;
      console.log(totalBalance);
      if (totalBalance >= 0) {
        purchase += totalBalance;
      } else {
        sale += -totalBalance;
      }
    }
    expect(purchase).toBe(76000000);
    expect(sale).toBe(5000000);
    // const adminAccount = [new AdminAccount({ id: 'admin01', name: 'admin' })];
    const primaryAsks = [
      new PrimaryAsk({ id: 'primary01', account_id: 'test01', price_ujpy: '27000000', amount_uupx: '120000000' }),
      new PrimaryAsk({ id: 'primary02', account_id: 'test02', price_ujpy: '27000000', amount_uupx: '150000000' }),
      new PrimaryAsk({ id: 'primary03', account_id: 'test03', price_ujpy: '27000000', amount_uupx: '100000000' }),
      new PrimaryAsk({ id: 'primary04', account_id: 'test04', price_ujpy: '27000000', amount_uupx: '80000000' }),
    ];
    const normalAsks = [
      new NormalAskHistory({
        id: 'nask01',
        type: 1,
        account_id: 'admin01',
        price_ujpy: '26000000',
        amount_uupx: '2000000',
        is_accepted: true,
        contract_price_ujpy: '27200000',
      }),
    ];
    const normalBids = [
      new NormalBidHistory({
        id: 'nbid01',
        account_id: 'admin01',
        price_ujpy: '27000000',
        amount_uupx: '2000000',
        is_accepted: true,
        contract_price_ujpy: '27000000',
      }),
      new NormalBidHistory({
        id: 'nbid02',
        account_id: 'admin01',
        price_ujpy: '27000000',
        amount_uupx: '2000000',
        is_accepted: false,
        contract_price_ujpy: '27000000',
      }),
    ];
    const renewableAsks = [
      new RenewableAskHistory({
        id: 'rask01',
        type: 1,
        account_id: 'admin01',
        price_ujpy: '27000000',
        amount_uspx: '3000000',
        is_accepted: true,
        contract_price_ujpy: '27500000',
      }),
    ];
    let income = 0;
    for (const ask of primaryAsks) {
      income += (parseInt(ask.price_ujpy) * parseInt(ask.amount_uupx)) / 1000000;
    }
    console.log(income);
    for (const ask of normalAsks) {
      if (ask.is_accepted) {
        income += (parseInt(ask.contract_price_ujpy) * parseInt(ask.amount_uupx)) / 1000000;
      }
    }
    console.log(income);

    for (const bid of normalBids) {
      if (bid.is_accepted) {
        income -= (parseInt(bid.contract_price_ujpy) * parseInt(bid.amount_uupx)) / 1000000;
      }
    }
    console.log(income);

    for (const ask of renewableAsks) {
      if (ask.is_accepted) {
        income += (parseInt(ask.contract_price_ujpy) * parseInt(ask.amount_uspx)) / 1000000;
      }
    }
    console.log(income);

    const date = new Date();
    const rewardSetting = new RenewableRewardSetting({
      first_price_ujpy: '600000000',
      second_price_ujpy: '300000000',
      third_price_ujpy: '100000000',
    });
    const reward =
      parseInt(rewardSetting.first_price_ujpy) + parseInt(rewardSetting.second_price_ujpy) + parseInt(rewardSetting.third_price_ujpy);

    const monthlySettlement = new MonthlySettlement({
      year: date.getFullYear().toString(),
      month: date.getMonth().toString(),
      reward_ujpy: reward.toString(),
      system_income_ujpy: income.toString(),
      purchase_utoken: purchase.toString(),
      sale_utoken: sale.toString(),
    });
    console.log(monthlySettlement);
    expect(monthlySettlement.reward_ujpy).toBe('1000000000');
    expect(monthlySettlement.system_income_ujpy).toBe(((12150 + 54.4 - 54 + 82.5) * 1000000).toString());

    const payments = [
      new DailyPayment({
        student_account_id: 'test01',
        amount_insufficiency: '0',
        amount_mwh: '3000000',
        amount_uupx: '3000000',
        amount_uspx: '0',
      }),
      new DailyPayment({
        student_account_id: 'test01',
        amount_insufficiency: '0',
        amount_mwh: '4000000',
        amount_uupx: '2000000',
        amount_uspx: '2000000',
      }),
      new DailyPayment({
        student_account_id: 'test02',
        amount_insufficiency: '2000000',
        amount_mwh: '4000000',
        amount_uupx: '2000000',
        amount_uspx: '0',
      }),
      new DailyPayment({
        student_account_id: 'test03',
        amount_insufficiency: '0',
        amount_mwh: '3000000',
        amount_uupx: '0',
        amount_uspx: '3000000',
      }),
    ];
    const uspxPercentages = [];
    for (const student of students) {
      const studentID = student.id;
      const dailyPayments = payments.filter((element) => element.student_account_id == studentID);
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
    const ranking = new RenewableRanking({
      first_student_id: uspxSortedPercentages[0].studentID,
      second_student_id: uspxSortedPercentages[1].studentID,
      third_student_id: uspxSortedPercentages[2].studentID,
    });
    console.log(ranking);
    expect(ranking.first_student_id).toBe('test03');

    // BalanceSnapshotが計算のトリガーなので分割している
    // const xrplTxs = new XrplMonthlyTx({ txs: [] });
    // for (const student of students) {
    //   const studentID = student.id;
    //   console.log(studentID, 'payment start');
    //   const lastMonthBalance = await balance.listLatest(studentID);
    //   await balance_snapshot.create(new BalanceSnapshot(lastMonthBalance[0]));
    //   const primaryAsk = await balanceSnapshotOnCreate({ data: () => lastMonthBalance[0] }, null);
    //   xrplTxs.txs.push(primaryAsk);
    // }
    // // await xrpl_monthly_tx.create(xrplTxs);

    console.log('tx end');
  });
});
