import React, { useEffect, useState } from 'react'

const DayTime = () => {
    const [today, setToday] = useState(new Date())
    // const today = new Date()
    // const shortName=(date,)=>{}
    // console.log(today.toLocaleDateString().replaceAll("/", "-"))
    const date = `${today.toLocaleDateString("en-US", { weekday: 'short' })} ${today.toLocaleDateString().replaceAll("/", "-")} `
    const time = `${today.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    })}`

    // console.log("Date :", today.getMonth() + 1)
    useEffect(() => {
        const timer = setInterval(() => {
            setToday(new Date());
        }, 1000);
        return () => clearInterval(timer)
    },[])
    return (
        <div className='flex-col font-bold '>
            <h1 className=' text-4xl'>Today</h1>
            <div className='mt-3 text-lg '>
                <span>{date} </span>|<span> {time}</span>
            </div>
        </div>
    )
}

export default DayTime