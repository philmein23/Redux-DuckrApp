import firebase from 'firebase';


  // Initialize Firebase
const config = {
    apiKey: "AIzaSyAF-FN719pEKo91qQxmOGQS5KuTn74xRcA",
    authDomain: "duckr-5ef13.firebaseapp.com",
    databaseURL: "https://duckr-5ef13.firebaseio.com",
    storageBucket: "duckr-5ef13.appspot.com",
    messagingSenderId: "637073844041"
  };


  firebase.initializeApp(config)

  export const ref = firebase.database().ref()
  export const firebaseAuth = firebase.auth

export const usersDucksExpirationLength = 100000
export const userExpirationLength = 100000
export const repliesExpirationLength = 300000