/* eslint-disable require-jsdoc */
import { getRandomInt } from '../common.model';
import { NormalBid } from '@local/common';

const normalBids: NormalBid[] = [];
for (let i = 0; i < getRandomInt(0, 5); i++) {
  normalBids.push(
    new NormalBid({
      id: 'bid' + i,
      account_id: 'test' + i,
      price_ujpy: getRandomInt(15, 30) + '000000',
      amount_uupx: getRandomInt(1, 50) + '000000',
      is_deleted: getRandomInt(0, 10) == 0,
    }),
  );
}

export function normalBidListValid(): NormalBid[] {
  return normalBids.filter((t) => t.is_deleted == false);
}
