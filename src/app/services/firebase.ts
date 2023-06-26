import 'firebase/compat/storage';
import firebase from 'firebase/compat/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCzS3SP0r1YzEJYaly3AMcY-1bSDKtsKmA",
//   authDomain: "final-project-desenv-web.firebaseapp.com",
//   projectId: "final-project-desenv-web",
//   storageBucket: "final-project-desenv-web.appspot.com",
//   messagingSenderId: "476820425064",
//   appId: "1:476820425064:web:1a6d3a2f85535ab99feedd"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCpGeA7WvTWMKPn5cD08vuo69B4xCZtzcY",
  authDomain: "desenv-daniel.firebaseapp.com",
  projectId: "desenv-daniel",
  storageBucket: "desenv-daniel.appspot.com",
  messagingSenderId: "346161417971",
  appId: "1:346161417971:web:6f61d29d4b805a8d957186"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, storage, auth };