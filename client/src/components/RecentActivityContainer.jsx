import { React, useEffect, useState } from 'react'
import setRecentActivites from '../hooks/useRecentFv'
import useDashboardData from '../hooks/useDashboard';

const ImgTitleCard = ({ ActivityName }) => {
    return (<div className=' overflow-hidden relative'>
        <img className=' rounded-xl ' src="https://img.freepik.com/free-photo/view-messy-office-workspace-with-personal-computer_23-2150282053.jpg" alt="" />
        <span className='  overflow-auto truncate text-black font-bold bg-gray-50'>{ActivityName}</span>
    </div>)
}


const RecentActivity = () => {
    // const { activities } = setRecentActivites()
    // const { data : recentActivities , isLoading, error } = useDashboardData()
    const { data: dashboardData, isLoading, error } = useDashboardData();
    const data = dashboardData?.recentActivities;

    return (
        <div className='grid grid-cols-3 gap-4 mt-4'>
            {/* {activities.map((act, idx) => (<ImgTitleCard key={idx} ActivityName={act.activityName} />))} */}

            {isLoading ? (<div>Loading Recent Projects....</div>) : error ? (<div> Something Went Wrong! </div>)
                : data && data.length > 0 ? data.map((item, idx) => (item ? <ImgTitleCard key={idx} ActivityName={item.activityName} value={item.activityDuration / 15000 * 100} /> : null))
                    : (<div>No RecentActivittty found</div>)}



        </div>
    )
}

export default RecentActivity