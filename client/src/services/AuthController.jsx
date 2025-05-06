import { auth } from "./firebase.jsx";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
    browserPopupRedirectResolver
} from "firebase/auth";

// import { userStore } from "../store/userStore.js";

export const registerWithProvider = async ({ Pprovider }) => {
    const provider = new Pprovider()
    const result = await signInWithPopup(auth, provider, browserPopupRedirectResolver);
    const token = await result.user.getIdToken();
    localStorage.setItem("token", token);
    
    console.log("Sign in User:", result);
    console.log("UID :", result.user.uid);


    return { user: result.user, token }
}

export const registerWithEmailAndPassword = async ({ email, password }) => {

}