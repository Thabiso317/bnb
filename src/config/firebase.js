// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3bOrfMZl8YCpzPLGRwrJIFbLW9UI_CAQ",
  authDomain: "hotel-app-5c20a.firebaseapp.com",
  projectId: "hotel-app-5c20a",
  storageBucket: "hotel-app-5c20a.appspot.com",
  messagingSenderId: "714119204896",
  appId: "1:714119204896:web:0c6939d65f15dfec16ac45",
  measurementId: "G-CWDHWYW8R5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db};