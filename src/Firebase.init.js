// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBRE2xvvw4lmvqOxhysFRM-7fAMUfRL8qQ',
  authDomain: 'task-focus-f8dab.firebaseapp.com',
  projectId: 'task-focus-f8dab',
  storageBucket: 'task-focus-f8dab.appspot.com',
  messagingSenderId: '388855073425',
  appId: '1:388855073425:web:459775b86d36c72ffd8d30',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;