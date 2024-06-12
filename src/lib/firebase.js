import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-b4232.firebaseapp.com",
  projectId: "reactchat-b4232",
  storageBucket: "reactchat-b4232.appspot.com",
  messagingSenderId: "317705070748",
  appId: "1:317705070748:web:a2db7fb20961ef5908e559"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()