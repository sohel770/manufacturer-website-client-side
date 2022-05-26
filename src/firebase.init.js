// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCySyaSlL3f7popkUNaWHKLZW9ILI8dAng",
  authDomain: "manufacturer-d4b49.firebaseapp.com",
  projectId: "manufacturer-d4b49",
  storageBucket: "manufacturer-d4b49.appspot.com",
  messagingSenderId: "956594205544",
  appId: "1:956594205544:web:02e4c491834f4f9ee89cdd"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
