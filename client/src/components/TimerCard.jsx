import { React, useEffect, useState } from 'react'
import { useStateContext } from '../context/ContextProvider'


const TimerCard = () => {
    console.log("TimeCard render")

    const { isShowing, setIsShowing, isCreatingProject, setIsCreatingProject, isRunning,
        setIsRunning, duration, handleControll, intervalId } = useStateContext()

    const hours = Math.floor(duration / 3600)
    const minutes = Math.floor((duration % 3600) / 60)
    const seconds = duration % 60

    const displayTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

    const [acitvityName, setAcitvityName] = useState('')
    const [projectName, setProjectName] = useState('')
    const [newProjectName, setNewProjectName] = useState('')

    const handleSave = async () => {
        const data = {
            activityName: acitvityName,
            projectName: isCreatingProject ? newProjectName : projectName,
            duration: duration,
        }

        try {
            const response = await fetch('https://timtrack.onrender.com/api/v1/activity', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                  credentials: 'include'
            })
            const result = await response.json()
            if (response.ok) {
                console.log('Activity saved successfully:', result)
            } else {
                console.error('Error saving activity:', result)
            }
        } catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        // Clean up on component unmount
        return () => {
            if (intervalId) {
                clearInterval(intervalId)
            }
        }
    }, [intervalId])

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md mx-auto mt-8 space-y-6">

            <div className="text-center">
                <h2 className="text-5xl font-bold text-gray-800 font-mono">{displayTime}</h2>
                <button className="text-sm mt-2 cursor-pointer mt-8 w-20 h-10 bg-gray-400  text-lg text-black rounded-sm font-semibold"
                    onClick={() => { handleControll() }}>{isRunning ? "Stop" : "Start"}                     {isRunning ? <i className="fa-solid fa-pause "></i> : <i className="fa-solid fa-play "></i>}                </button>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Activity</label>
                <input
                    type="text"
                    placeholder="e.g. Writing code..."
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring- focus:ring-amber-300"

                    onChange={(e) => { setAcitvityName(e.target.value) }}
                />
            </div>


            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project</label>
                <div className="flex gap-2">
                    {!isCreatingProject ? (
                        <select className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setProjectName(e.target.value)}>
                            <option value="">Select Project</option>
                            <option value="proj1">FSD</option>
                            <option value="proj2">Design</option>
                            <option value="proj3">Testing</option>
                        </select>
                    ) : (
                        <input
                            type="text"
                            placeholder="New project name"
                            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setNewProjectName(e.target.value)}
                        />
                    )}
                    <button
                        onClick={() => setIsCreatingProject(prev => !prev)}
                        className="bg-blue-500 text-white px-3 rounded-lg hover:bg-blue-600 text-sm"
                    >
                        {isCreatingProject ? "Back" : "+ New"}
                    </button>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
                <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700">
                    Discard
                </button>
                <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white" onClick={ handleSave} >
                    Save
                </button>
            </div>
        </div>
    )
}

export default TimerCard
