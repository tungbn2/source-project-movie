import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBvnzAsUObSEJPnpiDF-SFAW_-E9c9xGME",
    authDomain: "movie-project-2870c.firebaseapp.com",
    projectId: "movie-project-2870c",
    storageBucket: "movie-project-2870c.appspot.com",
    messagingSenderId: "201241030177",
    appId: "1:201241030177:web:57dbabcd7e2c14c3247d60"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();