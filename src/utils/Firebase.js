// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnfOQLhoHaZYxB5eF4zNm3PqgjvXq3-6w",
  authDomain: "authentication-6f189.firebaseapp.com",
  projectId: "authentication-6f189",
  storageBucket: "authentication-6f189.appspot.com",
  messagingSenderId: "524023946842",
  appId: "1:524023946842:web:8ebc263af67ff345158263",
  measurementId: "G-3QDQ2T85GV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
