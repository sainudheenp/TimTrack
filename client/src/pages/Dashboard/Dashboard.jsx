import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  useEffect(() => {
    localStorage.clear()
  })
  return <div>dashboard
    <Link to='/login' className="text-amber-300 " > login</Link>
  </div>;
};

export default Dashboard;
