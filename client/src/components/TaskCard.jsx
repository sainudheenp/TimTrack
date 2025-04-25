import React from 'react'

const TaskCard = ({taskDiv,TaskName}) => {
    return (
        <div className='w-full bg-white rounded-xl p-6 flex flex-col '>
            <div className='flex justify-between '>
                <span className='text-xl font-medium mb-4 '>{TaskName}</span>
                <span><i className="fa-solid fa-ellipsis-vertical"></i></span>
            </div>
            <div>
                {taskDiv}
            </div>
        </div>
    )
}

export default TaskCard