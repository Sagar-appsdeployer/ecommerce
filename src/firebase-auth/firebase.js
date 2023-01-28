import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyB9imt2_-HjT77yXHRXWBxZrgKoLe-oxWQ",
    authDomain: "primeshop-bf2c8.firebaseapp.com",
    projectId: "primeshop-bf2c8",
    storageBucket: "primeshop-bf2c8.appspot.com",
    messagingSenderId: "1069424525851",
    appId: "1:1069424525851:web:d67de7da8143fd6d06eebe"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();


export { app, auth };