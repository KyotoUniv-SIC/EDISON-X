import { FirestoreDataConverter } from 'firebase/firestore';
import { MonthlySettlement } from './monthly-settlement';


export class MonthlySettlementFirestore {
  static collectionID = 'monthly_settlements';
  static documentID = 'monthly_settlement_id';
  static virtualPath = `${MonthlySettlementFirestore.collectionID}/{${MonthlySettlementFirestore.documentID}}`;

  static converter: FirestoreDataConverter<MonthlySettlement> = {
    toFirestore: (data) => ({ ...data }),
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options)!;
      return new MonthlySettlement(data, data.created_at, data.updated_at);
    }
  };

  static collectionPath() {
    return `${MonthlySettlementFirestore.collectionID}`;
  }

  static documentPath(id: string) {
    return `${MonthlySettlementFirestore.collectionPath()}/${id}`;
  }
}
