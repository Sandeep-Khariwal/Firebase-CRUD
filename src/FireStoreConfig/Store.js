import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB0G17Wre96xlP2HpRQOlxLxf5-cW1vA_M",
    authDomain: "crud-app-99fe3.firebaseapp.com",
    projectId: "crud-app-99fe3",
    storageBucket: "crud-app-99fe3.appspot.com",
    messagingSenderId: "123355718788",
    appId: "1:123355718788:web:1ef1f7045c4b38e4238ed1"
  };

  // initialize firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getFirestore (app);
