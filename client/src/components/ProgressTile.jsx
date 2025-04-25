import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { FaRegFolder } from 'react-icons/fa';

const ProgressTile = ({ name, time, value }) => {
  return (
    <div className='flex w-full flex-col md:flex-row justify-between items-center mb-3 md:m-3 md:mb-0 border border-gray-200 rounded-xl md:p-3 min-w-0'>
      <div className='flex items-center font-semibold gap-2'>
        <FaRegFolder className='text-amber-400' />
        <h4 className="truncate min-w-0">{name}</h4> {/* Prevent text overflow */}
      </div>
      
      <div className='flex justify-between items-center gap-3 w-full md:mt-0 md:pl-4'>
        <span className="whitespace-nowrap">{time}</span> {/* Prevent time from wrapping */}
        <div className="flex-1 min-w-0"> {/* Allow progress bar to grow */}
          <LinearProgress
            className='w-full rounded-lg h-3' // Full width on all screens
            sx={{
              backgroundColor: '#C2C2C2',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#FBBF24',
              },
            }}
            variant="determinate"
            value={value || 40} // Use prop `value` if provided
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressTile;