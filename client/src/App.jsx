import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";
import { useStateContext } from "./context/ContextProvider";
import Sidebar from "./components/Sidebar";
function App() {
  const [count, setCount] = useState(0);
  const { activeMenu } = useStateContext()
  return (
    <div>
      <Router>

        {activeMenu ? <div> <Sidebar /> </div> : <div className="w-0">SideBar</div>}

        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
