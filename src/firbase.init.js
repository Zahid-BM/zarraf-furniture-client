// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVjKgB14ie-pNivLQGnq450aCgd1cPjTM",
    authDomain: "zarraf-furniture.firebaseapp.com",
    projectId: "zarraf-furniture",
    storageBucket: "zarraf-furniture.appspot.com",
    messagingSenderId: "862762837033",
    appId: "1:862762837033:web:7fb19e0132101d8d9de838"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)
export default auth;