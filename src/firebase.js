// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDf-COyncwRHcCei-AxFLjWOghrdWCSpLU',
  authDomain: 'react-portfolio-dashboard-2610.firebaseapp.com',
  projectId: 'react-portfolio-dashboard-2610',
  storageBucket: 'react-portfolio-dashboard-2610.appspot.com',
  messagingSenderId: '613952358264',
  appId: '1:613952358264:web:b08a112d37361cb043ea8d',
  measurementId: 'G-Y4YB2YS268',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)
export const signInWithGoogle = () => signInWithPopup(auth, provider)
