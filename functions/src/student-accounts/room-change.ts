/* eslint-disable camelcase */
import { student_account } from '.';
import { room_change } from '../room-changes';

room_change.onCreateHandler.push(async (snapshot, context) => {
  const data = snapshot.data()!;
  if (!data.room_id_before) {
    await student_account.update({ id: data.student_account_id, room_id: data.room_id_after });
  } else {
    console.error(data.student_account_id, 'change room request detected');
  }
});
