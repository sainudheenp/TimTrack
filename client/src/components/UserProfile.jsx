import React from 'react'
import { auth } from '../services/firebase'
import { signOut } from 'firebase/auth'

const UserProfile = () => {

  const handleLogout = async () => {

    try {
      await signOut(auth);
      window.alert("Yo, Where are You going ,Stay Here maan");
      localStorage.clear();
      location.reload()
    } catch (error) {
      console.log("Logout Failed:", error)
    }


  }

  return (
    <div className=' hover:bg-red-300 font-medium  ' onClick={handleLogout}> logout</div>
  )
}

export default UserProfile