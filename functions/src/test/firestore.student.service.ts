import { edisonTestConfig } from './config.model';
import { BalanceFirestore, StudentAccountFirestore } from '@local/common';
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
      // 昇順ソート
      .sort((first, second) => {
        if (!first.created_at) {
          return -1;
        } else if (!second.bid_created_at) {
          return 1;
        } else {
          if ((first.created_at as Timestamp).toDate() < (second.created_at as Timestamp).toDate()) {
            return -1;
          } else if ((first.created_at as Timestamp).toDate() > (second.created_at as Timestamp).toDate()) {
            return 1;
          } else {
            return 0;
          }
        }
      })[0]
  );
};
