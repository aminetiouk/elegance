// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Import other Firebase services you might need

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB4Sb2j3_l0ZxT4oIngBiF7VQELOVBGgPY',
  authDomain: 'elegancehub-cd95a.firebaseapp.com',
  projectId: 'elegancehub-cd95a',
  storageBucket: 'elegancehub-cd95a.appspot.com',
  messagingSenderId: '790027733042',
  appId: '1:790027733042:web:9b303f0b64ecabcf28542b',
  measurementId: 'G-ZMQMNH8X4X',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app ,auth };
