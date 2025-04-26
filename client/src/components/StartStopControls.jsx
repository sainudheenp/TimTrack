import { React, useState } from 'react'
import { useStateContext } from '../context/ContextProvider'
const StartStopControls = () => {
    const { isShowing, setIsShowing, isRunning, setIsRunning } = useStateContext()
    return (
        <div className="  ">
            <div className="flex items-center justify-between p-3 bg-white rounded-2xl ">
                <span className=" font-bold mr-8 text-lg">Start Time Tracker</span>
                <button onClick={() => { setIsShowing((prevd) => !prevd)  }} type="button" className="cursor-pointer h-15 w-15 rounded-2xl bg-amber-300 hover:bg-amber-900 flex items-center justify-center text-4xl">
                    {isShowing ? <i class="fa-solid fa-caret-down"></i> : <i class="fa-solid fa-caret-right "></i>}
                </button>
            </div>
        </div>
    )
}

export default StartStopControls