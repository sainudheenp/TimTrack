import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'
const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize } = useStateContext()

    const handleSideBarClose = () => { }

    const activeLink =
        "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
    const normalLink =
        "flex items-center gap-5 pl-4 pt-3 pb-2.5  rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";


    return (
        <div>
            sidebar
        </div>
    )
}

export default Sidebar