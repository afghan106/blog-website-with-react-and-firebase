// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvu2UdzXwHfTEMwJaJamVnrsraGul42qA",
  authDomain: "blogwebsite-f5bf5.firebaseapp.com",
  projectId: "blogwebsite-f5bf5",
  storageBucket: "blogwebsite-f5bf5.appspot.com",
  messagingSenderId: "462341475657",
  appId: "1:462341475657:web:a0963c3b46cd834eec5e98",
  measurementId: "G-CFMSVS00Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);