import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCTorD7P-WzfyF_CWU3_yBz6e6PmcLSxgo",
    authDomain: "linkedin-clone-60178.firebaseapp.com",
    projectId: "linkedin-clone-60178",
    storageBucket: "linkedin-clone-60178.appspot.com",
    messagingSenderId: "1016834928356",
    appId: "1:1016834928356:web:4f6707838648abb1f386f1",
    measurementId: "G-5YXJZ6Y6Q3"
};

const firebaseApp  = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };