/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable camelcase */
import { balance } from '../balances';
import { insufficient_balance } from '../insufficient-balances';
import { InsufficientBalance, DailyPayment, Balance } from '@local/common';

// daily_payment.onCreateHandler.push()
export const dailyPaymentOnCreate = async (snapshot: any, context: any) => {
  const data = snapshot.data()! as DailyPayment;
  const accountBalance = await balance.listLatest(data.student_account_id);
  await balance.create(
    new Balance({
      student_account_id: data.student_account_id,
      amount_uupx: (parseInt(accountBalance[0].amount_uupx) - parseInt(data.amount_uupx)).toString(),
      amount_uspx: (parseInt(accountBalance[0].amount_uspx) - parseInt(data.amount_uspx)).toString(),
    }),
  );

  if (data.amount_insufficiency != '0') {
    await insufficient_balance.create(
      new InsufficientBalance({ student_account_id: data.student_account_id, amount_utoken: data.amount_insufficiency }),
    );
  }
};
