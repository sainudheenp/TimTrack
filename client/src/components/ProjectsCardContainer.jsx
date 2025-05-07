import React from 'react'
import ProgressTile from './ProgressTile'
import useWeeklyStats from '../hooks/useWeeklyStats';
import formatTime from '../utils/formatTime';
import useDashboardData from '../hooks/useDashboard';
import { userStore } from '../store/userStore';


const ProjectsCard = () => {
    // const weekly = useWeekyStats()
    // const { data, isLoading, error } = useWeeklyStats();
    const { data: dashboardData, isLoading, error } = useDashboardData();
    const data = dashboardData?.recentProjects;
    console.log("recent activity", data)


    userStore.getState().setRecentProject(data)
    return (
        <>
            {isLoading ? (<div>Loading Recent Projects....</div>) : error ? (<div> Something Went Wrong! </div>)
                : data && data.length > 0 ? data.map((item, idx) => (item._id ? <ProgressTile key={idx} name={item._id} time={formatTime(item.totalTime)} value={item.totalTime / 15000 * 100} /> : null))
                    : (<div>No projects found</div>)}

        </>
    )
}

export default ProjectsCard