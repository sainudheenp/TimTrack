import React from 'react'

const TotalCard = ({ actCount, actName }) => {
    return (
        <div className='text-center p-8 px-15 m-3 md:m-0 bg-amber-500 rounded-2xl  '>
            <h2 className='text-3xl font-extrabold mb-2'>{actCount}</h2>
            <div className='text-2xl font-medium' >{actName}</div>
        </div>
    )
}

const TotalCardWr = () => {
    return (
        <div className='flex  justify-evenly p-4 bg-gray-200 mt-5 flex-col md:flex-row'>
            <TotalCard actName={'activities'} actCount={727} />
            <TotalCard actName={'activities'} actCount={727} />
            <TotalCard actName={'activities'} actCount={727} />
            <TotalCard actName={'activities'} actCount={727} />

        </div>
    )
}

export default TotalCardWr