import { proto } from '../..';
import { FieldValue, Timestamp } from 'firebase/firestore';

export class DailyPaymentTx extends proto.main.DailyPaymentTx {
  constructor(iDailyPaymentTx: proto.main.IDailyPaymentTx, public created_at?: FieldValue | Timestamp, public updated_at?: FieldValue | Timestamp) {
    super(iDailyPaymentTx);
  }

  validate() {
    return false;
  }
}
