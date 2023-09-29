import { FirestoreDataConverter } from 'firebase/firestore';
import { AutoOrderChange } from './auto-order-change';


export class AutoOrderChangeFirestore {
  static collectionID = 'auto_order_changes';
  static documentID = 'auto_order_change_id';
  static virtualPath = `${AutoOrderChangeFirestore.collectionID}/{${AutoOrderChangeFirestore.documentID}}`;

  static converter: FirestoreDataConverter<AutoOrderChange> = {
    toFirestore: (data) => ({ ...data }),
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options)!;
      return new AutoOrderChange(data, data.created_at, data.updated_at);
    }
  };

  static collectionPath() {
    return `${AutoOrderChangeFirestore.collectionID}`;
  }

  static documentPath(id: string) {
    return `${AutoOrderChangeFirestore.collectionPath()}/${id}`;
  }
}
