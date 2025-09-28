import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeq19aP6A5t1eM8UkzMH-oGLkqzDx3KSw",
  authDomain: "starthub-866a1.firebaseapp.com",
  projectId: "starthub-866a1",
  storageBucket: "starthub-866a1.appspot.com",
  messagingSenderId: "352654929703",
  appId: "1:352654929703:web:8557efecd289d1eb73c302",
  measurementId: "G-BKYQ25VMJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the services you'll use
export const auth = getAuth(app);
export const db = getFirestore(app);

