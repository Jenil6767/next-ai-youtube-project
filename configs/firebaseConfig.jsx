// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai--generate.firebaseapp.com",
  projectId: "ai--generate",
  storageBucket: "ai--generate.firebasestorage.app",
  messagingSenderId: "728443101396",
  appId: "1:728443101396:web:4236a40d60b943ca3b9b41",
  measurementId: "G-R4HGHJPM4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app)