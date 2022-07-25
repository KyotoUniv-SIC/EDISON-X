import { FirestoreDataConverter } from 'firebase/firestore';
import { DailyPaymentTx } from './daily-payment-tx';


export class DailyPaymentTxFirestore {
  static collectionID = 'daily_payment_txs';
  static documentID = 'daily_payment_tx_id';
  static virtualPath = `${DailyPaymentTxFirestore.collectionID}/{${DailyPaymentTxFirestore.documentID}}`;

  static converter: FirestoreDataConverter<DailyPaymentTx> = {
    toFirestore: (data) => ({ ...data }),
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options)!;
      return new DailyPaymentTx(data, data.created_at, data.updated_at);
    }
  };

  static collectionPath() {
    return `${DailyPaymentTxFirestore.collectionID}`;
  }

  static documentPath(id: string) {
    return `${DailyPaymentTxFirestore.collectionPath()}/${id}`;
  }
}
