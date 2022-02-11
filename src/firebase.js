import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyAQeJxMuPemwMkE1pTGnrJ2Pa1pIQk6mW8",
  authDomain: "react-contact-38b7a.firebaseapp.com",
  projectId: "react-contact-38b7a",
  storageBucket: "react-contact-38b7a.appspot.com",
  messagingSenderId: "629813897159",
  appId: "1:629813897159:web:0aa6e8f5c3907d43dc1be2",
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();