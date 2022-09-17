import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  // your config goes hconst firebaseConfig = {
  apiKey: "*********HfEzOowIPTsIFW*******",
  authDomain: "insta-e8cac.firebaseapp.com",
  projectId: "insta-e8cac",
  storageBucket: "insta-e8cac.appspot.com",
  messagingSenderId: "723254209434",
  appId: "1:723254209434:web:dd83c53b9aec99fc8d2823",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

//const db = firebase.firestore();

export default { firebase, db };
