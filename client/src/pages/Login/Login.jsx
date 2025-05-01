import React, { useState } from "react";
import { auth } from "../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import InputField from "../../components/InputField";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import Cookies from 'js-cookie';

import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email)
  const handleLogin = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCred.user.getIdToken();
      toast.success("Login Successful!");

      localStorage.setItem("token", token);

      Cookies.set('token', token, {
        expires: 1,
      });

      console.log("Sign in User:", userCred);
      console.log("UID :", userCred.user.uid);
      navigate("/");
    } catch (error) {
      console.log(error);
      let message = "Something went wrong. Please try again.";
      switch (error.code) {
        case "auth/user-not-found":
          message = "No user found with this email.";
          break;
        case "auth/wrong-password":
          message = "Incorrect password.";
          break;
        case "auth/invalid-email":
          message = "Invalid email format.";
          break;
        case "auth/too-many-requests":
          message = "Too many attempts. Please try again later.";
          break;
        default:
          message = error.message;

      }
      toast.error(message)
    }
  };

  return (
    <div className="flex justify-center items-center bg-amber-300 min-h-screen px-4 md:px-0 font-sans h-screen w-screen">
      <div className="flex flex-col justify-center items-center bg-white w-full max-w-md p-6 sm:p-10 rounded-xl shadow-xl">
        <h2 className="font-bold text-2xl mb-6">Log in with</h2>

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
          <InputField type="email" placeholder="Email address" icon="fa fa-envelope" onchange={(e) => setEmail(e.target.value)} />
          <InputField type="password" placeholder="Password" icon="fa fa-lock" onchange={(e) => setPassword(e.target.value)} />

          <a
            href="#"
            className="block text-sm mt-[-4px] ms-1 hover:underline text-amber-500 cursor-pointer"
          >
            Forgot Password?
          </a>

          <button
            type="button"
            onClick={handleLogin}
            className="w-full mt-5 h-[44px] cursor-pointer rounded-lg transition-colors duration-100 bg-amber-300 text-lg hover:bg-amber-400 text-black font-medium"
          >
            Log In
          </button>
        </form>

        <p className="text-center m-4 text-sm">
          Don&apos;t have an account?{" "}
          <a className="text-amber-500 font-semibold hover:underline cursor-pointer" href="/register">
            Sign Up now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
