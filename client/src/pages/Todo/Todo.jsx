import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { postActivity } from '../../api/apiServices';
import TimerCard from '../../components/TimerCard';
import Openmodel from '../../components/Model/Openmodel'
import { getTodos } from '../../api/apiServices';
import { useQuery } from '@tanstack/react-query';
import formatTime from '../../utils/formatTime';
import useProjectStore from '../../store/projectTimer';
import { useStateContext } from '../../context/ContextProvider'
import AddTodo from '../../components/Model/AddTodo';

const Todo = () => {
  const [isShowing, setIsShowing] = useState(false)
  const [createTodo, setCreateTodo] = useState('')
  const {
    activityName,
    projectName,
    newProjectName,
    setActivityName,
    setProjectName,
    setNewProjectName,
    setProjectId
  } = useProjectStore();

  const { duration, setDuration } = useStateContext()
  const { data: todos = [], isLoading, isError } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
    select: (res) => res.data,
  });

  // const [activityName, setActivityName] = useState('sarala');
  // const [projectName, setProjectName] = useState('');
  // const [newProjectName, setNewProjectName] = useState('heysaru');
  // const [expectedTime] = useState(10);

  // const handleSave = async () => {
  //   if (!activityName || (!projectName && !newProjectName)) {
  //     toast.error("Please fill Activity Details");
  //     return;
  //   }

  //   const data = {
  //     activityName,
  //     projectName: newProjectName,
  //     activityDuration: 0,
  //     expectedTime: 90,
  //     isTodo: true,
  //   };

  //   try {
  //     const result = await postActivity(data);
  //     toast.success(result.status === "Success" ? "Activity added successfully." : result.status);
  //   } catch (err) {
  //     toast.error(err.message || "Failed to save activity.");
  //   }
  // };

  const handleTimer = (s) => {
    console.log('fslf', s)
    setActivityName(s.activityName)
    setProjectName(s.projectName)
    setNewProjectName(s.projectName)
    setProjectId(s._id)
    setDuration(s.activityDuration)
    setIsShowing(!isShowing)
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading todos</div>;

  console.log(todos)
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      {isShowing && <TimerCard />}
      {/* <Openmodel/> */}
      {createTodo && <AddTodo createTodo={createTodo} setCreateTodo={setCreateTodo} />}
      <div className="max-w-6xl mt-10 mx-auto bg-white rounded-xl shadow-md p-6 md:p-10">

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">To-Do List</h1>
          <button
            onClick={() => setCreateTodo(!createTodo)}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-400 hover:bg-amber-500 transition duration-200 text-white text-xl shadow-lg"
            title="Add Activity"
          >
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200  ">
            <thead className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-6 text-left">Task</th>
                <th className="py-3 px-6 text-left">Project</th>
                <th className="py-3 px-6 text-left">Duration</th>
                <th className="py-3 px-6 text-left">Expected Time</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {todos.data.map((_, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-6">{_.activityName}</td>
                  <td className="py-3 px-6">{_.projectName}</td>
                  <td className="py-3 px-6">{formatTime(_.activityDuration)}</td>
                  <td className="py-3 px-6">{formatTime(_.expectedTime)}</td>
                  <td className="py-3 px-6">{_.isCompleted ? "✅ Completed" : '⏳ In Progress'}</td>

                  <td className="py-3 px-6">
                    <button className="text-blue-500 hover:text-blue-700" onClick={() => handleTimer(_)}>
                      <i className="fa-solid fa-play "></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Todo;
