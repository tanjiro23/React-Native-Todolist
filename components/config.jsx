// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhbK5HSbzAQxegJ4Q7ANh-Wl8w_vo09Mg",
    authDomain: "todo-list-9e098.firebaseapp.com",
    projectId: "todo-list-9e098",
    storageBucket: "todo-list-9e098.appspot.com",
    messagingSenderId: "986676307269",
    appId: "1:986676307269:web:e423039c7a17f8207fca2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider(app);