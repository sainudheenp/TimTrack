import React from 'react'
import ProgressTile from './ProgressTile'
import setRecentActivites from '../hooks/useRecentFv'


const ProjectsCard = () => {
        const { activities } = setRecentActivites()
    
    return (
        <div>

            {activities.map((item,idx)=>(            <ProgressTile name={"Project One"} time={"00:20:00"} value={23} />))}
            <ProgressTile name={"Project One"} time={"00:20:00"} value={23} />
            <ProgressTile name={"Project One"} time={"00:20:00"} value={23} />
            <ProgressTile name={"Project One"} time={"00:20:00"} value={23} />
            <ProgressTile name={"Project One"} time={"00:20:00"} value={23} />


        </div>
    )
}

export default ProjectsCard