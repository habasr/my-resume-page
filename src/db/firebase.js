// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDymcg6vGrkwCmhE2gZe62b0qOclEUdyxk",
  authDomain: "my-portfolio-app-f8265.firebaseapp.com",
  projectId: "my-portfolio-app-f8265",
  storageBucket: "my-portfolio-app-f8265.appspot.com",
  messagingSenderId: "478462997129",
  appId: "1:478462997129:web:f550668ad46b7cf63f4c58",
  measurementId: "G-XK4WQ156ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FireStoreDB = getFirestore(app);
const analytics = getAnalytics(app);