import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDsp--RhVYFzkYeSsIIwDdob5mhlS6h60s",
  authDomain: "epic-app-code.firebaseapp.com",
  projectId: "epic-app-code",
  storageBucket: "epic-app-code.appspot.com",
  messagingSenderId: "502881694678",
  appId: "1:502881694678:web:21859a96d8b2172e25ea77",
  measurementId: "G-F55CENZ54C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);