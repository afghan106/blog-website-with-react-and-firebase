// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: "blogwebsite-f5bf5",
  storageBucket:process.env.STORAGEBUCKET,
  messagingSenderId: "462341475657",
  appId: process.env.APPID,
  measurementId: "G-CFMSVS00Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db=new getFirestore(app);
export const provider=new GoogleAuthProvider();
export const auth=getAuth(app);
