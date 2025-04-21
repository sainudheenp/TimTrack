import React from 'react'
import { registerWithProvider } from '../firebase/AuthController'
//test with authcontroller

const SocialLogin = ({ text, img, provider }) => {

  const handleProviderLogin = async (provider) => {
    console.log("provider", provider)
    // registerWithProvider(provider)
    registerWithProvider({ Pprovider: provider }) 

  }

  return (
    <div onClick={() => handleProviderLogin(provider)} className="font-normal w-full">
      <button className="flex items-center gap-2 cursor-pointer border-2 border-gray-300 rounded-lg p-2 px-4 hover:border-gray-500 hover:bg-gray-200 transition-colors duration-120 w-full" >
        <img className="w-8" src={img} alt="Google" />
        {text}
      </button>
    </div>
  )
}

export default SocialLogin