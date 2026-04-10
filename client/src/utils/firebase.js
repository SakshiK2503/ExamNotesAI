
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotesai-e3375.firebaseapp.com",
  projectId: "examnotesai-e3375",
  storageBucket: "examnotesai-e3375.firebasestorage.app",
  messagingSenderId: "34759400600",
  appId: "1:34759400600:web:3e324c901ccc66935a44ed"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}