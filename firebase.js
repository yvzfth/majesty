// Import the functions you need from the SDKs you need
// import firebase, {
//   initializeApp,
// } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDIUdCRPlB0dUknwN911tGNv4TpA3KigcA',
  authDomain: 'webdevproje.firebaseapp.com',
  projectId: 'webdevproje',
  storageBucket: 'webdevproje.appspot.com',
  messagingSenderId: '63246056353',
  appId: '1:63246056353:web:d77ee381eb25247b61a9e0',
  measurementId: 'G-6ZH13ETX3H',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = firebase.getAnalytics(app);
var db = firebase.firestore();
