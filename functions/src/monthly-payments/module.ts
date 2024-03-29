/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/* eslint-disable require-jsdoc */
import { MonthlyPayment, MonthlyPaymentFirestore } from '@local/common';
import * as admin from 'firebase-admin';

export * from './controller';

export function collection(studentAccountID: string) {
  return admin
    .firestore()
    .collection(MonthlyPaymentFirestore.collectionPath(studentAccountID))
    .withConverter(MonthlyPaymentFirestore.converter as any);
}

export function collectionGroup() {
  return admin
    .firestore()
    .collectionGroup(MonthlyPaymentFirestore.collectionID)
    .withConverter(MonthlyPaymentFirestore.converter as any);
}

export function document(studentAccountID: string, id?: string) {
  const col = collection(studentAccountID);
  return id ? col.doc(id) : col.doc();
}

export async function get(studentAccountID: string, id: string) {
  return await document(studentAccountID, id)
    .get()
    .then((snapshot) => snapshot.data() as MonthlyPayment);
}

export async function listLatest(studentAccountID: string) {
  return await collection(studentAccountID)
    .orderBy('created_at', 'desc')
    .get()
    .then((snapshot) => snapshot.docs.map((doc) => doc.data() as MonthlyPayment));
}

export async function list(studentAccountID: string) {
  return await collection(studentAccountID)
    .get()
    .then((snapshot) => snapshot.docs.map((doc) => doc.data() as MonthlyPayment));
}

export async function create(data: MonthlyPayment) {
  const doc = document(data.student_account_id);
  data.id = doc.id;

  const now = admin.firestore.Timestamp.now();
  data.created_at = now;
  data.updated_at = now;

  await doc.set(data);
}

// eslint-disable-next-line camelcase
export async function update(data: Partial<MonthlyPayment> & { id: string } & { student_account_id: string }) {
  const now = admin.firestore.Timestamp.now();
  data.updated_at = now;

  await document(data.student_account_id, data.id).update(data);
}

export async function delete_(studentAccountID: string, id: string) {
  await document(studentAccountID, id).delete();
}
