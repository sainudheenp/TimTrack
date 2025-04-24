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
import Timesheet from "./pages/Analys/Timesheet";
import Todo from "./pages/Todo/Todo";
import Navbar from "./components/Navbar";
function App() {
  const [count, setCount] = useState(0);
  const { activeMenu } = useStateContext()
  return (
    <div >
      <Router>
        <div className="flex relative dark:bg-main-dark-bg">

          {activeMenu ? <div className=" w-72 fixed dark:bg-secondery-dark-bg   bg-white overflow-auto h-screen" style={{ zIndex: "100" }}>
            <Sidebar /> </div> : <div className="w-0 overflow-hidden">hiddenSideBar</div>
          }


          <div className={`dark:bg-main bg-main-bg min-h-screen w-full  ${activeMenu ? "md:ml-72" : "flex-2"
            }`}>
            <div><Navbar /> </div>

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/timesheet" element={<Timesheet />} />
              <Route path="/todo" element={<Todo />} />



              {/* just for test */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
