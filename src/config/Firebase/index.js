// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6BooKnZTBx6P5aeA66vgRqX6Um1uLDy8",
  authDomain: "my-cv-97336.firebaseapp.com",
  databaseURL: "https://my-cv-97336-default-rtdb.firebaseio.com",
  projectId: "my-cv-97336",
  storageBucket: "my-cv-97336.firebasestorage.app",
  messagingSenderId: "160841389478",
  appId: "1:160841389478:web:5be2a1c3cc3558904d2b67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
