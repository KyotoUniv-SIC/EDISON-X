import { proto } from '../..';
import { FieldValue, Timestamp } from 'firebase/firestore';

export class MonthlySettlement extends proto.main.MonthlySettlement {
  constructor(iMonthlySettlement: proto.main.IMonthlySettlement, public created_at?: FieldValue | Timestamp, public updated_at?: FieldValue | Timestamp) {
    super(iMonthlySettlement);
  }

  validate() {
    return false;
  }
}
