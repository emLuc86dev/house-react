// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGSz9zjW0CaloEGM-eU-M3Ben9hbODe-s",
  authDomain: "house-react-ts.firebaseapp.com",
  projectId: "house-react-ts",
  storageBucket: "house-react-ts.appspot.com",
  messagingSenderId: "147361578636",
  appId: "1:147361578636:web:f527448f57402ca67c45a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()