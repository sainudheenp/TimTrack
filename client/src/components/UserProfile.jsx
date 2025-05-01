import React from 'react'

const UserProfile = () => {
  return (
    <div className=' hover:bg-red-300 font-medium  ' onClick={()=>{
       window.alert("Yo, Where are You going ,Stay Here maan") ;
       localStorage.clear();
  location.reload()
      }
     }> logout</div>
  )
}

export default UserProfile