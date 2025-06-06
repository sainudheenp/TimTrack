import { React, useEffect, useState, useMemo } from 'react'
// import setRecentActivites from '../hooks/useRecentFv'
import useDashboardData from '../hooks/useDashboard';

let imgarray = [
    "https://img.freepik.com/free-photo/view-messy-office-workspace-with-personal-computer_23-2150282053.jpg",
    "https://img.freepik.com/free-photo/view-messy-office-workspace-with-personal-computer_23-2150282054.jpg",
    "https://img.freepik.com/free-photo/view-messy-office-workspace-with-personal-computer_23-2150282055.jpg",
    "https://img.freepik.com/free-photo/view-messy-office-workspace-with-personal-computer_23-2150282056.jpg",
    "https://img.freepik.com/free-photo/view-messy-office-workspace-with-personal-computer_23-2150282057.jpg",
    "https://img.freepik.com/free-photo/view-messy-office-workspace-with-personal-computer_23-2150282058.jpg",
    "https://img.freepik.com/free-photo/view-messy-office-workspace-with-personal-computer_23-2150282059.jpg",
    "https://img.freepik.com/free-photo/view-messy-office-workspace-with-personal-computer_23-2150282060.jpg"
]
const ImgTitleCard = ({ ActivityName }) => {
    const img = useMemo(()=>imgarray[Math.floor(Math.random() * imgarray.length)],[])
    return (<div className=' overflow-hidden relative'>
        <img className=' rounded-xl h-26 w-55' src={img} alt="" />
        <span className='  overflow-auto truncate text-black font-bold bg-gray-50'>{ActivityName}</span>
    </div>)
}

const RecentActivity = () => {
  
    const { data: dashboardData, isLoading, error } = useDashboardData();
    const data = dashboardData?.recentActivities;

    return (
        <div className=' md:grid grid-cols-3 gap-4 mt-4'>
            {/* {activities.map((act, idx) => (<ImgTitleCard key={idx} ActivityName={act.activityName} />))} */}

            {isLoading ? (<div>Loading Recent Projects....</div>) : error ? (<div> Something Went Wrong! </div>)
                : data && data.length > 0 ? data.map((item, idx) => (item ? <ImgTitleCard key={idx} ActivityName={item.activityName} /> : null))
                    : (<div>No RecentActivittty found</div>)}



        </div>
    )

}

export default RecentActivity
