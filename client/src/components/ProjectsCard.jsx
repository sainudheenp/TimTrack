import React from 'react'
import ProgressTile from './ProgressTile'
// import setRecentActivites from '../hooks/useRecentFv'
import getWeekyStats from '../hooks/useWeeklyStats'
import { formatTime } from '../hooks/useWeeklyStats'

const ProjectsCard = () => {
    const weekly = getWeekyStats()

    console.log(weekly)
    return (
        <div>
            {weekly.weekData.map((item, idx) => (<ProgressTile key={idx} name={item._id} time={formatTime(item.totalTime)} value={item.totalTime / 15000 * 100} />))}
            {/* <ProgressTile name={"Project One"} time={"00:20:00"} value={23} />
            <ProgressTile name={"Project One"} time={"00:20:00"} value={23} />
            <ProgressTile name={"Project One"} time={"00:20:00"} value={23} />
            <ProgressTile name={"Project One"} time={"00:20:00"} value={23} /> */}


        </div>
    )
}

export default ProjectsCard