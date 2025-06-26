import React from 'react'
import { Link } from "react-router-dom";

const Landing = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 to-blue-100">
    <header className="text-center mb-16 mt-8">
      <h1 className="text-6xl font-extrabold mb-4 text-amber-600 drop-shadow-lg tracking-tight">TimTrack</h1>
      <p className="text-2xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
        Empower your productivity with effortless time tracking, insightful analytics, and seamless team collaboration.
      </p>
      <div className="flex gap-6 justify-center">
        <Link to="/register" className="px-8 py-3 bg-amber-500 text-white rounded-lg font-semibold shadow hover:bg-amber-600 transition">Get Started</Link>
        <Link to="/login" className="px-8 py-3 bg-white border-2 border-amber-400 text-amber-600 rounded-lg font-semibold shadow hover:bg-amber-100 transition">Log In</Link>
      </div>
    </header>
    <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition">
        <i className="fa-solid fa-clock text-4xl text-amber-400 mb-4"></i>
        <h3 className="font-bold text-xl mb-3 text-gray-800">Time Tracking</h3>
        <p className="text-gray-600">Easily log your work sessions, manage tasks, and stay on top of your schedule with intuitive controls.</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition">
        <i className="fa-solid fa-chart-simple text-4xl text-blue-400 mb-4"></i>
        <h3 className="font-bold text-xl mb-3 text-gray-800">Analytics</h3>
        <p className="text-gray-600">Gain actionable insights with detailed reports and visualizations to optimize your workflow.</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition">
        <i className="fa-solid fa-users text-4xl text-green-400 mb-4"></i>
        <h3 className="font-bold text-xl mb-3 text-gray-800">Team Collaboration</h3>
        <p className="text-gray-600">Collaborate in real-time, share progress, and achieve goals together with your team.</p>
      </div>
    </section>
    <section className="max-w-4xl mx-auto mb-12 px-4">
      <div className="bg-blue-50 border-l-4 border-amber-400 p-6 rounded-xl shadow text-gray-700 text-lg">
        <span className="font-semibold text-amber-600">Why TimTrack?</span> <br />
        TimTrack is designed for professionals and teams who value their time. Whether you're a freelancer, manager, or part of a dynamic team, our platform helps you stay organized, focused, and productive.
      </div>
    </section>
    <footer className="text-gray-500 text-sm mt-auto mb-6">
      &copy; {new Date().getFullYear()} TimTrack. All rights reserved.
    </footer>
  </div>
);

export default Landing;