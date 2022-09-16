import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  // your config goes here
  const firebaseConfig = {
  ",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

//const db = firebase.firestore();

export default { firebase, db };
