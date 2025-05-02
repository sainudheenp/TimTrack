import { useEffect, useState } from 'react'
import { getWeeklStats } from '../api/apiServices';
import formatTime from '../utils/formatTime';
import { useQuery } from '@tanstack/react-query';


const processStats = (data) => {
    const weeklyTotal = data.reduce((acc, proj) => acc + proj.totalTime, 0);
    const WeekAvg = Math.round(weeklyTotal / 7);
    return {
        TotalTime: formatTime(weeklyTotal),
        ProjectsCount: data.length,
        WeekAvg: formatTime(WeekAvg),
        weekData: data

    }
}

export default function useWeeklyStats(){
    return useQuery({
        queryKey:["WeeklyStats"],
        queryFn:async ()=>{
            const res = await getWeeklStats();
            return processStats(res.data);
        }
    })
}