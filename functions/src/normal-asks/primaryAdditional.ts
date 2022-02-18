/* eslint-disable camelcase */
import { normal_ask } from '.';
import { admin_account } from '../admin-accounts';
import { balance } from '../balances';
import { insufficient_balance } from '../insufficient-balances';
import { normal_ask_setting } from '../normal-ask-settings';
import { student_account } from '../student-accounts';
import { NormalAsk, NormalAskSetting } from '@local/common';
import * as functions from 'firebase-functions';

const f = functions.region('asia-northeast1');
module.exports.primaryRenewableAsk = f.pubsub
  .schedule('0 9 * * *')
  .timeZone('Asia/Tokyo') // Users can choose timezone - default is America/Los_Angeles
  .onRun(async () => {
    const setting = await normal_ask_setting.getLatest();
    const adminAccount = await admin_account.getByName('admin');
    const students = await student_account.list();
    if (!setting) {
      let amountUPX = 0;
      let amountInsufficient = 0;
      for (const student of students) {
        amountUPX += (await balance.list(student.id))[0].amount_upx;
        for (const insufficient of await insufficient_balance.list(student.id)) {
          amountInsufficient += insufficient.amount;
        }
      }
      if (amountUPX < amountInsufficient) {
        await normal_ask.create(
          new NormalAsk({
            account_id: adminAccount[0].id,
            price: 27,
            amount: amountInsufficient - amountUPX,
            is_deleted: false,
          }),
        );
      }
    } else if (!setting.amount) {
      let amountUPX = 0;
      let amountInsufficient = 0;
      for (const student of students) {
        amountUPX += (await balance.list(student.id))[0].amount_upx;
        for (const insufficient of await insufficient_balance.list(student.id)) {
          amountInsufficient += insufficient.amount;
        }
      }
      if (amountUPX < amountInsufficient) {
        await normal_ask.create(
          new NormalAsk({
            account_id: adminAccount[0].id,
            price: setting.price,
            amount: amountInsufficient - amountUPX,
            is_deleted: false,
          }),
        );
      }
    } else {
      await normal_ask.create(
        new NormalAsk({
          account_id: adminAccount[0].id,
          price: setting.price,
          amount: setting.amount,
          is_deleted: false,
        }),
      );
    }
    await normal_ask_setting.create(new NormalAskSetting({ price: !setting ? 27.1 : setting.price + 0.1 }));
  });