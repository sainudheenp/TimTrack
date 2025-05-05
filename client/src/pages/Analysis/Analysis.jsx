import React, { useEffect } from 'react'
import TotalCardWr from '../../components/Analysis/TotalCard'
import StackChart from '../../components/Analysis/StackChart'
import RecentActivities from '../../components/Analysis/RecentActivities'

import { getAnalysisData } from '../../api/apiServices';
import formatTime from '../../utils/formatTime';
import { useQuery } from '@tanstack/react-query';

const Analysis = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['analysisPage'],
    queryFn: getAnalysisData
  })


  console.log("analysis data :", data)
  if (isLoading) {
    return <div className="p-8 text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="p-8 text-red-600">Error loading data: {error.message}</div>;
  }



  return (<div className="bg-gray-200 rounded-md p-8 md:p-12 h-full">

    <h1 className='text-3xl font-bold' >User Stats </h1>
    <div>
      <TotalCardWr data={data.data.TotalCard} />
    </div>

    <div className=' mt-10 w-full'>
      <StackChart ChartData={data} />
    </div>
    <RecentActivities />
  </div>
  )
}

export default Analysis