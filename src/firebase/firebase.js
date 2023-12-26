// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBEkG4j2UVBAMmjH8PwGq1X_B5laA0Pcmg',
  authDomain: 'igclone-bcd96.firebaseapp.com',
  projectId: 'igclone-bcd96',
  storageBucket: 'igclone-bcd96.appspot.com',
  messagingSenderId: '1052957736483',
  appId: '1:1052957736483:web:103be34bdf02337ea3fb96',
  measurementId: 'G-MZ5M27V4XY'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, auth, firestore, storage }
