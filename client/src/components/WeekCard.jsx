import React from 'react'

const WeekCard = ({ title, progress, icon }) => {
  return (
    <div className='w-full bg-white rounded-xl p-6 flex flex-col justify-between'>
      <div className='flex justify-between'>
        <span className='text-xl font-medium '>{title}</span>
        <span><i className="fa-solid fa-ellipsis-vertical"></i></span>
      </div>
      <div className='flex justify-between items-center mt-12'>
        <span className='text-4xl font-medium' >{progress}</span>
       <div className='bg-amber-100 rounded-2xl text-amber-400 font-bold p-3 text-5xl'>
         {/* <TbArrowsSplit2 className='rotate-90 text-5xl' /> */}
         {/* <RxCounterClockwiseClock /> */}
        {/* <FaRegFolder /> */}
        {icon}
       </div>
      </div>
    </div>
  )
}

export default WeekCard