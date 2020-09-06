
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCNWQfHxSR92IH4yr_8hidQHtYEk1rgIkQ",
  authDomain: "instagram-clone-f5745.firebaseapp.com",
  databaseURL: "https://instagram-clone-f5745.firebaseio.com",
  projectId: "instagram-clone-f5745",
  storageBucket: "instagram-clone-f5745.appspot.com",
  messagingSenderId: "1058538951051",
  appId: "1:1058538951051:web:98555eb37a8459f5aa5f8e",
  measurementId: "G-5ZCKZZTM2H"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const storage = firebase.storage()
const auth = firebase.auth()

export {db, auth, storage}	