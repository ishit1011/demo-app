// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWja2qQvgKiyaa07r4A_nQy55cjuAdTTE",
  authDomain: "todo-app-3c7c2.firebaseapp.com",
  databaseURL: "https://todo-app-3c7c2-default-rtdb.firebaseio.com",
  projectId: "todo-app-3c7c2",
  storageBucket: "todo-app-3c7c2.appspot.com",
  messagingSenderId: "1092947147926",
  appId: "1:1092947147926:web:a67af1ff58d285956ed6b7",
  measurementId: "G-NB0BVC3FT7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getDatabase(app)
