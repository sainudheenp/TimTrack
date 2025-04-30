import React from 'react'
import TotalCardWr from '../../components/Analysis/TotalCard'
import StackChart from '../../components/Analysis/StackChart'

const Analysis = () => {

  return (<div className="bg-gray-200 rounded-md p-8 md:p-12 h-screen">

    <h1 className='text-3xl font-bold' >User Stats tldr</h1>

    <div>
      <TotalCardWr />
    </div>

    <div className='h-50'>
      <StackChart />
    </div>
  </div>
  )
}

export default Analysis