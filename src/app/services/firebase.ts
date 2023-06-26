import 'firebase/compat/storage';
import firebase from 'firebase/compat/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzS3SP0r1YzEJYaly3AMcY-1bSDKtsKmA",
  authDomain: "final-project-desenv-web.firebaseapp.com",
  projectId: "final-project-desenv-web",
  storageBucket: "final-project-desenv-web.appspot.com",
  messagingSenderId: "476820425064",
  appId: "1:476820425064:web:1a6d3a2f85535ab99feedd"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, db, storage };