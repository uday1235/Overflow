// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import firebase from "firebase";
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIqF6N4AtElRHfEzOowIPTsIFWffue5jE",
  authDomain: "insta-e8cac.firebaseapp.com",
  projectId: "insta-e8cac",
  storageBucket: "insta-e8cac.appspot.com",
  messagingSenderId: "723254209434",
  appId: "1:723254209434:web:dd83c53b9aec99fc8d2823",
};

// Initialize Fireb
const app = initializeApp(firebaseConfig);
const db = firebase.firestore();

export default { firebase, db };
