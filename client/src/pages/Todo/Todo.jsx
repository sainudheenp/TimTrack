import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { postActivity } from '../../api/apiServices';

const Todo = () => {
  const [activityName, setActivityName] = useState('sarala');
  const [projectName, setProjectName] = useState('');
  const [newProjectName, setNewProjectName] = useState('heysaru');
  const [expectedTime] = useState(10);

  const handleSave = async () => {
    if (!activityName || (!projectName && !newProjectName)) {
      toast.error("Please fill Activity Details");
      return;
    }

    const data = {
      activityName,
      projectName: newProjectName,
      activityDuration: 0,
      expectedTime: 90,
      isTodo: true,
    };

    try {
      const result = await postActivity(data);
      toast.success(result.status === "Success" ? "Activity added successfully." : result.status);
    } catch (err) {
      toast.error(err.message || "Failed to save activity.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">To-Do List</h1>
          <button
            onClick={handleSave}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-400 hover:bg-amber-500 transition duration-200 text-white text-xl shadow-lg"
            title="Add Activity"
          >
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-6 text-left">Task</th>
                <th className="py-3 px-6 text-left">Project</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Expected Time</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {[...Array(6)].map((_, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-6">HeadOne</td>
                  <td className="py-3 px-6">HeadTwo</td>
                  <td className="py-3 px-6">HeadThree</td>
                  <td className="py-3 px-6">HeadFour</td>
                  <td className="py-3 px-6">
                    <button className="text-blue-500 hover:text-blue-700">Edit</button>
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
