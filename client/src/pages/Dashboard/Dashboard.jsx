import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { userStore } from '../../store/userStore'
const Dashboard = () => {

  const user = userStore((state) => state.user);
  console.log("Zustand-user", user ?user:"no user");
  return <div>dashboard
    <Link to='/login' className="text-amber-300 " > login</Link>
    <p>Hey {user?.displayName || 'Guest'}</p>
  </div>;
};

export default Dashboard;
