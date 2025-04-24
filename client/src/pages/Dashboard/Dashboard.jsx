import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { userStore } from '../../store/userStore'
import Day from "../../components/Day";
import StartStopControls from "../../components/StartStopControls";
import WeekCard from "../../components/WeekCard";
const Dashboard = () => {

  const user = userStore((state) => state.user);
  console.log("Zustand-user", user ? user : "no user");
  return <div>
    <div className="flex justify-between m-12">
      <Day />
      <StartStopControls />
    </div>


    <div className="flex justify-between gap-5 m-12">
      <WeekCard />
      <WeekCard />
      <WeekCard />

    </div>

    dashboard
    <Link to='/login' className="text-amber-300 " > login</Link>
    <p>Hey {user?.displayName || 'Guest'}</p>
  </div>;
};

export default Dashboard;
