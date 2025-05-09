import React, { useEffect } from 'react'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { useStateContext } from '../context/ContextProvider'
import { useNavigate, Outlet } from "react-router-dom";
const API_BASE = import.meta.env.VITE_API_URL
import { userStore } from '../store/userStore'
import { auth } from '../services/firebase';
import { onIdTokenChanged } from 'firebase/auth';

import { getUserProfile } from '../api/apiServices';


const MainLayout = () => {
    const { activeMenu } = useStateContext()
    const navigate = useNavigate()

    useEffect(() => {
        const unsubscribe = onIdTokenChanged(auth, async (user) => {
            if (user) {
                try {
                    const token = await user.getIdToken();
                    localStorage.setItem('token', token);
                    console.log('Token refreshed:', token);

                    const res = await getUserProfile();
                    userStore.getState().setUser(res.user);
                } catch (error) {
                    console.log('Error fetching user profile:', error);
                    localStorage.clear();
                    navigate('/login');
                }
            } else {
                console.log("No user signed in, redirecting...");
                localStorage.clear();
                navigate('/login');
            }
        });

        return () => unsubscribe();
    },[]);


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