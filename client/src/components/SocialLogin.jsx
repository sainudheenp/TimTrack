import React from 'react'

const SocialLogin = () => {
  return (
    <div className="flex gap-3 pb-4 w-full justify-evenly font-normal">
    <button className="flex items-center gap-2 cursor-pointer border-2 border-gray-300 rounded-lg p-2 px-4 hover:border-gray-500 hover:bg-gray-200 transition-colors duration-120 w-full" >
      <img className="w-8" src="https://cdn-icons-png.flaticon.com/512/720/720255.png" alt="Google" />
      Google
    </button>
    <button className="flex items-center gap-2 cursor-pointer border-2 border-gray-300 rounded-lg p-2 px-4 hover:border-gray-500 hover:bg-gray-200 transition-colors duration-120 w-full">
      <img className="w-8" src="https://cdn-icons-png.flaticon.com/512/731/731985.png" alt="" />
      Apple
    </button>
  </div>
)
}

export default SocialLogin