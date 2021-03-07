import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDAOsl2_7oKRjnoP0SjVg0x-MX3tepr1CU",
    authDomain: "notiablog.firebaseapp.com",
    projectId: "notiablog",
    storageBucket: "notiablog.appspot.com",
    messagingSenderId: "604427111839",
    appId: "1:604427111839:web:a61b6ab74d9840a252c1aa",
    measurementId: "G-M4ELYSRMDH"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  const fire = firebase;
export default fire;