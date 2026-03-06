import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { supabase } from './supabase';
import GuestDashboard from './GuestDashboard';
import AdminDashboard from './AdminDashboard';
import Weather from './Weather';
import HouseInfo from './HouseInfo';
import SetTimes from './SetTimes';
import Penthouse from './Penthouse';
import Dining from './Dining';

function Landing({ setUser, setIsAdmin }) {
  const [input, setInput] = useState('');
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState('');
  const [searching, setSearching] = useState(false);
  const navigate = useNavigate();

  async function handleLogin() {
    const name = input.trim();
    if (!name) return;

    if (name.toLowerCase() === 'admin') {
      setIsAdmin(true);
      navigate('/admin');
      return;
    }

    setSearching(true);
    setError('');
    setMatches([]);

    const { data, error: fetchError } = await supabase
      .from('guests')
      .select('*')
      .or(`first_name.ilike.${name},name.ilike.%${name}%`);

    setSearching(false);

    if (fetchError) {
      setError('Something went wrong. Please try again.');
      return;
    }

    if (!data || data.length === 0) {
      setError('No guest found with that name. Please check your spelling or contact the concierge.');
      return;
    }

    if (data.length === 1) {
      setUser(data[0]);
      navigate('/dashboard');
    } else {
      setMatches(data);
    }
  }

  function selectGuest(guest) {
    setUser(guest);
    navigate('/dashboard');
  }

  return (
    <div className="page-shell flex min-h-screen items-center justify-center px-5 py-12 animate-fade">
      <div className="card w-full max-w-xl p-10 sm:p-12">
        <div className="flex flex-col gap-8 text-center">
          <div className="mx-auto lux-pill flex items-center gap-2">
            Ultra Miami Residence
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" aria-hidden />
          </div>
          <div>
            <h1 className="font-display text-3xl font-medium tracking-tight text-white sm:text-5xl" style={{ letterSpacing: '-0.02em' }}>
              Welcome Suite
            </h1>
            <p className="page-subtitle mt-3">
              Your private concierge hub for Miami Music Week and Ultra.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-luxe-card">
            <img
              src="/ultra-hero.svg"
              alt="Ultra Miami skyline"
              className="h-52 w-full object-cover sm:h-64"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-stretch">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              placeholder="Enter your first name"
              className="w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 text-base text-white placeholder:text-champagne-400/50 focus:border-gold-500/50 focus:outline-none focus:ring-2 focus:ring-gold-500/30"
            />
            <button className="cta-button w-full sm:w-auto" onClick={handleLogin} disabled={searching}>
              {searching ? 'Searching…' : 'Enter'}
            </button>
          </div>

          {error && (
            <p className="text-sm text-champagne-400/80">{error}</p>
          )}

          {matches.length > 1 && (
            <div className="text-left space-y-3">
              <p className="text-sm text-champagne-400/80 text-center">Multiple guests found. Please select:</p>
              {matches.map((g) => (
                <button
                  key={g.id}
                  onClick={() => selectGuest(g)}
                  className="card-interactive w-full cursor-pointer p-4 text-left"
                >
                  <p className="font-semibold text-white">{g.name}</p>
                  <p className="text-sm text-champagne-400/80">
                    {[g.building && `Building ${g.building}`, g.unit && `Unit ${g.unit}`].filter(Boolean).join(' · ') || 'No unit info'}
                  </p>
                </button>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="chip">Concierge</span>
            <span className="chip">Miami Music Week</span>
            <span className="chip">Ultra 2026</span>
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
        <Route path="/set-times" element={<SetTimes />} />
        <Route path="/penthouse" element={<Penthouse guest={user} />} />
        <Route path="/dining" element={<Dining guest={user} />} />
      </Routes>
    </Router>
  );
}
