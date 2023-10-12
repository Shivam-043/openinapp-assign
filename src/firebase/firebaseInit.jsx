import {GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail,signOut} from "firebase/auth";
import {getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const firebaseConfig = {
    apiKey: "AIzaSyDn7YPAEf90joyUjmyvfzbwhmOPrPVMOqc",
    authDomain: "openinapp-admin.firebaseapp.com",
    projectId: "openinapp-admin",
    storageBucket: "openinapp-admin.appspot.com",
    messagingSenderId: "1020832439449",
    appId: "1:1020832439449:web:9206f64efddfc0bd1c6c08",
    measurementId: "G-VN9CMRNHFN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
// Google Authnetication

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        photoUrl: user.photoURL
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


// Email Id Signin

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


// SignUp User 

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name : name,
        authProvider: "local",
        email: email,
        photoUrl : "",
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


// Sending Password Reset Link

const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


//Logout Function

const logout = () => {
    signOut(auth);
  };


  export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };

