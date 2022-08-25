/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable camelcase */
import { BalanceSnapshot } from '@local/common';
import 'jest';

describe('test', () => {
  it('Calculate monthly usage', async () => {
    const data = new BalanceSnapshot({});
    console.log(data.student_account_id, 'adjustment start.');
  });
});
