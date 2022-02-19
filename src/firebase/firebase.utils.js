import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAFcYle7NK6ygPF3Ac4-fjJXhMgUVFYALI",
    authDomain: "crwn-db-3e8b9.firebaseapp.com",
    projectId: "crwn-db-3e8b9",
    storageBucket: "crwn-db-3e8b9.appspot.com",
    messagingSenderId: "443463038369",
    appId: "1:443463038369:web:15fa4f55517056291147e0",
    measurementId: "G-QR9SM0JVE2"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;