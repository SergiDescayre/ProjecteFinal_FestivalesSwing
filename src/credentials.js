import { initializeApp } from "firebase/app";
const firebaseConfig = {
  // apiKey: "AIzaSyCJ-Du0pdJx2D-f8bKs22MYJ7_7u_5003o",
  // authDomain: "festivales-swing.firebaseapp.com",
  // projectId: "festivales-swing",
  // storageBucket: "festivales-swing.appspot.com",
  // messagingSenderId: "581283307998",
  // appId: "1:581283307998:web:d7d52c3a8ad707d6427d4f",

  apiKey: "AIzaSyBuG86injTUQ3dl52F8eif0CXeLLHN0FPk",
  authDomain: "favoritos-a0021.firebaseapp.com",
  projectId: "favoritos-a0021",
  storageBucket: "favoritos-a0021.appspot.com",
  messagingSenderId: "155299725066",
  appId: "1:155299725066:web:b15d7b70d9536cb72604f3",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;
