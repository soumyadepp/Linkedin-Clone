import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDxv9RjLoWjHvIzm7sJ2WAXu-3a4LKDht4",
    authDomain: "linkedin-clone-ec975.firebaseapp.com",
    projectId: "linkedin-clone-ec975",
    storageBucket: "linkedin-clone-ec975.appspot.com",
    messagingSenderId: "352836912180",
    appId: "1:352836912180:web:7af23c55658d8483f9b661"
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);
const db = fireBaseApp.firestore();
const auth = firebase.auth();

export { db, auth };