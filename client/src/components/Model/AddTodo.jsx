import React, { useEffect } from 'react'
import { useStateContext } from '../../context/ContextProvider'
import { toast } from "react-toastify";
import { postActivity, getRecentActivity, updateTodo } from '../../api/apiServices';
import { userStore } from '../../store/userStore';
import useProjectStore from '../../store/projectTimer';

const AddTodo = ({ createTodo, setCreateTodo }) => {
    const projectsData = userStore((state) => state.projects)

    const { isShowing, setIsShowing, isCreatingProject, setIsCreatingProject, isRunning,
        setIsRunning, duration, handleControll, intervalId, setDuration } = useStateContext()

    const {
        activityName,
        projectName,
        newProjectName,
        setActivityName,
        setProjectName,
        setNewProjectName,
        setProjectId,
        projectId
    } = useProjectStore();


    const handleSave = async () => {
        if (!activityName || (!projectName && !newProjectName)) {
            toast.error("Please fill Activity Details");
            return;
        }

        const data = {
            activityName,
            projectName: projectName,
            activityDuration: 0,
            expectedTime: 600,
            isTodo: true,
        };

        try {
            const result = await postActivity(data);
            toast.success(result.status === "Success" ? "Activity added successfully." : result.status);
            if (result.status == "Success") {

            }

        } catch (err) {
            toast.error(err.message || "Failed to save activity.");
        }
    };
    useEffect(() => {
        setNewProjectName('')
        setActivityName('')
        setProjectName('')
    }, [])
    return (
        <div className="flex flex-col shadow-md p-6 py-10  fixed inset-0  max-w-md max-h-fit mx-auto mt-8 ">
            <div className=' bg-gray-300 p-6 rounded-2xl  flex flex-col justify-around space-y-6'>
                <h2 className='w-full text-center text-3xl font-medium'>Create Todo</h2>


                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Todo Name</label>
                    <input
                        type="text"
                        placeholder="e.g. Design Login Page..."
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring- focus:ring-amber-300"
                        value={activityName}
                        onChange={(e) => { setActivityName(e.target.value) }}
                    />
                </div>


                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project</label>
                    <div className="flex gap-2">
                        {!isCreatingProject ? (
                            <select className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => setProjectName(e.target.value)} value={projectName} >
                                {projectName ? (<option value={projectName}>{projectName}</option>) : (<option value="">Select Project</option>)}
                                {projectsData.map((item) => (<option value={item._id}>{item._id}</option>))}
                                <option value="test">test</option>
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

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Time</label>
                    <input
                        type="Text"
                        
                        placeholder="Time"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring- focus:ring-amber-300"
                        value={'00:10:00'}
                        // onChange={(e) => { setActivityName(e.target.value) }}
                    />
                </div>


                {/* Action Buttons */}
                <div className="flex justify-end gap-3">
                    <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700" onClick={() => { setCreateTodo(!createTodo) }}>
                        Discard
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white" onClick={handleSave} >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo