import React from 'react'
import ProgressTile from './ProgressTile'
import useWeeklyStats from '../hooks/useWeeklyStats';
import formatTime from '../utils/formatTime';
const ProjectsCard = () => {
    // const weekly = useWeekyStats()
    const { data, isLoading, error } = useWeeklyStats();
    console.log("data", data)
    // const { data, isLoading, error } = useWeeklyStats();

    // console.log(weekly)
    return (
        <>
            {isLoading ? (<div>Loading Recent Projects....</div>) : error ? (<div> Something Went Wrong! </div>)
                : data && data.weekData.length > 0 ? data.weekData.map((item, idx) => (item._id ? <ProgressTile key={idx} name={item._id} time={formatTime(item.totalTime)} value={item.totalTime / 15000 * 100} /> : null))
                    : (<div>No projects found</div> )}

        </>
    )
}

export default ProjectsCard