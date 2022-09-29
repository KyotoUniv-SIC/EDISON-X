/* eslint-disable camelcase */
import { edisonTestConfig } from './config.model';
import { StudentAccount, StudentAccountFirestore } from '@local/common';
import { initializeApp } from 'firebase/app';
import { getDocs, getFirestore, collection, Timestamp, doc, serverTimestamp, FieldValue, setDoc } from 'firebase/firestore';
import { account } from '../accounts';

export const list = async(collectionName: string)=>{
  const config = edisonTestConfig;
  const app = initializeApp(config);
  const db = getFirestore(app);
  const snapshots = await getDocs(collection(db, collectionName));
  return snapshots.docs.map((doc) => doc.data());
}

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
        } else if (!second.created_at) {
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

export const document = (studentAccountID: string, collectionName: string, id?: string) => {
  const config = edisonTestConfig;
  const app = initializeApp(config);
  const db = getFirestore(app);
  const collectionPath = StudentAccountFirestore.documentPath(studentAccountID) + '/' + collectionName;
  const ref = collection(db, collectionPath);

  return id ? doc(db, ref.path, id) : doc(db, ref.path, autoID());
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, camelcase
export const createByStudentID = (
  studentID: string,
  collectionName: string,
  data: { id?: string; created_at?: FieldValue | Timestamp | undefined; updated_at?: FieldValue | Timestamp | undefined },
) => {
  console.log('hoge1');

  const doc = document(studentID, collectionName);
  data.id = doc.id;

  const now = serverTimestamp();
  data.created_at = now;
  data.updated_at = now;
  console.log(data);

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

export const listLastMonth = async (studentAccountID: string, collectionName: string) => {
  const now = new Date();
  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);
  const list = await listLatestByStudentID(studentAccountID, collectionName);

  return list
    .sort((first, second) => {
      if (!first.created_at) {
        return 1;
      } else if (!second.created_at) {
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
    .filter((ele) => ele.account_id == studentAccountID)
    .filter((ele) => ele.created_at == now)
    .filter((ele) => ele.created_at > lastMonth);
};

export const  getStudentAccount = async (studentAccountID:string)=>{
  const accountList = await list('account');
  return accountList.filter(account => account.id ==studentAccountID)
}
