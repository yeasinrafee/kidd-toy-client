// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzurLSeT9ZdXzVjOHPbqPEFmo0C-NJHPs",
  authDomain: "kidd-toy-client.firebaseapp.com",
  projectId: "kidd-toy-client",
  storageBucket: "kidd-toy-client.appspot.com",
  messagingSenderId: "1012522189603",
  appId: "1:1012522189603:web:32f23f756cc0e873730296",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
