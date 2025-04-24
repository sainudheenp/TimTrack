import React from 'react'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { useStateContext } from '../context/ContextProvider'
import { Outlet } from "react-router-dom";


const MainLayout = () => {
    const { activeMenu } = useStateContext()
    return (
        <div className="flex relative dark:bg-main-dark-bg">

            {activeMenu ? <div className=" w-72 fixed dark:bg-secondery-dark-bg   bg-white overflow-auto h-screen" style={{ zIndex: "100" }}>
                <Sidebar /> </div> : <div className="w-0 overflow-hidden">hiddenSideBar</div>
            }


            <div className={`dark:bg-main bg-main-bg min-h-screen w-full  ${activeMenu ? "md:ml-72" : "flex-2"
                }`}>
                <div><Navbar /> </div>

                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout