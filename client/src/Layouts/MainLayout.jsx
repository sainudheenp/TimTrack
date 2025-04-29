import React, { useEffect } from 'react'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { useStateContext } from '../context/ContextProvider'
import { useNavigate, Outlet } from "react-router-dom";
const API_BASE = import.meta.env.VITE_API_URL
import { userStore } from '../store/userStore'
import { auth } from '../services/firebase';
import { onIdTokenChanged } from 'firebase/auth';

import { getUserProfile } from '../api/userServices';


const MainLayout = () => {
    const { activeMenu } = useStateContext()
    const navigate = useNavigate()

    useEffect(() => {

        if (!localStorage.getItem('token')) {
            navigate('/login')
        }


        //token refresh
        const unsubscribe = onIdTokenChanged(auth, async (user) => {
            if (user) {
                const token = await user.getIdToken()
                localStorage.setItem('token', token)
                console.log('Token refreshed:', token)
            } else {
                console.log("no user signd in ,please login")
                localStorage.clear()
                navigate('/login')

            }
        })





        const fetchUser = async () => {

            try {
                // const res = await fetch(`${API_BASE}/api/v1/user`, {
                //     method: 'GET',
                //     credentials: 'include',
                //     headers: {
                //         'Content-Type': 'application/json',
                //         'Authorization': `Bearer ${localStorage.token}`,
                //     }
                // })
                // if (res.ok) {
                //     const result = await res.json()
                //     userStore.getState().setUser(result.user);
                // } else {
                //     console.log('User not authenticated Or Token Expired');
                // }


                const res = await getUserProfile()
                userStore.getState().setUser(res.user);


            } catch (error) {
                console.log('GetME fetch', error)
            }
        }








        fetchUser()
        return () => unsubscribe()
    }, [])


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