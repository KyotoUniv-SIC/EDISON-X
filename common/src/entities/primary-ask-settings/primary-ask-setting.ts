import { proto } from '../..';
import { FieldValue, Timestamp } from 'firebase/firestore';

export class PrimaryAskSetting extends proto.main.PrimaryAskSetting {
  constructor(iPrimaryAskSetting: proto.main.IPrimaryAskSetting, public created_at?: FieldValue | Timestamp, public updated_at?: FieldValue | Timestamp) {
    super(iPrimaryAskSetting);
  }

  validate() {
    return false;
  }
}
