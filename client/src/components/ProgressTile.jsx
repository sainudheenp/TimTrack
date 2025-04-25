import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import { FaRegFolder } from 'react-icons/fa'

const ProgressTile = () => {
    return (
        <div className='flex w-full justify-between items-center p-3 text-xl '>
            <div className='flex items-center  font-semibold gap-2'>
                <FaRegFolder className='text-amber-400 ' />
                <h4>Project one</h4>
            </div>
            <div className=' flex justify-between items-center font-normal gap-3'>
                <span>00:40:00</span>
                <span>
                    <LinearProgress className='w-45 rounded-lg h-3' sx={{
                        backgroundColor: '#C2C2C2', '& .MuiLinearProgress-bar': {
                            backgroundColor: '#FBBF24', 
                        },
                    }} variant="determinate" value={29} />
                </span>
            </div>
        </div>
    )
}

export default ProgressTile