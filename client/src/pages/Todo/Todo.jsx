import React, { useEffect, useState } from 'react'
import TodoCard from '../../components/TodoCard'
import { toast } from 'react-toastify';
import { postActivity } from '../../api/apiServices';
const Todo = () => {
  console.log("am todo")
  const [activityName, setActivityName] = useState('sarala')
  const [projectName, setProjectName] = useState('')
  const [newProjectName, setNewProjectName] = useState('heysaru')
  const [expectedTime, setExpectedTime] = useState(10)

  const handleSave = async () => {
    if (!activityName || (!projectName && !newProjectName)) {
      toast.error("Please fill Activity Details")
      return
    }
    const data = {
      activityName: activityName,
      projectName: newProjectName,
      activityDuration: 0,
      expectedTime: 90,
      isTodo: true,
    }
    ////postActivity

    try {
      console.log("am trying ")
      const result = await postActivity(data);
      toast.success(result.status === "Success" ? "Activity added successfully." : result.status);
      // if (result.status == "Success") {
      //   // handleControll();
      //   clearInterval(intervalId);
      //   setActivityName('');
      //   setIsRunning(false);
      //   setDuration(0)
      // }
    } catch (err) {
      toast.error(err.message || "Failed to save activity.");
    }
  }

  useEffect(() => {

    // handleSave()
  }, [])
  return (
    <div className="bg-gray-200 rounded-md p-8 md:p-12 h-full">
      <div className='fixed bottom-6 right-6 md:right-15 md:bottom-15 text-3xl p-5 py-4 bg-amber-300 rounded-full font-extrabold' style={{ zIndex: "100" }}>
        <i className="fa fa-plus " aria-hidden="true"></i>
      </div>
      <h1 className='text-3xl font-bold' > Todo </h1>
      <div>      <TodoCard /> </div>
    </div>
  )
}

export default Todo