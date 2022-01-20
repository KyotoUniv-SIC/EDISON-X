/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/* eslint-disable require-jsdoc */
import { SinglePriceRenewableSettlement, SinglePriceRenewableSettlementFirestore } from '@local/common';
import * as admin from 'firebase-admin';

export * from './controller';

export function collection() {
  return admin
    .firestore()
    .collection(SinglePriceRenewableSettlementFirestore.collectionPath())
    .withConverter(SinglePriceRenewableSettlementFirestore.converter as any);
}

export function collectionGroup() {
  return admin
    .firestore()
    .collectionGroup(SinglePriceRenewableSettlementFirestore.collectionID)
    .withConverter(SinglePriceRenewableSettlementFirestore.converter as any);
}

export function document(id?: string) {
  const col = collection();
  return id ? col.doc(id) : col.doc();
}

export async function get(id: string) {
  return await document(id)
    .get()
    .then((snapshot) => snapshot.data() as SinglePriceRenewableSettlement);
}

export async function list() {
  return await collection()
    .get()
    .then((snapshot) => snapshot.docs.map((doc) => doc.data() as SinglePriceRenewableSettlement));
}

export async function create(data: SinglePriceRenewableSettlement) {
  const doc = document();
  data.id = doc.id;

  const now = admin.firestore.Timestamp.now();
  data.created_at = now;
  data.updated_at = now;

  const date = now.toDate();
  date.setDate(date.getDate() - 1);
  const timestamp = admin.firestore.Timestamp.fromDate(date);

  data.market_date = timestamp;

  await doc.set(data);
}

export async function update(data: Partial<SinglePriceRenewableSettlement> & { id: string }) {
  const now = admin.firestore.Timestamp.now();
  data.updated_at = now;

  await document(data.id).update(data);
}

export async function delete_(id: string) {
  await document(id).delete();
}
