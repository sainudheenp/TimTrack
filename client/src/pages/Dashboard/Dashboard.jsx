import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { userStore } from '../../store/userStore'
import Day from "../../components/Day";
import StartStopControls from "../../components/StartStopControls";
import WeekCard from "../../components/WeekCard";

import { TbArrowsSplit2 } from "react-icons/tb";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { FaRegFolder } from "react-icons/fa";
import TaskCard from "../../components/TaskCard";
import RecentActivity from "../../components/RecentActivity";
import ProjectsCard from "../../components/ProjectsCard";
import MembersCard from "../../components/MembersCard";
import TodoCard from "../../components/TodoCard";

import { useStateContext } from "../../context/ContextProvider";
import TimerCard from "../../components/TimerCard";
const Dashboard = () => {
console.log("dashboard reder")
  const { isShowing, setIsShowing } = useStateContext()
  const user = userStore((state) => state.user);
  console.log("Zustand-user", user ? user : "no user");
  return <div className="bg-gray-200 rounded-md p-8 md:p-12">
    <div className="flex flex-col gap-5 justify-between md:flex-row md:gap-0 ">
      <Day />
      <StartStopControls />
    </div>

    {isShowing && (
      <TimerCard />
    )}

    <div className="flex flex-col md:flex-row justify-between gap-6 mt-12 ">
      <WeekCard
        title="Weekly Activity"
        progress="0%"
        icon={<TbArrowsSplit2 className="rotate-90 text-5xl" />}
      />
      <WeekCard
        title="Worked This Week"
        progress="38:00:03"
        icon={<RxCounterClockwiseClock className="text-5xl" />}
      />
      <WeekCard
        title="Projects Worked"
        progress="02"
        icon={<FaRegFolder className="text-5xl" />}
      />
    </div>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      <TaskCard TaskName={"Recent Activity"} taskDiv={<RecentActivity />} />
      <TaskCard TaskName={"Projects"} taskDiv={<ProjectsCard />} />
      <TaskCard TaskName={"Members"} taskDiv={<MembersCard />} />
      <TaskCard TaskName={"To Do"} taskDiv={<TodoCard />} Headers={["Todo", "Time"]} />
    </div>



    <Link to='/login' className="text-amber-300 " > login</Link>
    <p>Hey {user?.displayName || 'Guest'}</p>
  </div>;
};

export default Dashboard;
