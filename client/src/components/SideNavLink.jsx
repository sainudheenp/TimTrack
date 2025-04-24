import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNavLink = ({ name, path, icon }) => {
    const activeLink = `flex items-center mr-15 gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-900 font-bold text-md m-2 bg-black text-white`;
    const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

    return (
        <div>
            <NavLink 
                to={path} 
                className={({ isActive }) => isActive ? activeLink : normalLink}
            >
                {({ isActive }) => (
                    <>
                        <span>
                            <i 
                                className={icon} 
                                style={{ color: isActive ? 'oklch(0.879 0.169 91.605)' : 'inherit' }}
                            ></i>
                        </span> 
                        {name}
                    </>
                )}
            </NavLink>
        </div>
    );
};

export default SideNavLink;