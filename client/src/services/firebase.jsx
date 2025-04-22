import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCymuJ3KFSyJLFJaZDYHqXNdh6MRrWQmko",
    authDomain: "timtrack-6db41.firebaseapp.com",
    projectId: "timtrack-6db41",
    storageBucket: "timtrack-6db41.firebasestorage.app",
    messagingSenderId: "967913718929",
    appId: "1:967913718929:web:0bd47e7d69da2f039e2b30",
    measurementId: "G-4LHCDP8PF7"
  };



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);