import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDpNNPfwQZTpg0TxJ1jg-ADnEx5ETM8xHA",
  authDomain: "book-store-4ecfa.firebaseapp.com",
  projectId: "book-store-4ecfa",
  storageBucket: "book-store-4ecfa.appspot.com",
  messagingSenderId: "843016730515",
  appId: "1:843016730515:web:968fc08b2baf5d0a36da66",

  databaseURL:
    "https://book-store-4ecfa-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
