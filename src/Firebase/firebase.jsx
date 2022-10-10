import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA1OfyMUJDPWyeYLDZ0F_wGcXO8lWIrAwQ",
  authDomain: "catch-a-kaam-28a62.firebaseapp.com",
  projectId: "catch-a-kaam-28a62",
  storageBucket: "catch-a-kaam-28a62.appspot.com",
  messagingSenderId: "347908351961",
  appId: "1:347908351961:web:2a198c762f6bca64de1bc8",
  measurementId: "G-3SC6K8LDES",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
