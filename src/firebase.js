// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAW24T48vAZAQL7zEWkccJVR3ampgQHiVU",
  authDomain: "ccgpa-c4e15.firebaseapp.com",
  projectId: "ccgpa-c4e15",
  storageBucket: "ccgpa-c4e15.firebasestorage.app",
  messagingSenderId: "266616441471",
  appId: "1:266616441471:web:74e03581e8a393d23d4d4a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  // ✅ THIS EXPORT FIXES THE ERROR
