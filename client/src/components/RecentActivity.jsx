import { React, useEffect, useState } from 'react'
import setRecentActivites from '../hooks/useRecentFv'

const ImgTitleCard = ({ ActivityName }) => {


    return (<div className=' overflow-hidden relative'>
        <img className=' rounded-xl ' src="https://img.freepik.com/free-photo/view-messy-office-workspace-with-personal-computer_23-2150282053.jpg" alt="" />

        <span className='  overflow-auto truncate text-black font-bold bg-gray-50'>{ActivityName}</span>
    </div>)
}


const RecentActivity = () => {
    const { activities } = setRecentActivites()
    console.log("recent act" , activities)

    return (
        <div className='grid grid-cols-3 gap-4 mt-4'>
            {activities.map((act, idx) => (<ImgTitleCard key={idx} ActivityName={act.activityName} />))}
        </div>
    )
}

export default RecentActivity