import React from 'react'
import { useStateContext } from '../context/ContextProvider'
const TimerCard = () => {
    const { isRunning, setIsRunning, isCreatingProject, setIsCreatingProject } = useStateContext()

    return (
        <div className="bg-gray-400 h-50 mt-5 rounded-xl ">
            <h2>00:01:12</h2>

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
                    <button onClick={() => { setIsCreatingProject((prev) => !prev) }} >+ AddNew</button>
                </div>
                <div><button>Descard</button>
                    <button>save</button>
                </div>
            </div>
        </div>

    )
}

export default TimerCard