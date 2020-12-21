import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB__jVz8KWP-iK6Fv8m3zOeW6ogRpElIHs",
  authDomain: "challenge-525ac.firebaseapp.com",
  projectId: "challenge-525ac",
  storageBucket: "challenge-525ac.appspot.com",
  messagingSenderId: "1029790599229",
  appId: "1:1029790599229:web:be1642b5372cdcc09c8254",
  measurementId: "G-S9E41CX0R8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
