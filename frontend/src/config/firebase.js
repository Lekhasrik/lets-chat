// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

// export default auth;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDnB1r2Wuva_GNVnlCfyqSIIgXHjpU9M3A",
//   authDomain: "lets-chat-a43b0.firebaseapp.com",
//   projectId: "lets-chat-a43b0",
//   storageBucket: "lets-chat-a43b0.firebasestorage.app",
//   messagingSenderId: "427785885286",
//   appId: "1:427785885286:web:81be2bf07b5d901219bfa7",
//   measurementId: "G-WG6M2GJRZ9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export default auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnB1r2Wuva_GNVnlCfyqSIIgXHjpU9M3A",
  authDomain: "lets-chat-a43b0.firebaseapp.com",
  projectId: "lets-chat-a43b0",
  storageBucket: "lets-chat-a43b0.firebasestorage.app",
  messagingSenderId: "427785885286",
  appId: "1:427785885286:web:ae33040551a6e2e419bfa7"
  // measurementId: "G-TPJ37BGF63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;