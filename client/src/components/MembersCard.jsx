import React from 'react'

const MembersTile = ({ UserName, Email, TodaysWork, WeeklyTIme }) => {
  return (
    <div className='grid grid-cols-2 items-center p-3 mt-1'>
      <div className='flex gap-2 items-center'>
        <img className='w-10 h-10 ' src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png" alt="user" />
        <div>
          <h5>{UserName}</h5>
          <span>{Email}</span>
        </div>
      </div>
      <div className='grid grid-cols-2'>
        <div>{TodaysWork}</div>
        <div>{WeeklyTIme}</div></div>
    </div>
  )
}

const MembersCard=()=>{
  return (
    <div>
      <MembersTile UserName={"JOhn"} Email={"John@gmail.com"} TodaysWork={"00:20:00"} WeeklyTIme={"40:00:00"}/>
      <MembersTile UserName={"JOhn"} Email={"John@gmail.com"} TodaysWork={"00:20:00"} WeeklyTIme={"40:00:00"}/>

    </div>
  )
}

export default MembersCard