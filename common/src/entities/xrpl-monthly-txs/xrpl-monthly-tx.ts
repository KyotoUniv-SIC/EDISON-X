import { proto } from '../..';
import { FieldValue, Timestamp } from 'firebase/firestore';

export class XrplMonthlyTx extends proto.main.XrplMonthlyTx {
  constructor(iXrplMonthlyTx: proto.main.IXrplMonthlyTx, public created_at?: FieldValue | Timestamp, public updated_at?: FieldValue | Timestamp) {
    super(iXrplMonthlyTx);
  }

  validate() {
    return false;
  }
}
