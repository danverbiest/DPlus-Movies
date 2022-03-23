import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDudhYcbvKKFBFubP9TTT7hmSHLmLjtM5Y",
    authDomain: "disney-plus-ea184.firebaseapp.com",
    projectId: "disney-plus-ea184",
    storageBucket: "disney-plus-ea184.appspot.com",
    messagingSenderId: "332165067914",
    appId: "1:332165067914:web:3a95d280258b0d38306973"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
