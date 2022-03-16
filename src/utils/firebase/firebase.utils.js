import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAFcYle7NK6ygPF3Ac4-fjJXhMgUVFYALI",
    authDomain: "crwn-db-3e8b9.firebaseapp.com",
    projectId: "crwn-db-3e8b9",
    storageBucket: "crwn-db-3e8b9.appspot.com",
    messagingSenderId: "443463038369",
    appId: "1:443463038369:web:15fa4f55517056291147e0",
    measurementId: "G-QR9SM0JVE2"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
      }
      catch (error){
        console.log('error creating new user', error.message);
      }
    }

    return userDocRef;
  }