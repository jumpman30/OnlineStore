// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXurOd1SSqK5vOG6dtvzQalXz2HGK4mgA",
  authDomain: "shopify-8d34d.firebaseapp.com",
  projectId: "shopify-8d34d",
  storageBucket: "shopify-8d34d.appspot.com",
  messagingSenderId: "983363979164",
  appId: "1:983363979164:web:56597f241e98e3cdcd6a59",
  measurementId: "G-BF9TWLXXPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);
