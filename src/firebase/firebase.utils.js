import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAt4lTJyWs0bZsrkrWf3bHwxJlWkgK7kpM",
  authDomain: "imamali-ac225.firebaseapp.com",
  projectId: "imamali-ac225",
  storageBucket: "imamali-ac225.appspot.com",
  messagingSenderId: "470370124716",
  appId: "1:470370124716:web:da61a717130fdb19f07009"
};


firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

