import firebase from "firebase";

import "firebase/firebase-firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZRs96mbfzSOIewWrdSET8w-b47C4HEHc",
    authDomain: "gig-wallet.firebaseapp.com",
    databaseURL: "https://gig-wallet-default-rtdb.firebaseio.com",
    projectId: "gig-wallet",
    storageBucket: "gig-wallet.appspot.com",
    messagingSenderId: "782230832096",
    appId: "1:782230832096:web:0e2e71e382e36473dea185",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
    firebase,
    db,
};
