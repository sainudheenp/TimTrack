import { useEffect, useState } from 'react'
import { getDasboardData } from '../api/apiServices';
import formatTime from '../utils/formatTime';
import { useQuery } from '@tanstack/react-query';

  const  useDashboardData = () => {
    console.log("USE DASHBOARD")
    return useQuery({
        queryKey: ["dashboardData"],
        queryFn: async () => {
            const res = await getDasboardData();
            const { weeklyStats, recentActivities, recentProjects } = res.data;

            const weeklyTotal = weeklyStats.reduce((acc, proj) => acc + proj.totalTime, 0);
            const weekAvg = Math.round(weeklyTotal / 7);

            return {
                weekly: {
                    TotalTime: formatTime(weeklyTotal),
                    ProjectsCount: weeklyStats.length,
                    WeekAvg: formatTime(weekAvg),
                    weekData: weeklyStats,
                },
                recentActivities,
                recentProjects
            };
        }
    });
};
export default useDashboardData