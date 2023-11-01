import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDb8n_7B9_kL1wF3fQwZK2zFd4ZFW3LvlQ",
  authDomain: "nwitter-reloaded-b29cc.firebaseapp.com",
  projectId: "nwitter-reloaded-b29cc",
  storageBucket: "nwitter-reloaded-b29cc.appspot.com",
  messagingSenderId: "646143845765",
  appId: "1:646143845765:web:0b59dbbb32dc53321e90ec",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
