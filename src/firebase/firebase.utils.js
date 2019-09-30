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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
