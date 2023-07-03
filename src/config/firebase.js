// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { collection, doc, setDoc } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDlmO2x4CoHLuJLiujYxRuxrREhl84Bh8",
  authDomain: "trial-d9a60.firebaseapp.com",
  databaseURL: "https://trial-d9a60-default-rtdb.firebaseio.com",
  projectId: "trial-d9a60",
  storageBucket: "trial-d9a60.appspot.com",
  messagingSenderId: "451877211354",
  appId: "1:451877211354:web:a50c86f8302d840b57e9e3",
  measurementId: "G-L0GSRLWN59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);


export default app;

