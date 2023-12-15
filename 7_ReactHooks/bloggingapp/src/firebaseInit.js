// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6rAIvLZrEeNquD2-SjF6FL9KZupoBrt4",
  authDomain: "likeminds-20812.firebaseapp.com",
  projectId: "likeminds-20812",
  storageBucket: "likeminds-20812.appspot.com",
  messagingSenderId: "741156793484",
  appId: "1:741156793484:web:8cdd55378a05681b785fa9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
