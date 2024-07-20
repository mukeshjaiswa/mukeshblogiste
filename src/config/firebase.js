// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArJccLk8wvsdXbKvjZ09rrzhocutf34GE",
  authDomain: "myblogsite-aa50a.firebaseapp.com",
  projectId: "myblogsite-aa50a",
  storageBucket: "myblogsite-aa50a.appspot.com",
  messagingSenderId: "368352808570",
  appId: "1:368352808570:web:cb55c8a4aa1a09d135b5c3",
  measurementId: "G-91596Q0Y6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app);
const storage = getStorage(app);
export { db,storage }; 