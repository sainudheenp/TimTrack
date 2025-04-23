import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'
import Todo from '../pages/Todo/Todo'
import SideNavLink from './SideNavLink'
const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize } = useStateContext()

    const handleSideBarClose = () => { }

    const activeLink =
        "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray=900 font-bold text-md m-2";
    const normalLink =
        "flex items-center gap-5 pl-4 pt-3 pb-2.5  rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";


    return (
        <div>
            sidebar
            <SideNavLink name={"Todo"} icon={"fas fa-tasks"} path={'/todo'} />
            <NavLink to={'/todo'} className={({ isActive }) => isActive ? activeLink : normalLink} >Todo</NavLink>
            <NavLink to={'/timesheet'} className={({ isActive }) => isActive ? activeLink : normalLink} >Test1</NavLink>
            <NavLink to={'/analysis'} className={({ isActive }) => isActive ? activeLink : normalLink} >Test2</NavLink>

        </div>
    )
}

export default Sidebar