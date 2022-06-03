/* eslint-disable camelcase */
import { available_balance } from '.';
import { balance } from '../balances';
import { AvailableBalance, Balance } from '@local/common';

balance.onCreateHandler.push(async (snapshot, context) => {
  const data = snapshot.data()! as Balance;
  const availableBalance = await available_balance.getLatest(data.student_account_id);
  if (!availableBalance.length) {
    await available_balance.create(new AvailableBalance(data));
  } else {
    await available_balance.update({
      id: availableBalance[0].id,
      student_account_id: data.student_account_id,
      amount_uupx: data.amount_uupx,
      amount_uspx: data.amount_uspx,
    });
  }
});
