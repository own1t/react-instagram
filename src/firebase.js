import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBAWBgqSGmNe0k_5TBPWHhr_FakliEcdYc",
  authDomain: "instagram-clone-cf94f.firebaseapp.com",
  databaseURL: "https://instagram-clone-cf94f.firebaseio.com",
  projectId: "instagram-clone-cf94f",
  storageBucket: "instagram-clone-cf94f.appspot.com",
  messagingSenderId: "592077016926",
  appId: "1:592077016926:web:8aa83f14a86e536f4809cf",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
