import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <div className='min-h-screen min-w-screen'>
            <Outlet />
        </div>
    )
}

export default AuthLayout