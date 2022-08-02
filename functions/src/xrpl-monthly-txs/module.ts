/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/* eslint-disable require-jsdoc */
import * as admin from 'firebase-admin';
import { XrplMonthlyTx, XrplMonthlyTxFirestore } from '@local/common';

export * from './controller'

export function collection() {
  return admin
    .firestore()
    .collection(XrplMonthlyTxFirestore.collectionPath())
    .withConverter(XrplMonthlyTxFirestore.converter as any);
}

export function collectionGroup() {
  return admin
    .firestore()
    .collectionGroup(XrplMonthlyTxFirestore.collectionID)
    .withConverter(XrplMonthlyTxFirestore.converter as any);
}

export function document(id?: string) {
  const col = collection();
  return id ? col.doc(id) : col.doc();
}

export async function get(id: string) {
  return await document(id)
    .get()
    .then((snapshot) => snapshot.data() as XrplMonthlyTx | undefined);
}

export async function list() {
  return await collection()
    .get()
    .then((snapshot) => snapshot.docs.map((doc) => doc.data() as XrplMonthlyTx));
}

export async function create(
  data: XrplMonthlyTx
) {
  const doc = document(data.id);
  data.id = doc.id;

  const now = admin.firestore.Timestamp.now();
  data.created_at = now;
  data.updated_at = now;

  await doc.set(data);
}

export async function update(
  data: Partial<XrplMonthlyTx> & { id: string }
) {
  const now = admin.firestore.Timestamp.now();
  data.updated_at = now;

  await document(data.id).update(data);
}

export async function delete_(id: string) {
  await document(id).delete();
}
