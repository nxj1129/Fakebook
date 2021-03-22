import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCIWMT_aNX9tALe7_rnxnEgEAsudOhHUXU",
  authDomain: "reactsocialmedia-cbeed.firebaseapp.com",
  projectId: "reactsocialmedia-cbeed",
  storageBucket: "reactsocialmedia-cbeed.appspot.com",
  messagingSenderId: "255157333940",
  appId: "1:255157333940:web:54a494b18d652bcd600ce1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// connected to firebase database
const db = firebaseApp.firestore();
const auth = firebase.auth();
// use google authentication
const provider = new firebase.auth.GoogleAuthProvider();

// explicit export
export { auth, provider };

export default db;
