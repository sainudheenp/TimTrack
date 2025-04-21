import { auth } from "./firebase.jsx";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
} from "firebase/auth";

export const registerWithProvider = async ({ Pprovider }) => {
    console.log("AM HERE")
    const provider = new Pprovider()
    const result = await signInWithPopup(auth, provider);
    const token = await result.user.getIdToken();
    localStorage.setItem("token", token);
    console.log("Sign in User:", result);
    console.log("UID :", result.user.uid);
    return { user: result.user, token }
}
