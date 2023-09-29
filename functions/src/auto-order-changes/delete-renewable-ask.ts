/* eslint-disable camelcase */
import { auto_order_change } from '.';
import { student_account } from '../student-accounts';
import { AutoOrderChange } from '@local/common';

auto_order_change.onCreateHandler.push(async (snapshot, context) => {
  const data = snapshot.data()! as AutoOrderChange;
  const student = await student_account.get(data.student_account_id);

  await student_account.update({ id: student.id, auto_order: data.enabled });
});
