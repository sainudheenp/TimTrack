import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'
import Todo from '../pages/Todo/Todo'
import SideNavLink from './SideNavLink'
const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize } = useStateContext()

    const handleSideBarClose = () => {
        if (activeMenu && screenSize <= 900) {
            setActiveMenu(false)
        }
    }

    const activeLink =
        "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray=900 font-bold text-md m-2";
    const normalLink =
        "flex items-center gap-5 pl-4 pt-3 pb-2.5  rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";


    return (
        <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto p-2 pb-10 '>
            {activeMenu && (
                <>
                    <div className='flex items-center gap-3 ml-3 mt-4 text-xl font-extrabold tracking-light dark:text-white text-slate-900 justify-between '>

                        <div className='flex items-center gap-2 '>
                            <svg className='h-[32px]'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="-5.32 -5.32 38.64 38.64"
                                fill="#ffff"
                                stroke="#000"
                                strokeWidth="0.784"
                            >
                                <g>
                                    <path d="M12.926,32c6.675,0,12.334-5.194,12.883-11.825c0.023-0.275-0.182-0.517-0.457-0.54c-0.254-0.019-0.516,0.182-0.539,0.457C24.306,26.208,19.084,31,12.926,31C6.35,31,1,25.662,1,19.1c0-4.816,2.879-9.129,7.334-10.988c0.255-0.106,0.375-0.399,0.27-0.654C8.496,7.203,8.201,7.083,7.949,7.189C3.12,9.204,0,13.879,0,19.1C0,26.213,5.799,32,12.926,32z" />
                                    <path d="M24.803,18.107c0.021,0.262,0.24,0.459,0.497,0.459c0.014,0,0.027,0,0.042-0.001c0.274-0.022,0.479-0.264,0.457-0.539c-0.393-4.815-3.419-8.967-7.896-10.837c-0.252-0.107-0.547,0.014-0.653,0.269s0.014,0.548,0.269,0.654C21.648,9.837,24.44,13.667,24.803,18.107z" />
                                    <path d="M8.938,1h8c0.275,0,0.5,0.224,0.5,0.5v2c0,0.276-0.225,0.5-0.5,0.5h-1c-0.827,0-1.5,0.673-1.5,1.5V9c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V5.5c0-0.276,0.225-0.5,0.5-0.5h1c0.827,0,1.5-0.673,1.5-1.5v-2c0-0.827-0.673-1.5-1.5-1.5h-8c-0.827,0-1.5,0.673-1.5,1.5v2c0,0.827,0.673,1.5,1.5,1.5h1c0.275,0,0.5,0.224,0.5,0.5V9c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V5.5c0-0.827-0.673-1.5-1.5-1.5h-1c-0.275,0-0.5-0.224-0.5-0.5v-2C8.438,1.224,8.662,1,8.938,1z" />
                                    <path d="M24.218,2.819c-0.195,0.195-0.195,0.512,0,0.707l1.11,1.108l-2.751,2.746c-0.195,0.195-0.195,0.512,0,0.707c0.098,0.098,0.226,0.147,0.354,0.147s0.256-0.049,0.354-0.146l2.753-2.747l1.111,1.108c0.098,0.097,0.226,0.146,0.354,0.146c0.128,0,0.256-0.049,0.354-0.147c0.195-0.195,0.195-0.512,0-0.707l-2.929-2.923C24.73,2.624,24.413,2.623,24.218,2.819z" />
                                    <path d="M13.938,20h6.5c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5h-6.5c-0.275,0-0.5-0.224-0.5-0.5V11c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5v7.5C12.438,19.327,13.11,20,13.938,20z" />
                                </g>
                            </svg>
                            TimTrack
                        </div>


                        <button className='cursor-pointer mr-5' onClick={() => setActiveMenu((prev) => !prev)}><i className="fas fa-times"></i></button>
                    </div>

                    <div className='mt-10'>
                        <SideNavLink name={"Dashboard"} icon={"fas fa-th-list"} path={'/'} />
                        <SideNavLink name={"Todo"} icon={"fas fa-tasks"} path={'/todo'} />
                        <SideNavLink name={"Test"} icon={"fas fa-th-list"} path={'/s'} />
                        <SideNavLink name={"Vsl"} icon={"fas fa-tasks"} path={'/a'} />

                    </div>
                </>
            )}
        </div>
    )
}

export default Sidebar