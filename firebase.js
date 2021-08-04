import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
import "@firebase/storage";

// Your web app's Firebase configuration, which you copy-pasted from Step 6
var firebaseConfig = {
  apiKey: "AIzaSyB2eH-7qrVOi8oKMct0_jGjXUxAqrCD4OI",
  authDomain: "lots-parks-sea.firebaseapp.com",
  projectId: "lots-parks-sea",
  storageBucket: "lots-parks-sea.appspot.com",
  messagingSenderId: "897815686802",
  appId: "1:897815686802:web:92a4c5f830ddea5095804b",
  measurementId: "G-V0PGPGN0JJ",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore();

export default firestore;
