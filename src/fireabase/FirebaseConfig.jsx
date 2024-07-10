// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC1qa-5QVrrxNHAyjc0j7F7eG6LzwZ4_Js",
  authDomain: "shopkart-be1d5.firebaseapp.com",
  projectId: "shopkart-be1d5",
  storageBucket: "shopkart-be1d5.appspot.com",
  messagingSenderId: "904308217946",
  appId: "1:904308217946:web:632a6a86147b48c34f6063",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
