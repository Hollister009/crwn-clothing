import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBGxzipqVM9YmPin6VIcz4CpslRJHtiyxU',
  authDomain: 'crwn-db-e05ff.firebaseapp.com',
  databaseURL: 'https://crwn-db-e05ff.firebaseio.com',
  projectId: 'crwn-db-e05ff',
  storageBucket: '',
  messagingSenderId: '67909430512',
  appId: '1:67909430512:web:a08ede9da8d0711e932635',
  measurementId: 'G-XQFJ5G211X'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
