
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyCYsZudttpPSBIDwhq1Z243XCI33kMq0xQ",
  authDomain: "calculadora1ponto0.firebaseapp.com",
  projectId: "calculadora1ponto0",
  storageBucket: "calculadora1ponto0.firebasestorage.app",
  messagingSenderId: "785879511122",
  appId: "1:785879511122:web:6d7a68005fffa591fe6f8b",
  measurementId: "G-E3TE5RRZDT"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
