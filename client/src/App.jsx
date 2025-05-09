import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

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
import Team from "./pages/Team/Team";
import ProtectedRoute from "./components/ProtectedRoute";

import { ToastContainer } from "react-toastify";

function App() {
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
          <Route element={<ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/team" element={<Team />} />
          </Route>
        </Routes>
      </Router>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
