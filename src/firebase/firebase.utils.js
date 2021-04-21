
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


export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef=firestore.doc(`users/${userAuth.uid}`);

  const snapshot=await userRef.get();

  if(!snapshot.exists){
      const{displayName, email}=userAuth
      const createdAt= new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
          console.log('Error creating user', error.message);
      }
  }
};


firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;

