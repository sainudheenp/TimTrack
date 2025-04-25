import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import { FaRegFolder } from 'react-icons/fa'

const ProgressTile = ({name,time,value}) => {
    return (
        <div className='flex w-full flex-col md:flex-row justify-between items-center mb-3 md:m-3 md:mb-0 border-1 md:p-3 border-gray-200 rounded-xl '>
            <div className='flex items-center  font-semibold gap-2'>
                <FaRegFolder className='text-amber-400 ' />
                <h4>{name}</h4>
            </div>
            <div className=' flex justify-between items-center font-normal gap-3 mt-4 md:mt-0'>
                <span>{time}</span>
                <span>
                    <LinearProgress className='w-30  md:w-45 rounded-lg h-3' sx={{
                        backgroundColor: '#C2C2C2', '& .MuiLinearProgress-bar': {
                            backgroundColor: '#FBBF24', 
                        },
                    }} variant="determinate" value={40} />
                </span>
            </div>
        </div>
    )
}

export default ProgressTile