
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCVciBTxis407SP1ZOSjmiQyuJlc5g9dnA",
  authDomain: "instgram-clone-fc4ce.firebaseapp.com",
  projectId: "instgram-clone-fc4ce",
  storageBucket: "instgram-clone-fc4ce.appspot.com",
  messagingSenderId: "712492518100",
  appId: "1:712492518100:web:85a6b21f54d24795b3c941"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app)

export { auth, firestore, storage }