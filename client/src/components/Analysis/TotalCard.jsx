import {React ,useEffect} from 'react'
import formatTime from '../../utils/formatTime';
const TotalCard = ({ actCount, actName }) => {
    return (
        <div className='flex flex-row  md:flex-col items-center justify-center w-full h-35   m-3 md:m-0 bg-white rounded-2xl  '>
            <h2 className='text-3xl font-extrabold mb-2'>{actCount}</h2>
            <div className='text-2xl font-medium' >{actName}</div>
        </div>
    )
}

const TotalCardWr = (data) => {
    // useEffect(() => {
        
console.log('data tot',data[0].overall[0])
    // })
    return (
        <div className='flex  justify-evenly p-4 gap-8  bg-gray-200 mt-5 flex-col md:flex-row'>
            <TotalCard actName={'Total Hours'} actCount={formatTime(data)} />
            <TotalCard actName={'Projects'} actCount={727} />
            <TotalCard actName={'Activities'} actCount={727} />
            <TotalCard actName={"Today"} actCount={727} />



        </div>
    )
}

export default TotalCardWr