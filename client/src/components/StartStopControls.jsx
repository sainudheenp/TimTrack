import { React, useState } from 'react'

const StartStopControls = () => {
    return (
        <div className="flex items-center  ">
            <span className=" font-bold mr-8 text-lg">Start Time Tracker</span>
            <div className=" h-14 w-14 rounded-2xl bg-amber-300 flex items-center justify-center text-2xl">
                <i className="fa-solid fa-play "></i>
            </div>
        </div>
    )
}

export default StartStopControls