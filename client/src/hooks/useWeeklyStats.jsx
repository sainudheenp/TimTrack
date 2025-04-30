import { useEffect, useState } from 'react'
import { getWeeklStats } from '../api/apiServices';




export const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;


    return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

}

export default function getWeekyStats() {
    const [weekly, setWeekly] = useState({
        WeekAvg: "00:00:00",
        TotalTime: "00:00:00",
        ProjectsCount: 0,
        weekData: []
    })

    useEffect(() => {
        const fetchStats = async () => {


            const data = await getWeeklStats()
            const weeklyTotal = data.data.reduce((acc, proj) => acc + proj.totalTime, 0)
            const WeekAvg = Math.round(weeklyTotal / 7)

            console.log("WEK TOTAL", data)

            setWeekly({
                TotalTime: formatTime(weeklyTotal),
                ProjectsCount: data.data.length,
                WeekAvg: formatTime(WeekAvg),
                weekData: data.data
            })


        }
        fetchStats()

    }, [])


  
    return weekly

}

