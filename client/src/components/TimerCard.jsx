import { React, useState } from 'react'
import { useStateContext } from '../context/ContextProvider'

const TimerCard = () => {
    const { isShowing, setIsShowing, isCreatingProject, setIsCreatingProject,isRunning, setIsRunning } = useStateContext()
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md mx-auto mt-8 space-y-6">
            {/* Timer Display */}
            <div className="text-center">
                <h2 className="text-5xl font-bold text-gray-800 font-mono">00:01:12</h2>
                <button className="text-sm mt-2 cursor-pointer p-3 bg-gray-400  text-black rounded-2xl font-semibold" onClick={() => { setIsRunning((prev) => !prev) }}>{isRunning ? "Stop" : "Start"}</button>
            </div>

            {/* Activity Name Input */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Activity</label>
                <input
                    type="text"
                    placeholder="e.g. Writing code..."
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring- focus:ring-amber-300"
                />
            </div>

            {/* Project Selection/Input */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project</label>
                <div className="flex gap-2">
                    {!isCreatingProject ? (
                        <select className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
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
                <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white">
                    Save
                </button>
            </div>
        </div>
    )
}

export default TimerCard
