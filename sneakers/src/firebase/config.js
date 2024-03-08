import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAIhxn8PbkJVOfNIM8A4CkATSjif57yIko",
    authDomain: "sneakers-b724c.firebaseapp.com",
    projectId: "sneakers-b724c",
    storageBucket: "sneakers-b724c.appspot.com",
    messagingSenderId: "800250745562",
    appId: "1:800250745562:web:0fd20b70cfc9e730634be3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);