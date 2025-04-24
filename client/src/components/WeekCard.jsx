import React from 'react'
import { TbArrowsSplit2 } from "react-icons/tb";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { FaRegFolder } from "react-icons/fa";
const WeekCard = ({ title, progress, icon }) => {
  return (
    <div className='w-full bg-white rounded-lg p-6 flex flex-col justify-between'>
      <div className='flex justify-between'>
        <span className='text-xl font-medium '>{title}</span>
        <span><i className="fa-solid fa-ellipsis-vertical"></i></span>
      </div>
      <div className='flex justify-between items-center mt-20'>
        <span className='text-4xl font-medium' >{progress}</span>
       <div className='bg-amber-100 rounded-2xl text-amber-400 font-bold p-3 text-5xl'>
         {/* <TbArrowsSplit2 className='rotate-90 text-5xl' /> */}
         <RxCounterClockwiseClock />
        {/* <FaRegFolder /> */}
       </div>
      </div>
    </div>
  )
}

export default WeekCard