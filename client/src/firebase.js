// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-46430.firebaseapp.com",
  projectId: "mern-blog-46430",
  storageBucket: "mern-blog-46430.appspot.com",
  messagingSenderId: "1047736175722",
  appId: "1:1047736175722:web:1b7ffae51900b8a4878e13"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);