// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Import other Firebase services you might need

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZltj_9uZl4zI4JL3qjDddIJxG0jfBu8k",
    authDomain: "elegence-hub.firebaseapp.com",
    projectId: "elegence-hub",
    storageBucket: "elegence-hub.appspot.com",
    messagingSenderId: "909159395763",
    appId: "1:909159395763:web:6620d3678084a7c0741bc6",
    measurementId: "G-4QBV0ZXF03"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };