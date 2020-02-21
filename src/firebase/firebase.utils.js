import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAlWgnw9I05b7Uo0QykIi2452_xSSFFIYQ",
  authDomain: "e-commerce-f1f65.firebaseapp.com",
  databaseURL: "https://e-commerce-f1f65.firebaseio.com",
  projectId: "e-commerce-f1f65",
  storageBucket: "e-commerce-f1f65.appspot.com",
  messagingSenderId: "821784903106",
  appId: "1:821784903106:web:a8be0b128e6002a7b82a5b",
  measurementId: "G-WDC45HH7B2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
