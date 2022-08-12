/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/* eslint-disable require-jsdoc */
import { DailyUsage, DailyUsageFirestore } from '@local/common';
import * as admin from 'firebase-admin';

export * from './controller';

export function collection() {
  return admin
    .firestore()
    .collection(DailyUsageFirestore.collectionPath())
    .withConverter(DailyUsageFirestore.converter as any);
}

export function collectionGroup() {
  return admin
    .firestore()
    .collectionGroup(DailyUsageFirestore.collectionID)
    .withConverter(DailyUsageFirestore.converter as any);
}

export function document(id?: string) {
  const col = collection();
  return id ? col.doc(id) : col.doc();
}

export async function get(id: string) {
  return await document(id)
    .get()
    .then((snapshot) => snapshot.data() as DailyUsage);
}

export async function list() {
  return await collection()
    .get()
    .then((snapshot) => snapshot.docs.map((doc) => doc.data() as DailyUsage));
}

export async function listYesterday() {
  const first = new Date();
  first.setDate(first.getDate() - 1);
  first.setHours(0, 0, 0, 0);
  const end = new Date();
  end.setHours(0, 0, 0, 0);

  return await collection()
    .orderBy('created_at', 'desc')
    .where('created_at', '>', first)
    .where('created_at', '<', end)
    .get()
    .then((snapshot) => snapshot.docs.map((doc) => doc.data() as DailyUsage));
}

export async function listLastMonth(roomID: string) {
  const now = new Date();
  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);

  return await collection()
    .orderBy('created_at', 'desc')
    .where('created_at', '<', now)
    .where('created_at', '>', lastMonth)
    .where('room_id', '==', roomID)
    .get()
    .then((snapshot) => snapshot.docs.map((doc) => doc.data() as DailyUsage));
}

export async function listLastMonthFix(roomID: string) {
  const now = new Date();
  now.setDate(1);
  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);
  lastMonth.setDate(1);

  return await collection()
    .orderBy('created_at', 'desc')
    .where('created_at', '<', now)
    .where('created_at', '>', lastMonth)
    .where('room_id', '==', roomID)
    .get()
    .then((snapshot) => snapshot.docs.map((doc) => doc.data() as DailyUsage));
}

export async function listThisMonth(roomID: string) {
  const now = new Date();
  const first = new Date();
  first.setDate(1);
  first.setHours(0, 0, 0, 0);

  return await collection()
    .orderBy('created_at', 'desc')
    .where('created_at', '<', now)
    .where('created_at', '>', first)
    .where('room_id', '==', roomID)
    .get()
    .then((snapshot) => snapshot.docs.map((doc) => doc.data() as DailyUsage));
}

export async function create(data: DailyUsage) {
  const doc = document();
  data.id = doc.id;

  const now = admin.firestore.Timestamp.now();
  data.created_at = now;
  data.updated_at = now;

  await doc.set(data);
}

export async function update(data: Partial<DailyUsage> & { id: string }) {
  const now = admin.firestore.Timestamp.now();
  data.updated_at = now;

  await document(data.id).update(data);
}

export async function delete_(id: string) {
  await document(id).delete();
}
