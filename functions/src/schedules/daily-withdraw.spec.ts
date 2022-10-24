import { Balance, DailyPayment, DailyUsage, StudentAccount, XrplTx } from '@local/common';

describe('Daily Withdraw Test', () => {
  it('Create daily-payment', () => {
    const dailyUsages = [
      new DailyUsage({ id: 'usage01', amount_kwh_str: '2', room_id: 'higashi301' }),
      new DailyUsage({ id: 'usage02', amount_kwh_str: '3', room_id: 'koushi201' }),
      new DailyUsage({ id: 'usage03', amount_kwh_str: '4', room_id: 'sentetsu401' }),
    ];
    const now = new Date();
    const xrplTxs = new XrplTx({ txs: [] });
    // dummy data
    const studentAccounts = [
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

    for (const dailyUsage of dailyUsages) {
      const usage = parseInt(dailyUsage.amount_kwh_str) * 1000000;
      const students = studentAccounts.filter((student) => student.room_id == dailyUsage.room_id);
      if (usage <= 0) {
        for (const student of students) {
          const dailyPayment = new DailyPayment({
            student_account_id: student.id,
            year: now.getFullYear().toString(),
            month: (now.getMonth() + 1).toString(),
            date: now.getDate().toString(),
            amount_mwh: usage.toString(),
            amount_uupx: '0',
            amount_uspx: '0',
            amount_insufficiency: '0',
          });
          console.log(dailyPayment);
        }
      } else if (!students.length) {
        // console.log(dailyUsage.room_id, 'no student');
      } else {
        console.log('create DailyPayment', dailyUsage.room_id);
        for (const student of students) {
          const accountBalance = balances.filter((balance) => balance.student_account_id == student.id);
          const uupxAmount = parseInt(accountBalance[0].amount_uupx);
          const uspxAmount = parseInt(accountBalance[0].amount_uspx);
          const totalBalance = uupxAmount + uspxAmount;

          // uspxが大きい場合は全額ここから支払い、それ以外はuspxをすべて支払い
          let uupxPayment: string;
          let uspxPayment: string;
          let insufficiency: string;

          if (usage < uspxAmount) {
            uspxPayment = usage.toString();
            uupxPayment = '0';
            insufficiency = '0';
          } else if (usage < totalBalance) {
            uspxPayment = uspxAmount.toString();
            uupxPayment = (usage - uspxAmount).toString();
            insufficiency = '0';
          } else {
            uupxPayment = uupxAmount.toString();
            uspxPayment = uspxAmount.toString();
            insufficiency = (usage - totalBalance).toString();
          }

          const dailyPayment = new DailyPayment({
            student_account_id: student.id,
            year: now.getFullYear().toString(),
            month: (now.getMonth() + 1).toString(),
            date: now.getDate().toString(),
            amount_mwh: usage.toString(),
            amount_uupx: uupxPayment,
            amount_uspx: uspxPayment,
            amount_insufficiency: insufficiency,
          });

          console.log(dailyPayment);
          // await dailyPaymentOnCreate({ data: () => dailyPayment }, null);
          xrplTxs.txs.push({ from_account_id: student.id, dist_account_id: 'admin', amount_uupx: uupxPayment, amount_uspx: uspxPayment });
        }
      }
    }
    console.log(xrplTxs);

    expect(xrplTxs.txs[3].amount_uupx).toBe('2000000');
  });
});
