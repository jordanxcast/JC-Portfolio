import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "jordan-portfolio-b78a8.firebaseapp.com",
  databaseURL: "https://jordan-portfolio-b78a8.firebaseio.com",
  projectId: "jordan-portfolio-b78a8",
  storageBucket: "jordan-portfolio-b78a8.appspot.com",
  messagingSenderId: "753826441332",
  appId: "1:753826441332:web:bd9b2ba4bdc97263c2c921",
  measurementId: "G-Q92Z2KKBMG",
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;