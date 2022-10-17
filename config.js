import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDfxzgN-_dMbuzsSfWzMR5nBTQa9hokJM8",
    authDomain: "projeto-67-ed3ed.firebaseapp.com",
    projectId: "projeto-67-ed3ed",
    storageBucket: "projeto-67-ed3ed.appspot.com",
    messagingSenderId: "460803791920",
    appId: "1:460803791920:web:b3333856441f09d4c6e1f5"
  };
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();