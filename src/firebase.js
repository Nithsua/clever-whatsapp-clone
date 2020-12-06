import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrhBHnKVW0FRB9h6soc1GNUuSU5RtsXBQ",
  authDomain: "whatsapp-clone-43f24.firebaseapp.com",
  projectId: "whatsapp-clone-43f24",
  storageBucket: "whatsapp-clone-43f24.appspot.com",
  messagingSenderId: "315433509477",
  appId: "1:315433509477:web:4fc39549e0c16f65489c8c",
  measurementId: "G-V1ZB7329GK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
