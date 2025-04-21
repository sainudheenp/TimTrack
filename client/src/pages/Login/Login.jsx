import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
        <div className="flex gap-3 pb-4 w-full justify-evenly font-normal">
          <button className="flex items-center gap-2 cursor-pointer border-2 border-gray-300 rounded-lg p-2 px-4 hover:border-gray-500 hover:bg-gray-200 transition-colors duration-120 " >
            <img className="w-8" src="https://cdn-icons-png.flaticon.com/512/720/720255.png" alt="Google" />
            Google
          </button>
          <button className="flex items-center gap-2 cursor-pointer border-2 border-gray-300 rounded-lg p-2 px-4 hover:border-gray-500 hover:bg-gray-200 transition-colors duration-120 ">
            <img className="w-8" src="https://cdn-icons-png.flaticon.com/512/731/731985.png" alt="" />
            Apple
          </button>
        </div>


        {/* <p className="my-1 text-center relative  after:absolute  after:content-['']   after:left-0 after:top-1/2 after:w-full after:h-[1px] after:bg-black">
          <span className="relative z-10 bg-white px-2 text-amber-700">or</span>
        </p> */}

        <p className="relative my-1 text-center before:content-[''] before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-full before:bg-[#bfb3f2] ">
          <span className="relative z-10 bg-white px-4 text-xl text-gray-600 ">or</span>
        </p>

        <form action="#" className="mt-4">
          <div className="h-[44px] mb-5 relative">
            <input className="peer w-full border-1 rounded-md p-3 px-10 border-gray-400 outline-0 focus:border-gray-700 focus:border-1 focus:shadow-stone-700 "
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <span className="absolute top-[70%] left-[.9rem] pointer-events-none translate-y-[-70%]  text-gray-600 text-lg peer-focus:text-gray-800">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>

          <div className="h-[44px] mb-5 relative">

            <input className="peer w-full border-1 rounded-md p-3 px-10 border-gray-400 outline-0  focus:border-gray-700 focus:border-1 focus:shadow-stone-700  "
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <span className="absolute top-[70%] left-[.9rem] pointer-events-none translate-y-[-70%] text-gray-600 text-lg peer-focus:text-gray-800 ">
              <i className="fa fa-lock"></i>
            </span>
          </div>
          <a href="#" className="forgot">Forgot Password?</a>
          <button className="w-full mt-3 h-[44px] border-2 cursor-pointer" onClick={handleLogin}>Log In</button>
        </form>
        <p>Don&apos;t have an account?<a href="#">SignUp now</a></p>

      </div>


    </div>
  );
};

export default Login;
