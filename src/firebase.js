
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBt2Vvj-aiXMGkE8FVZl5I-mDoKOFJWF_s",
  authDomain: "challenge-c09ba.firebaseapp.com",
  projectId: "challenge-c09ba",
  storageBucket: "challenge-c09ba.appspot.com",
  messagingSenderId: "102392951144",
  appId: "1:102392951144:web:714918c5e42752109226dd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;