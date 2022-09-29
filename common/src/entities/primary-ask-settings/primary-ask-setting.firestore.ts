import { FirestoreDataConverter } from 'firebase/firestore';
import { PrimaryAskSetting } from './primary-ask-setting';


export class PrimaryAskSettingFirestore {
  static collectionID = 'primary_ask_settings';
  static documentID = 'primary_ask_setting_id';
  static virtualPath = `${PrimaryAskSettingFirestore.collectionID}/{${PrimaryAskSettingFirestore.documentID}}`;

  static converter: FirestoreDataConverter<PrimaryAskSetting> = {
    toFirestore: (data) => ({ ...data }),
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options)!;
      return new PrimaryAskSetting(data, data.created_at, data.updated_at);
    }
  };

  static collectionPath() {
    return `${PrimaryAskSettingFirestore.collectionID}`;
  }

  static documentPath(id: string) {
    return `${PrimaryAskSettingFirestore.collectionPath()}/${id}`;
  }
}
