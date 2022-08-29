import { XrplTx } from './xrpl-tx';
import { FirestoreDataConverter } from 'firebase/firestore';

export class XrplTxFirestore {
  static collectionID = 'xrpl_txs';
  static documentID = 'xrpl_tx_id';
  static virtualPath = `${XrplTxFirestore.collectionID}/{${XrplTxFirestore.documentID}}`;

  static converter: FirestoreDataConverter<XrplTx> = {
    toFirestore: (data) => ({ ...data }),
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options)!;
      return new XrplTx(data, data.created_at, data.updated_at);
    },
  };

  static collectionPath() {
    return `${XrplTxFirestore.collectionID}`;
  }

  static documentPath(id: string) {
    return `${XrplTxFirestore.collectionPath()}/${id}`;
  }
}
