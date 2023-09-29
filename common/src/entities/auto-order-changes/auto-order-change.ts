import { proto } from '../..';
import { FieldValue, Timestamp } from 'firebase/firestore';

export class AutoOrderChange extends proto.main.AutoOrderChange {
  constructor(iAutoOrderChange: proto.main.IAutoOrderChange, public created_at?: FieldValue | Timestamp, public updated_at?: FieldValue | Timestamp) {
    super(iAutoOrderChange);
  }

  validate() {
    return false;
  }
}
