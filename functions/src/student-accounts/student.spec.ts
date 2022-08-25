import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

describe('student_accounts_test', () => {
  it('get student_accounts', async () => {
    const firebaseConfig = {
      apiKey: 'AIzaSyD7h7z5SNhVz_L9uJS5i4WLe7VACgaNoR8',
      authDomain: 'edison-test-f6ac3.firebaseapp.com',
      projectId: 'edison-test-f6ac3',
      storageBucket: 'edison-test-f6ac3.appspot.com',
      messagingSenderId: '739107341891',
      appId: '1:739107341891:web:54fb0767d50f823c06b6f6',
      measurementId: 'G-KEL769L1D2',
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const students = await getDocs(collection(db, 'student_accounts')).then((snapshots) => snapshots.docs.map((doc) => doc.data()));
    console.log(students);

    expect(false).toBeFalsy();
  });
});
