import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import GuestDashboard from './GuestDashboard';
import AdminDashboard from './AdminDashboard';
import Weather from './Weather';
import HouseInfo from './HouseInfo';
import SetTimes from './SetTimes';
import SetTimesImage from './SetTimesImage'; // 🔥 import the new page for each day's image
import Dining from './Dining';

function Landing({ setUser, setIsAdmin }) {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  function handleLogin() {
    const name = input.toLowerCase().trim();

    if (name === 'admin') {
      setIsAdmin(true);
      navigate('/admin');
    } else {
      // ✅ Trust Firestore guest key
      setUser({ key: name });
      navigate('/dashboard');
    }
  }

  return (
    <div className="page-shell flex items-center justify-center px-4 animate-fade">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-md sm:p-10">
        <div className="flex flex-col gap-6 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-100/80">
            Ultra Miami Residence
            <span className="h-1.5 w-1.5 rounded-full bg-ultraBlue-400 animate-pulse" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold sm:text-5xl font-display">Ultra Welcome Suite</h1>
            <p className="mt-3 text-base text-indigo-100/70 sm:text-lg">
              A luxury hub for Miami Music Week and Ultra festival guests.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src="/ultra-hero.svg"
              alt="Ultra Miami skyline glow"
              className="h-52 w-full object-cover sm:h-64"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your name"
              className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder:text-indigo-100/60 focus:border-ultraBlue-400 focus:outline-none focus:ring-2 focus:ring-ultraBlue-400/40"
            />
            <button className="cta-button w-full sm:w-auto" onClick={handleLogin}>
              Enter
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-indigo-100/70">
            <span className="chip">Concierge service</span>
            <span className="chip">Miami Music Week</span>
            <span className="chip">Ultra schedule</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing setUser={setUser} setIsAdmin={setIsAdmin} />} />
        <Route path="/dashboard" element={<GuestDashboard guest={user} />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/house-info" element={<HouseInfo />} />
        <Route path="/set-times" element={<SetTimes />} /> {/* ✅ New route for set times overview */}
        <Route path="/set-times/:day" element={<SetTimesImage />} /> {/* ✅ Dynamic image page */}
        <Route path="/dining" element={<Dining guest={user} />} />
      </Routes>
    </Router>
  );
}
