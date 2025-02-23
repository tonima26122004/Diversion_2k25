// Import necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqGLt60CNfAYtUnoBamxz2Wqasn5yI168",
  authDomain: "diversion2k25.firebaseapp.com",
  projectId: "diversion2k25",
  storageBucket: "diversion2k25.appspot.com",  // Fixed incorrect storageBucket URL
  messagingSenderId: "471709166721",
  appId: "1:471709166721:web:0d22ba2a69edf92d13b180",
  measurementId: "G-YGMBT4K7KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Add authentication
const analytics = getAnalytics(app);

export { auth, app };
