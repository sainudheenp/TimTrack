import React, { useEffect } from 'react'
import { useStateContext } from '../context/ContextProvider'
// import { userStore } from .store/userStore'
import { userStore } from '../store/userStore'

const NavButton = ({ title, customFunc, icon, color, dotcolor }) => {
  return <button type='button' onClick={customFunc} style={{ color }} className='relative text-xl rounded-full p-3 hover:bg-light-gray' >
    {dotcolor && (<span style={{ background: dotcolor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2 ' />)}
    {icon}
  </button>
}



const Navbar = () => {
  const user = userStore((state) => state.user);
  console.log("NAV USER :",user?.name)
  const { activeMenu, setActiveMenu, isClicked, handleClick, screenSize, setScreenSize } = useStateContext()
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative' >
      <div className='flex items-center justify-center'>
        <NavButton title={"h"} icon={<i className="fas fa-bars"></i>} color={'red'} dotcolor={'none'} customFunc={() => setActiveMenu((prev) => !prev)} />
        <div>Dashboard</div>
      </div>


      <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'>

        <NavButton title={"h"} icon={<i className="fas fa-bell"></i>} customFunc={() => handleClick("notification")} color={'black'} dotcolor={'blue'} />
        <div id='userCard' className='flex items-center gap-2 ' onClick={() => handleClick("userProfile")} >
          <img src={user?.picture|| "https://cdn-icons-png.flaticon.com/512/4140/4140037.png"} alt='avatar' className='rounded-full w-8 h-8' />
          <p>
            {/* <span className="text-gray-400 text-14">Hi,</span> */}

            <span className="text-gray-400 font-bold ml-1 text-14">{user?.name || "Guest"}</span>
          </p>
          {/* <i className="fas fa-dropdown"></i> */}
          <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
      {isClicked.notification && (<div className='w-4'>
        Notifications
      </div>)}
      {isClicked.userProfile && (<div>
        User      </div>)}
    </div>
  )
}

export default Navbar