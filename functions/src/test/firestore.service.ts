/* eslint-disable require-jsdoc */
import { edisonTestConfig } from './config.model';
import { initializeApp } from 'firebase/app';
import { getDocs, collection, getFirestore } from 'firebase/firestore';

export const list = async (collectionName: string) => {
  const config = edisonTestConfig;
  const app = initializeApp(config);
  const db = getFirestore(app);
  const snapshots = await getDocs(collection(db, collectionName));
  return snapshots.docs.map((doc) => doc.data());
};
