import { React, useState } from 'react'

const StartStopControls = () => {
    return (
        <div className="flex items-center  bg-white p-3 rounded-2xl ">
            <span className=" font-bold mr-8 text-lg">Start Time Tracker</span>
            <div className=" p-4 px-5 rounded-2xl bg-amber-300 flex items-center justify-center text-2xl">
                <i className="fa-solid fa-play "></i>
            </div>
        </div>
    )
}

export default StartStopControls