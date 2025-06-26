import React, { useState } from "react";
import { auth } from "../../services/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import InputField from "../../components/InputField";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const newUsr = await createUserWithEmailAndPassword(auth, email, password)
      const token = await newUsr.user.getIdToken()
      localStorage.setItem('token', token)
      toast.success("Registered successfully!");
      // navigate('/')
      navigate("/dashboard");

    } catch (error) {
      console.log(error)
      if (error.code == "auth/email-already-in-use") {
        toast.error("Email is already in use.");
      } else if (error.code == "auth/missing-email") {
        toast.error("Email is required.")
      } else {
        toast.error("Registration failed. Please try again.");
      }
    }
  }

  console.log(email, password)

  return (
    <div className="flex justify-center items-center bg-amber-300 min-h-screen px-4 md:px-0 font-sans h-screen w-screen">
      <div className="flex flex-col justify-center items-center bg-white w-full max-w-md p-6 sm:p-10 rounded-xl shadow-xl">
        <h2 className="font-bold text-2xl mb-6">Sign Up with</h2>

        <div className="flex flex-col sm:flex-row gap-3 pb-4 w-full">
          <SocialLogin
            text="Google"
            img="https://cdn-icons-png.flaticon.com/512/720/720255.png"
            provider={GoogleAuthProvider}
          />
          <SocialLogin
            text="GitHub"
            img="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            provider={GithubAuthProvider}
          />
        </div>

        <p className="relative my-1 text-center w-full before:content-[''] before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-full before:bg-[#bfb3f2]">
          <span className="relative z-10 bg-white px-4 text-xl text-gray-600">or</span>
        </p>

        <form className="mt-4 w-full">
          <InputField type="email" placeholder="Email address" icon="fa fa-envelope"
            onchange={(e) => setEmail(e.target.value)} />
          <InputField type="password" placeholder="Password" icon="fa fa-lock"
            onchange={(e) => setPassword(e.target.value)} />



          <button
            type="button"
            onClick={handleSignUp}
            className="w-full mt-5 h-[44px] cursor-pointer rounded-lg transition-colors duration-100 bg-amber-300 text-lg hover:bg-amber-400 text-black font-medium"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center m-4 text-sm">
          Do you have an account?{" "}
          <a className="text-amber-500 font-semibold hover:underline cursor-pointer" href="/login">
            Login now
          </a>
        </p>
      </div>
    </div>

  );
};

export default Register;
