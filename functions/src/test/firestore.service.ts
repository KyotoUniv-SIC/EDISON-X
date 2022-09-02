/* eslint-disable require-jsdoc */
import { edisonTestConfig } from './config.model';
import { BalanceFirestore } from '@local/common';
import { initializeApp } from 'firebase/app';
import { getDocs, collection, getFirestore, Timestamp } from 'firebase/firestore';

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
