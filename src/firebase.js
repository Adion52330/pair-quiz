// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4wxq4UCYsCH-90wPykaR6Mo1ARu6YHA8",
  authDomain: "pair-quiz.firebaseapp.com",
  projectId: "pair-quiz",
  storageBucket: "pair-quiz.appspot.com",
  messagingSenderId: "931583077667",
  appId: "1:931583077667:web:f67d2a574cb9ed64fa7096",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore;

export default db;
