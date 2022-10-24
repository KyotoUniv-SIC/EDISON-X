/* eslint-disable require-jsdoc */
import { getRandomInt } from '../common.model';
import { NormalAsk } from '@local/common';

const normalAsks: NormalAsk[] = [];
for (let i = 0; i < getRandomInt(0, 5); i++) {
  normalAsks.push(
    new NormalAsk({
      id: 'Ask' + i,
      type: getRandomInt(0, 3),
      account_id: 'test' + i,
      price_ujpy: getRandomInt(15, 30) + '000000',
      amount_uupx: getRandomInt(1, 50) + '000000',
      is_deleted: getRandomInt(0, 10) == 0,
    }),
  );
}

export function normalAskListValid(): NormalAsk[] {
  return normalAsks.filter((t) => t.is_deleted == false);
}
