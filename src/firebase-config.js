import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtweq_f8WVlbQ_x51x_edfc4_LKqzWyiQ",
  authDomain: "test-c141f.firebaseapp.com",
  databaseURL:
    "https://test-c141f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-c141f",
  storageBucket: "test-c141f.appspot.com",
  messagingSenderId: "797327077318",
  appId: "1:797327077318:web:9a21048618f77c752f0cc7",
  measurementId: "G-W3DV9G4JE8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
