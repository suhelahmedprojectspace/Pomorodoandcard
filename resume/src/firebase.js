// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAK9Fkm2H5ScXyds3Flg5ssDVhTWL-ZkTg",
    authDomain: "auth-4c5fb.firebaseapp.com",
    projectId: "auth-4c5fb",
    storageBucket: "auth-4c5fb.appspot.com",
    messagingSenderId: "182417344233",
    appId: "1:182417344233:web:779a69be9c6d18f77f5278"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export const singInWithGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
        console.log(res)
        const verify = res.user.email
        localStorage.setItem('user', verify)

    }).catch(error => console.log(error))
}