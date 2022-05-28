import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { seedDatabase } from '../seed'

//config

const firebaseConfig = {
    apiKey: "AIzaSyAI99hcMpVmrsOxbF8DJ5B9du1ZWIZ6_uQ",
    authDomain: "netfelix-6c2c4.firebaseapp.com",
    projectId: "netfelix-6c2c4",
    storageBucket: "netfelix-6c2c4.appspot.com",
    messagingSenderId: "434196502071",
    appId: "1:434196502071:web:3a6e217a267604159bd1b2",
    measurementId: "G-72QSC9LVSK"
  };

const firebase = Firebase.initializeApp(firebaseConfig)

seedDatabase(firebase)

export { firebase }
