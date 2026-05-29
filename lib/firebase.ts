import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAjg4B4zi4K6r-Vq1bx_FNJpb5VyeQxeQQ",
  authDomain: "notalert-2a44a.firebaseapp.com",
  projectId: "notalert-2a44a",
  storageBucket: "notalert-2a44a.firebasestorage.app",
  messagingSenderId: "842401086841",
  appId: "1:842401086841:web:4c7d4dbc34c5a5a67283a8"
};

let app: any;
let db: any;

export const getFirebaseApp = () => {
  if (!app) {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  }
  return app;
};

export const getDb = () => {
  if (!db) {
    const firebaseApp = getFirebaseApp();
    db = getFirestore(firebaseApp);
  }
  return db;
};
