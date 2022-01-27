// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { firebaseConfig } from "./firebaseCredentials";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export const signInPrompt = () => {
  signInWithPopup(auth, provider);
}

export const signOutFn = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("Sign out success");
  }).catch((error) => {
    // An error happened.
    console.log("Sign out failed");
  });
}

export const db = getFirestore(app);