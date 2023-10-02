// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// connects code with google
const firebaseConfig = {
  apiKey: "AIzaSyASM8Tt7GgGHlJI4_o-rm60v8wa-NEFAj8",
  authDomain: "react-new-5a213.firebaseapp.com",
  projectId: "react-new-5a213",
  storageBucket: "react-new-5a213.appspot.com",
  messagingSenderId: "887510201427",
  appId: "1:887510201427:web:d2ae5e458dff8dab1142a6",
  measurementId: "G-4B71WKZM78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db= getFirestore(app)