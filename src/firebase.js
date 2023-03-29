// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp-j94FTGjzn_PTGw6fQYIYTRIb1CbJMM",
  authDomain: "pomofocus-d3182.firebaseapp.com",
  projectId: "pomofocus-d3182",
  storageBucket: "pomofocus-d3182.appspot.com",
  messagingSenderId: "534543943998",
  appId: "1:534543943998:web:b2c16e769c3333a8d9846f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth  = getAuth(app)