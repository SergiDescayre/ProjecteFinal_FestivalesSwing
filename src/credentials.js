import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCJ-Du0pdJx2D-f8bKs22MYJ7_7u_5003o",
  authDomain: "festivales-swing.firebaseapp.com",
  projectId: "festivales-swing",
  storageBucket: "festivales-swing.appspot.com",
  messagingSenderId: "581283307998",
  appId: "1:581283307998:web:d7d52c3a8ad707d6427d4f",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;
