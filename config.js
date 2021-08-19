import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyC3gQaZtmhe7Eyyscl-GU1e_lThUFssclw",
    authDomain: "p1-todo.firebaseapp.com",
    projectId: "p1-todo",
    storageBucket: "p1-todo.appspot.com",
    messagingSenderId: "950253998261",
    appId: "1:950253998261:web:a70690e4915b2d13bceefc"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  const db=firebase.firestore();
  export {db};