import React from 'react'

const TaskCard = ({ taskDiv, TaskName, Headers = null }) => {
    return (
        <div className='w-full bg-white rounded-xl p-6 flex flex-col '>
            <div className='flex justify-between '>
                <span className='text-xl font-medium mb-4 '>{TaskName}</span>
                <span><i className="fa-solid fa-ellipsis-vertical"></i></span>
            </div>
            {Headers && <div className='grid grid-cols-2  font-bold text-gray-500 pl-3 pr-3'>
                <span>{Headers[0]}</span>
                <div className='grid grid-cols-2'>
                    <span>{Headers[1]}</span>
                    {Headers[2] && (
                        <span>{Headers[2]}</span>
                    )}
                </div>
            </div>}
            <div>
                {taskDiv}
            </div>
        </div>
    )
}

export default TaskCard