/* eslint-disable camelcase */
import { edisonTestConfig } from './config.model';
import { initializeApp } from 'firebase/app';
import { getDocs, collection, getFirestore, Timestamp, doc, serverTimestamp, FieldValue, setDoc } from 'firebase/firestore';

export const list = async (collectionName: string) => {
  const config = edisonTestConfig;
  const app = initializeApp(config);
  const db = getFirestore(app);
  const snapshots = await getDocs(collection(db, collectionName));
  return snapshots.docs.map((doc) => doc.data());
};

export const getLatest = async (collectionName: string) => {
  const config = edisonTestConfig;
  const app = initializeApp(config);
  const db = getFirestore(app);
  const snapshots = await getDocs(collection(db, collectionName));
  return (
    snapshots.docs
      .map((doc) => doc.data())
      // 昇順ソート
      .sort((first, second) => {
        if (!first.bid_created_at) {
          return -1;
        } else if (!second.bid_created_at) {
          return 1;
        } else {
          if ((first.bid_created_at as Timestamp).toDate() < (second.created_at as Timestamp).toDate()) {
            return -1;
          } else if ((first.bid_created_at as Timestamp).toDate() > (second.created_at as Timestamp).toDate()) {
            return 1;
          } else {
            return 0;
          }
        }
      })[0]
  );
};

export const listLatest = async (collectionName: string) => {
  const config = edisonTestConfig;
  const app = initializeApp(config);
  const db = getFirestore(app);
  const snapshots = await getDocs(collection(db, collectionName));
  return (
    snapshots.docs
      .map((doc) => doc.data())
      // 昇順ソート
      .sort((first, second) => {
        if (!first.bid_created_at) {
          return -1;
        } else if (!second.bid_created_at) {
          return 1;
        } else {
          if ((first.bid_created_at as Timestamp).toDate() < (second.created_at as Timestamp).toDate()) {
            return -1;
          } else if ((first.bid_created_at as Timestamp).toDate() > (second.created_at as Timestamp).toDate()) {
            return 1;
          } else {
            return 0;
          }
        }
      })
  );
};

export const document = (collectionName: string, id?: string) => {
  const config = edisonTestConfig;
  const app = initializeApp(config);
  const db = getFirestore(app);
  const ref = collection(db, collectionName);

  return id ? doc(db, ref.path, id) : doc(db, ref.path, autoID());
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, camelcase
export const create = (
  collectionName: string,
  data: { id?: string; created_at?: FieldValue | Timestamp | undefined; updated_at?: FieldValue | Timestamp | undefined },
) => {
  const doc = document(collectionName);
  data.id = doc.id;

  const now = serverTimestamp();
  data.created_at = now;
  data.updated_at = now;

  return setDoc(doc, data);
};

export const autoID = () => {
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let autoID = '';

  for (let i = 0; i < 20; i++) {
    autoID += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  }
  return autoID;
};
