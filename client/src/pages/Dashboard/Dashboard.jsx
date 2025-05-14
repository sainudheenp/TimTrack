import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { userStore } from '../../store/userStore'

import DayTime from "../../components/DayTime";
import StartStopControls from "../../components/StartStopControls";
import WeekCardContainer from "../../components/WeekCardContainer";
import TaskCard from "../../components/TaskCard";
import RecentActivity from "../../components/RecentActivityContainer";
import ProjectsCard from "../../components/ProjectsCardContainer";
import MembersCard from "../../components/MembersCard";
import TodoCard from "../../components/TodoCard";
import { useStateContext } from "../../context/ContextProvider";
import TimerCard from "../../components/TimerCard";




const Dashboard = () => {


  // console.log("dashboard reder")
  const { isShowing, setIsShowing } = useStateContext()
  const user = userStore((state) => state.user);
  console.log("Zustand-user", user ? user : "no user");


  return <div className="bg-gray-200 rounded-md p-8 md:p-12">
    <div className="flex flex-col gap-5 justify-between md:flex-row md:gap-0 ">
      <DayTime />
      <StartStopControls />
    </div>

    {isShowing && (
      <div  >

        <TimerCard />
      </div>
    )}

    
    <WeekCardContainer />

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
      <TaskCard TaskName={"Recent Activity"} taskDiv={<RecentActivity />} />
      <TaskCard TaskName={"Recent Projects"} taskDiv={<ProjectsCard />} />
      <TaskCard TaskName={"Team Members"} taskDiv={<MembersCard />} />
      <TaskCard TaskName={"To Do"} taskDiv={<TodoCard />} Headers={["Todo", "Time"]} />
    </div>



    <Link to='/login' className="text-amber-300 " > login</Link>
    {/* <p>Hey {user?.displayName || 'Guest'}</p> */}
  </div>;
};

export default Dashboard;
