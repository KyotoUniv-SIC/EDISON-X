/* eslint-disable camelcase */
import { account } from '.';
import { student_account } from '../student-accounts';
import { StudentAccount } from '@local/common';

account.onCreateHandler.push(async (snapshot, context) => {
  const data = snapshot.data()!;
  // const account = new Account(data, data.created_at, data.updated_at);

  // if (account.type !== proto.main.AccountType.STUDENT) {
  //   return;
  // }

  await student_account.create(new StudentAccount(data, data.created_at, data.updated_at));
});
