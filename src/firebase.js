import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config - Replace with your Firebase project credentials
// Read and validate required Vite env vars (VITE_...)
const requiredVars = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const missing = Object.entries(requiredVars).filter(([, v]) => !v).map(([k]) => k);
if (missing.length) {
  throw new Error(
    `Missing Firebase env vars: ${missing.join(", ")}. Add them to a local .env file or set environment variables (see FIREBASE_SETUP.md).`
  );
}

const firebaseConfig = { ...requiredVars };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
