import React from 'react';
import { Link } from "react-router-dom";

// Modern dashboard-style SVG illustration
const DashboardIllustration = () => (
    <svg width="340" height="200" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-6">
        <rect x="20" y="40" width="300" height="120" rx="18" fill="#F0F6FF" stroke="#60A5FA" strokeWidth="2" />
        <rect x="40" y="60" width="80" height="18" rx="6" fill="#FDBA74" />
        <rect x="140" y="60" width="60" height="18" rx="6" fill="#FFD580" />
        <rect x="220" y="60" width="80" height="18" rx="6" fill="#BAE6FD" />
        <rect x="40" y="90" width="100" height="14" rx="5" fill="#E0E7EF" />
        <rect x="160" y="90" width="120" height="14" rx="5" fill="#E0E7EF" />
        <circle cx="70" cy="140" r="11" fill="#FDBA74" />
        <rect x="90" y="132" width="50" height="14" rx="5" fill="#FDE68A" />
        <rect x="150" y="132" width="110" height="14" rx="5" fill="#FDE68A" />
        <rect x="270" y="132" width="30" height="14" rx="5" fill="#BAE6FD" />
        <rect x="40" y="115" width="60" height="8" rx="4" fill="#FFD580" />
        <rect x="110" y="115" width="60" height="8" rx="4" fill="#BAE6FD" />
        <rect x="180" y="115" width="60" height="8" rx="4" fill="#FDBA74" />
        <rect x="250" y="115" width="50" height="8" rx="4" fill="#E0E7EF" />
    </svg>
);

const features = [
    {
        icon: <i className="fa-solid fa-clock text-amber-400 text-3xl mb-3"></i>,
        title: "Time Logging",
        desc: "Track time manually or automatically with a single click."
    },
    {
        icon: <i className="fa-solid fa-list-check text-blue-400 text-3xl mb-3"></i>,
        title: "Task & Project Tracking",
        desc: "Organize your work by tasks and projects for better focus."
    },
    {
        icon: <i className="fa-solid fa-calendar-week text-amber-400 text-3xl mb-3"></i>,
        title: "Daily/Weekly Summaries",
        desc: "See your time breakdown at a glance, every day and week."
    },
    {
        icon: <i className="fa-solid fa-chart-simple text-blue-400 text-3xl mb-3"></i>,
        title: "Simple Reports",
        desc: "Export and review your time logs with clear, simple reports."
    },
    {
        icon: <i className="fa-solid fa-users text-green-400 text-3xl mb-3"></i>,
        title: "Team Collaboration",
        desc: "Invite teammates, share progress, and work together easily."
    }
];

const steps = [
    {
        icon: <i className="fa-solid fa-folder-open text-amber-400 text-2xl mb-2"></i>,
        title: "Set up your projects",
        desc: "Create projects and tasks in seconds."
    },
    {
        icon: <i className="fa-solid fa-play-circle text-blue-400 text-2xl mb-2"></i>,
        title: "Track time as you work",
        desc: "Start the timer or log time manually."
    },
    {
        icon: <i className="fa-solid fa-chart-bar text-green-400 text-2xl mb-2"></i>,
        title: "Review & adjust",
        desc: "See your progress and make improvements."
    }
];

const testimonials = [
    {
        quote: "Finally a time tracker that doesn’t feel like a chore.",
        name: "Freelance Designer"
    },
    {
        quote: "Simple, beautiful, and it just works.",
        name: "Startup Founder"
    },
    {
        quote: "The best tool for solo work and small teams. Love the focus on privacy.",
        name: "Remote Developer"
    }
];

const Landing = () => (
    <div className="font-sans bg-gradient-to-br from-blue-50 via-amber-100 to-blue-200 min-h-screen flex flex-col">
        {/* Hero Section */}
        <header className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-12">
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold text-amber-600 mb-4 tracking-tight" style={{ letterSpacing: '-0.02em' }}>Time That Works for You.</h1>
                <p className="text-lg md:text-2xl text-gray-700 mb-8 font-medium max-w-xl">
                    TimTrack helps you stay focused, log time effortlessly, and manage your work smarter — <span className="text-amber-500 font-bold">100% free, forever.</span>
                </p>
                <Link to="/register" className="inline-block px-8 py-4 bg-amber-400 text-white font-bold rounded-xl shadow-lg text-lg hover:bg-amber-500 transition mb-4">
                    Start Using TimTrack
                </Link>

            </div>
            <div className="flex-1 flex justify-center mt-10 md:mt-0">
                <DashboardIllustration />
            </div>
        </header>

        {/* Features Section */}
        <section className="w-full max-w-6xl mx-auto py-10 px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">What You Can Do with TimTrack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                {features.map((f, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center border border-blue-100 hover:shadow-lg transition">
                        {f.icon}
                        <h3 className="font-semibold text-lg mb-2 text-gray-800">{f.title}</h3>
                        <p className="text-gray-500 text-sm">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* How It Works */}
        <section className="w-full max-w-4xl mx-auto py-10 px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((s, i) => (
                    <div key={i} className="bg-blue-50 rounded-xl p-6 flex flex-col items-center text-center border border-blue-100">
                        {s.icon}
                        <h4 className="font-semibold text-md mb-1 text-gray-800">{s.title}</h4>
                        <p className="text-gray-500 text-sm">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Why TimTrack */}
        <section className="w-full max-w-4xl mx-auto py-10 px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Why TimTrack?</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700 font-medium">
                <li className="flex items-center gap-3"><span className="text-amber-400"><i className="fa-solid fa-circle-check"></i></span>No subscriptions, ever</li>
                <li className="flex items-center gap-3"><span className="text-blue-400"><i className="fa-solid fa-bolt"></i></span>Fast, intuitive interface</li>
                <li className="flex items-center gap-3"><span className="text-blue-400"><i className="fa-solid fa-shield-halved"></i></span>Privacy-focused: no data sharing</li>
                <li className="flex items-center gap-3"><span className="text-green-400"><i className="fa-solid fa-briefcase"></i></span>Built for real-world workflows</li>
            </ul>
        </section>

        {/* Testimonials */}
        <section className="w-full max-w-3xl mx-auto py-10 px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-gray-100">
                        <i className="fa-solid fa-quote-left text-yellow-300 text-2xl mb-2"></i>
                        <p className="text-gray-700 italic mb-3">"{t.quote}"</p>
                        <span className="text-gray-500 text-sm">{t.name}</span>
                    </div>
                ))}
            </div>
        </section>

        {/* Final CTA */}
        <section className="w-full max-w-2xl mx-auto py-10 px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Start tracking your time today. It’s completely free.</h2>
            <Link to="/register" className="inline-block px-10 py-4 bg-amber-400 text-white font-bold rounded-xl shadow-lg text-lg hover:bg-amber-500 transition mb-2">
                Try TimTrack Now
            </Link>
            <div className="text-gray-500 text-sm mt-2">No credit card required. No hidden fees.</div>
        </section>

        {/* Footer */}
        <footer className="w-full  py-6 mt-auto">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4 text-gray-500 text-sm">
                <div className="flex gap-4 mb-2 md:mb-0">
                    <Link to="/about" className="hover:text-amber-500">About</Link>
                    <a href="https://github.com/sainudheenp/timtrack" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
                    <Link to="/contact" className="hover:text-amber-500">Contact</Link>
                    <Link to="/privacy" className="hover:text-amber-500">Privacy Policy</Link>
                </div>
                <div className="flex gap-3">
                    <a href="https://github.com/sainudheenp/timtrack" className="hover:text-blue-400"><i className="fa-brands fa-github"></i></a>
                </div>
                <div className="mt-2 md:mt-0 text-gray-400">&copy; {new Date().getFullYear()} TimTrack</div>
            </div>
        </footer>
    </div>
);

export default Landing;