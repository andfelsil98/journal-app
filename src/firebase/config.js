// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVBgSqNMRmZTsHFTFM2ekn6OaU8R79u5E",
  authDomain: "react-journal-app-199a2.firebaseapp.com",
  projectId: "react-journal-app-199a2",
  storageBucket: "react-journal-app-199a2.firebasestorage.app",
  messagingSenderId: "309675011213",
  appId: "1:309675011213:web:b329d765a284bb4dbc86c4"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);