import { React, useEffect } from 'react'
import formatTime from '../../utils/formatTime';
const TotalCard = ({ actCount, actName }) => {
    return (
        <div className='flex flex-row  md:flex-col items-center justify-center w-full h-35   m-3 md:m-0 bg-white rounded-2xl  '>
            <h2 className='text-3xl font-extrabold mb-2'>{actCount}</h2>
            <div className='text-2xl font-medium' >{actName}</div>
        </div>
    )
}

const TotalCardWr = ({ data }) => {
    // useEffect(() => {
    const overAll = data[0].overall[0]
    const today = data[0].today[0]
    // console.log('data tot', today)
    // })
    return (
        <div className='flex  justify-evenly p-4 gap-8  bg-gray-200 mt-5 flex-col md:flex-row'>
            <TotalCard actName={'Total Hours'} actCount={formatTime(overAll.totalHours)} />
            <TotalCard actName={'Projects'} actCount={overAll.projects.length} />
            <TotalCard actName={'Activities'} actCount={overAll.TActivities} />
            <TotalCard actName={"Today"} actCount={formatTime(today.todayHours)} />



        </div>
    )
}

export default TotalCardWr