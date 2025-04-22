// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCJFHDbx7UvAipdyqXSYdsjNbnd-REs6V8",
    authDomain: "ancient-gallery.firebaseapp.com",
    projectId: "ancient-gallery",
    storageBucket: "ancient-gallery.appspot.com",
    messagingSenderId: "737423534460",
    appId: "1:737423534460:web:fb3fe5785c46aed9319cf9",
    measurementId: "G-V1QV7XLN3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
