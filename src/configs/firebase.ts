// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr0hS2B5Y6C84Xv5_UH1MnfKx4fd71PAM",
  authDomain: "wedding-invitation-3feab.firebaseapp.com",
  projectId: "wedding-invitation-3feab",
  storageBucket: "wedding-invitation-3feab.firebasestorage.app",
  messagingSenderId: "410346191241",
  appId: "1:410346191241:web:cd71b710152c5038b50958",
  measurementId: "G-XK83NLZBWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db_firestore = getFirestore(app)

export { db_firestore }