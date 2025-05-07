import React from 'react'
import { registerWithProvider } from '../services/AuthController'
//test with authcontroller
import { useNavigate } from 'react-router-dom'
import { userStore } from '../store/userStore'
import Cookies from 'js-cookie';

const SocialLogin = ({ text, img, provider }) => {
  const navigate = useNavigate();
  const handleProviderLogin = async (provider) => {
    try {
      const { user, token } = await registerWithProvider({ Pprovider: provider });
      if (user && token) {
        console.log("User signed in successfully:", user);

        Cookies.set('token', token, {
          expires: 1,
          secure: false, 
          sameSite: 'none', 
        });
        localStorage.setItem("token", token);
        localStorage.setItem('user',user)

        navigate("/");

        // setUser(user);
        // setToken(token);
        // userStore.getState().setUser(user);
          userStore.getState().setToken(token);
      }
    } catch (error) {
      console.log("Error in SocialLogin", error);

    }

  }

  return (
    <div onClick={() => handleProviderLogin(provider)} className="font-normal w-full">
      <button className="flex items-center gap-2 cursor-pointer border-2 border-gray-300 rounded-lg p-2 px-4 hover:border-gray-500 hover:bg-gray-200 transition-colors duration-120 w-full justify-center " >
        <img className="w-8" src={img} alt="Google" />
        {text}
      </button>
    </div>
  )
}

export default SocialLogin