// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmeu0qHImNfa0Nl5tmFfi-SNMl01MxRdM",
  authDomain: "books-be39c.firebaseapp.com",
  projectId: "books-be39c",
  storageBucket: "books-be39c.appspot.com",
  messagingSenderId: "695373229314",
  appId: "1:695373229314:web:8fb673188edea91546261b",
  measurementId: "G-BL5YQN87W9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebase = getFirestore(app);
