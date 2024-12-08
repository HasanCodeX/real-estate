// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB_lFSB3VsSGS2qXAUWFi29t6_MCxW9gk",
  authDomain: "r-estate-a9.firebaseapp.com",
  projectId: "r-estate-a9",
  storageBucket: "r-estate-a9.appspot.com",
  messagingSenderId: "721717896380",
  appId: "1:721717896380:web:f888dea10c8ca7909cdcb9",
  measurementId: "G-XLE517WKLB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
