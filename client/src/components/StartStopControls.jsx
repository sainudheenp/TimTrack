import { React, useState } from 'react'
import { useStateContext } from '../context/ContextProvider'
const StartStopControls = () => {
    const { isShowing, setIsShowing ,isRunning,setIsRunning} = useStateContext()
    return (
        <div className="  ">
            <div className="flex items-center justify-between p-3 bg-white rounded-2xl ">
                <span className=" font-bold mr-8 text-lg">Start Time Tracker</span>
                <button onClick={() => { setIsShowing(true) ,setIsRunning((prev)=>!prev) }} type="button" className="cursor-pointer h-15 w-15 rounded-2xl bg-amber-300 hover:bg-amber-900 flex items-center justify-center text-2xl">
                    {isRunning ? <i className="fa-solid fa-pause "></i> : <i className="fa-solid fa-play "></i>}
                </button>
            </div>            
        </div>
    )
}

export default StartStopControls