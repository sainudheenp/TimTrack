import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import InputField from "../../components/InputField";

import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";




const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(
        auth,
        email,
        password
        // "john@gmail.com",
        // "john@123"
      );
      const token = await userCred.user.getIdToken();
      localStorage.setItem("token", token);
      console.log("Sign in User:", userCred);
      console.log("UID :", userCred.user.uid);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="flex  justify-center items-center bg-amber-300 h-screen font-sans ">


      <div className="flex flex-col  justify-center items-center bg-white p-10 pt-6 pb-6 rounded-lg shadow-lg max-w-96">
        <h2 className="font-bold text-2xl mb-6">Log in with </h2>
        <div className="flex gap-3 pb-4 w-full justify-evenly ">
          <SocialLogin text="Google" img="https://cdn-icons-png.flaticon.com/512/720/720255.png" provider={GoogleAuthProvider} />


          <SocialLogin
            text="GitHub"
            img="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            provider={GithubAuthProvider}
          />
        </div>

        <p className="relative my-1 text-center before:content-[''] before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-full before:bg-[#bfb3f2] ">
          <span className="relative z-10 bg-white px-4 text-xl text-gray-600 ">or</span>
        </p>

        <form action="#" className="mt-4">

          <InputField type="email" placeholder="Email address" icon="fa fa-envelope" />

          <InputField type="password" placeholder="Password" icon="fa fa-lock" />

          <a href="#" className=" block  mt-[-4px] ms-1 hover:underline text-amber-500 cursor-pointer ">Forgot Password?</a>
          <button className="w-full mt-5 h-[44px] cursor-pointer rounded-lg transition-colors duration-100 bg-amber-300 text-lg hover:bg-amber-400 text-black font-medium " onClick={handleLogin}>Log In</button>
        </form>
        <p className="text-center m-4"> Don&apos;t have an account? <a className="text-amber-500 font-semibold hover:underline cursor-pointre" href="#">SignUp now</a></p>

      </div>


    </div>
  );
};

export default Login;
