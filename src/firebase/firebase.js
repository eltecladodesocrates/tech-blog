import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDzX3JT558EQDsW6P-NpmbHQaw--DMVQAg",
  authDomain: "ts-blog-d6625.firebaseapp.com",
  projectId: "ts-blog-d6625",
  storageBucket: "ts-blog-d6625.appspot.com",
  messagingSenderId: "589912162696",
  appId: "1:589912162696:web:da360afcbed4132964fa3d"
}

const app = initializeApp(firebaseConfig)

// DB
export const db = getDatabase(app)

// Auth
export const auth = getAuth()
export const signupUser = createUserWithEmailAndPassword
export const loginUser = signInWithEmailAndPassword
export const authStateChange = onAuthStateChanged
////////// From Habit Tracker

// import { initializeApp } from 'firebase/app'
// import { getDatabase } from 'firebase/database'
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'


// const firebaseConfig = {
//   apiKey: "AIzaSyA5vgLsdtPchb9WsrMrtNzemdsEN28ps9Q",
//   authDomain: "habit-tracker-7e250.firebaseapp.com",
//   databaseURL: "https://habit-tracker-7e250-default-rtdb.firebaseio.com",
//   projectId: "habit-tracker-7e250",
//   storageBucket: "habit-tracker-7e250.appspot.com",
//   messagingSenderId: "435344053167",
//   appId: "1:435344053167:web:7608e0b913980c621d955a"
// }

// const app = initializeApp(firebaseConfig)
// // FB Real Time Database
// export const db = getDatabase(app)

// // FB Authentication
// export const auth = getAuth()
// export const signupUser = createUserWithEmailAndPassword
// export const loginUser = signInWithEmailAndPassword
// export const authStateChange = onAuthStateChanged
