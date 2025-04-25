import { React, useState } from 'react'
const StartStopControls = () => {
    const [isRunning, setIsRunning] = useState(false)
    const [isCreatingProject, setIsCreatingProject] = useState(false)
    return (
        <div className=" bg-white rounded-2xl ">
            <div className="flex items-center justify-between p-3  ">
                <span className=" font-bold mr-8 text-lg">Start Time Tracker</span>
                <button onClick={() => { setIsRunning((prev) => !prev) }} type="button" className="cursor-pointer h-15 w-15 rounded-2xl bg-amber-300 hover:bg-amber-900 flex items-center justify-center text-2xl">
                    {isRunning ? <i className="fa-solid fa-pause "></i> : <i className="fa-solid fa-play "></i>}
                </button>
            </div>
            {isRunning && (
                <div className="bg-gray-400 h-50">
                    <h2>00:00:12</h2>

                    <div id="controls">
                        <input type="text" placeholder="Activity Name" />
                        <div className="flex">
                            {!isCreatingProject ? (<select name="project" id="">
                                <option value="s">fsd</option>
                                <option value="sf">fsd</option>
                                <option value="fs">fsd</option>
                            </select>) :
                                (<input type="text" placeholder="ProjectName" />)
                            }
                            <button onClick={()=>{setIsCreatingProject((prev)=>!prev)}} >+ AddNew</button>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}

export default StartStopControls