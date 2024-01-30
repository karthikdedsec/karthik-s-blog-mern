// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-eca40.firebaseapp.com",
  projectId: "mern-blog-eca40",
  storageBucket: "mern-blog-eca40.appspot.com",
  messagingSenderId: "278151103592",
  appId: "1:278151103592:web:cf66fc101a99f4f986a7dd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
