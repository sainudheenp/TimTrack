import React from 'react'

const InputField = ({ type, placeholder, icon }) => {
    return (
        <div className="h-[44px] mb-5 relative">
            <input className="peer w-full border-1 rounded-md p-3 px-10 border-gray-400 outline-0 focus:border-gray-700 focus:border-1 focus:shadow-stone-700 "
                type={type}
                // value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                required
            />
            <span className="absolute top-[70%] left-[.9rem] pointer-events-none translate-y-[-70%]  text-gray-600 text-lg peer-focus:text-gray-800">
                <i className={icon} aria-hidden="true"></i>
            </span>
        </div>)
}

export default InputField