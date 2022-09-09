import { FirestoreDataConverter } from 'firebase/firestore';
import { XrplMonthlyTx } from './xrpl-monthly-tx';


export class XrplMonthlyTxFirestore {
  static collectionID = 'xrpl_monthly_txs';
  static documentID = 'xrpl_monthly_tx_id';
  static virtualPath = `${XrplMonthlyTxFirestore.collectionID}/{${XrplMonthlyTxFirestore.documentID}}`;

  static converter: FirestoreDataConverter<XrplMonthlyTx> = {
    toFirestore: (data) => ({ ...data }),
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options)!;
      return new XrplMonthlyTx(data, data.created_at, data.updated_at);
    }
  };

  static collectionPath() {
    return `${XrplMonthlyTxFirestore.collectionID}`;
  }

  static documentPath(id: string) {
    return `${XrplMonthlyTxFirestore.collectionPath()}/${id}`;
  }
}
