import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyCiA8nSdEZ1bZ3kX8K4CJZFjEcJakqIedQ",
    authDomain: "chatapp-a2931.firebaseapp.com",
    databaseURL: "https://chatapp-a2931.firebaseio.com",
    projectId: "chatapp-a2931",
    storageBucket: "chatapp-a2931.appspot.com",
    messagingSenderId: "493108958382",
    appId: "1:493108958382:web:8242c8d6e3c833c66f893f",
    measurementId: "G-K64CGT8T8J"
  };
  // Initialize Firebase
  var Firebase = firebase.initializeApp(firebaseConfig);
  export default Firebase;