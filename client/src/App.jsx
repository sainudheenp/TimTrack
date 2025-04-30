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
import Todo from "./pages/Todo/Todo";
import Navbar from "./components/Navbar";
import AuthLayout from "./Layouts/AuthLayout";
import MainLayout from "./Layouts/MainLayout";
import Analysis from "./pages/Analysis/Analysis";
function App() {
  const [count, setCount] = useState(0);
  const { activeMenu } = useStateContext()
  return (
    <div >
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          {/* Page Routes */}

          <Route element={<MainLayout />}>

            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/timesheet" element={<Timesheet />} /> */}
            <Route path="/todo" element={<Todo />} />
            <Route path="/analysis" element={<Analysis />} />

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
