// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABPAs4lSkNUKawZJ1JKYKhxx9-Fjsua1E",
  authDomain: "coffee-store-1eadf.firebaseapp.com",
  projectId: "coffee-store-1eadf",
  storageBucket: "coffee-store-1eadf.appspot.com",
  messagingSenderId: "907830584579",
  appId: "1:907830584579:web:bd83124a9ae6a894eff536"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;