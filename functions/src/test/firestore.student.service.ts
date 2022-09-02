import { edisonTestConfig } from './config.model';
import { StudentAccountFirestore } from '@local/common';
import { initializeApp } from 'firebase/app';
import { getDocs, getFirestore, collection, Timestamp } from 'firebase/firestore';

export const listByStudentID = async (studentAccountID: string, collectionName: string) => {
  const config = edisonTestConfig;
  const app = initializeApp(config);
  const db = getFirestore(app);
  const collectionPath = StudentAccountFirestore.documentPath(studentAccountID) + '/' + collectionName;
  const snapshots = await getDocs(collection(db, collectionPath));
  return snapshots.docs.map((doc) => doc.data());
};

export const getLatestByStudentID = async (studentAccountID: string, collectionName: string) => {
  const config = edisonTestConfig;
  const app = initializeApp(config);
  const db = getFirestore(app);
  const collectionPath = StudentAccountFirestore.documentPath(studentAccountID) + '/' + collectionName;
  const snapshots = await getDocs(collection(db, collectionPath));
  return (
    snapshots.docs
      .map((doc) => doc.data())
      // 降順ソート
      .sort((first, second) => {
        if (!first.created_at) {
          return 1;
        } else if (!second.bid_created_at) {
          return -1;
        } else {
          if ((first.created_at as Timestamp).toDate() > (second.created_at as Timestamp).toDate()) {
            return -1;
          } else if ((first.created_at as Timestamp).toDate() < (second.created_at as Timestamp).toDate()) {
            return 1;
          } else {
            return 0;
          }
        }
      })[0]
  );
};

export const listLatestByStudentID = async (studentAccountID: string, collectionName: string) => {
  const config = edisonTestConfig;
  const app = initializeApp(config);
  const db = getFirestore(app);
  const collectionPath = StudentAccountFirestore.documentPath(studentAccountID) + '/' + collectionName;
  const snapshots = await getDocs(collection(db, collectionPath));
  return (
    snapshots.docs
      .map((doc) => doc.data())
      // 降順ソート
      .sort((first, second) => {
        if (!first.created_at) {
          return 1;
        } else if (!second.bid_created_at) {
          return -1;
        } else {
          if ((first.created_at as Timestamp).toDate() > (second.created_at as Timestamp).toDate()) {
            return -1;
          } else if ((first.created_at as Timestamp).toDate() < (second.created_at as Timestamp).toDate()) {
            return 1;
          } else {
            return 0;
          }
        }
      })
  );
};

export function document(collectionName: string, id?: string) {
  const config = edisonTestConfig;
  const app = initializeApp(config);
  const db = getFirestore(app);
  const ref = collection(db, collectionName);

  return id ? doc(db, ref.path, id) : doc(db, ref.path, autoID());
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, camelcase
export function create(
  // eslint-disable-next-line camelcase
  collectionName: string,
  data?: { id?: string; created_at?: FieldValue | Timestamp | undefined; updated_at?: FieldValue | Timestamp | undefined },
) {
  const doc = document(collectionName);
  data.id = doc.id;

  const now = serverTimestamp();
  data.created_at = now;
  data.updated_at = now;

  return setDoc(doc, data);
}
function autoID(): string {
  throw new Error('Function not implemented.');
}
