import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9t8cl8vfc_SaFQlYWPVCufNeCAJZ70js",
  authDomain: "netflix-clone-4ffd8.firebaseapp.com",
  projectId: "netflix-clone-4ffd8",
  storageBucket: "netflix-clone-4ffd8.appspot.com",
  messagingSenderId: "473328097633",
  appId: "1:473328097633:web:6a2e185aa3546001fccd20",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export default db;
