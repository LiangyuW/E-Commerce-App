
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config= {
    apiKey: "AIzaSyAzf8dXEFFS_em1k3FDCJ7AktWJpllzx9o",
    authDomain: "e-commerce-f391b.firebaseapp.com",
    projectId: "e-commerce-f391b",
    storageBucket: "e-commerce-f391b.appspot.com",
    messagingSenderId: "925496054665",
    appId: "1:925496054665:web:d08368ad63eb7d006ec758",
    measurementId: "G-0TM5GDE4Y0"
  };

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;

