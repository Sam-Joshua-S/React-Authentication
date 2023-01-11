import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAUztTLMGqbXmCl0svuGyqzQxSIRv56YwA",
  authDomain: "auth-demo-37b65.firebaseapp.com",
  databaseURL: "https://auth-demo-37b65-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "auth-demo-37b65",
  storageBucket: "auth-demo-37b65.appspot.com",
  messagingSenderId: "266863154457",
  appId: "1:266863154457:web:45ba06fbbf93118b8a6188"
}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}
