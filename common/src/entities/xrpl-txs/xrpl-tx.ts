import { proto } from '../..';
import { FieldValue, Timestamp } from 'firebase/firestore';

export class XrplTx extends proto.main.XrplTx {
  constructor(iXrplTx: proto.main.IXrplTx, public created_at?: FieldValue | Timestamp, public updated_at?: FieldValue | Timestamp) {
    super(iXrplTx);
  }

  validate() {
    return false;
  }
}
