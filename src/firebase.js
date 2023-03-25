import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBfvHor8MYkfLIt7-IvUHh4_lrqetxd_VQ",
  authDomain: "clone-676d0.firebaseapp.com",
  projectId: "clone-676d0",
  storageBucket: "clone-676d0.appspot.com",
  messagingSenderId: "1065220012386",
  appId: "1:1065220012386:web:18caf4c1f5343fc9ac143b",
  measurementId: "G-37NZBR7FXT"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };