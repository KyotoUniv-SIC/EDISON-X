import { FirestoreCreateHandler, FirestoreDeleteHandler, FirestoreUpdateHandler } from '../triggers';

// import { isTriggeredOnce } from '../triggers/module';
// import { MonthlySettlementFirestore } from '@local/common';
// import * as functions from 'firebase-functions';

export const onCreateHandler: FirestoreCreateHandler[] = [];
export const onUpdateHandler: FirestoreUpdateHandler[] = [];
export const onDeleteHandler: FirestoreDeleteHandler[] = [];

// const f = functions.region('asia-northeast1').runWith({ timeoutSeconds: 540, memory: '2GB' });
// module.exports.onCreate = f.firestore.document(MonthlySettlementFirestore.virtualPath).onCreate(async (snapshot, context) => {
//   if (await isTriggeredOnce(context.eventId)) {
//     return;
//   }

//   for (const handler of onCreateHandler) {
//     try {
//       await handler(snapshot, context);
//     } catch (e) {
//       console.error(`Error: in function ${handler.name}`);
//       console.error(e);
//     }
//   }
// });

// module.exports.onUpdate = functions.firestore.document(MonthlySettlementFirestore.virtualPath).onUpdate(async (snapshot, context) => {
//   if (await isTriggeredOnce(context.eventId)) {
//     return;
//   }

//   for (const handler of onUpdateHandler) {
//     try {
//       await handler(snapshot, context);
//     } catch (e) {
//       console.error(`Error: in function ${handler.name}`);
//       console.error(e);
//     }
//   }
// });

// module.exports.onDelete = functions.firestore.document(MonthlySettlementFirestore.virtualPath).onDelete(async (snapshot, context) => {
//   if (await isTriggeredOnce(context.eventId)) {
//     return;
//   }

//   for (const handler of onDeleteHandler) {
//     try {
//       await handler(snapshot, context);
//     } catch (e) {
//       console.error(`Error: in function ${handler.name}`);
//       console.error(e);
//     }
//   }
// });
