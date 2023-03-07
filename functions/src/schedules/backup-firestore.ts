import * as firestore from '@google-cloud/firestore';
import * as functions from 'firebase-functions';

const f = functions.region('asia-northeast1').runWith({ timeoutSeconds: 540, memory: '2GB' });
module.exports.backupFirestore = f.pubsub
  .schedule('0 6 * * *')
  // .schedule('5,35 * * * *')
  .timeZone('Asia/Tokyo') // Users can choose timezone - default is America/Los_Angeles
  .onRun(async () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const client = new firestore.v1.FirestoreAdminClient();
    const projectId = process.env.GCP_PROJECT || process.env.GCLOUD_PROJECT || 'edison-dev-1c1b5';
    const databaseName = client.databasePath(projectId, '(default)');
    const bucket = 'gs://auto-backup-edison-dev-asia';

    return await client
      .exportDocuments({
        name: databaseName,
        outputUriPrefix: bucket,
        // Leave collectionIds empty to export all collections
        // or set to a list of collection IDs to export,
        // collectionIds: ['users', 'posts']
        collectionIds: [],
      })
      .then((responses: any[]) => {
        const response = responses[0];
        console.log(`Operation Name: ${response['name']}`);
        return response;
      })
      .catch((err: Error) => {
        console.error(err);
        throw new Error('Export operation failed');
      });
  });
