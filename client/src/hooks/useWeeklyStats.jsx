import { useEffect, useState } from 'react'
import { getWeeklStats } from '../api/apiServices';




const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;


    return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

}

export default function getWeekyStats() {
    const [weekly, setWeekly] = useState({
        WeekAvg: 0,
        TotalTime: "00:00:00",
        ProjectsCount: 0,
        
    })

    useEffect(() => {
        const fetchStats = async () => {
           

            const data = await getWeeklStats()
            const weeklyTotal = data.data.reduce((acc, proj) => acc + proj.totalTime, 0)
            const WeekAvg = Math.round(weeklyTotal / 7)

            // console.log("WEK TOTAL",weeklyTotal)

            setWeekly({
                TotalTime: formatTime(weeklyTotal),
                ProjectsCount: data.data.length,
                WeekAvg: formatTime(WeekAvg)
            })
            // console.log("WEEK STATE :", weekly)


        }
        fetchStats()

    }, [])

    return weekly

}

