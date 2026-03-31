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
import PhotoUpload from './PhotoUpload';

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
          </div>
          <div>
            <h1 className="font-display text-3xl font-medium tracking-tight text-white sm:text-5xl" style={{ letterSpacing: '-0.02em' }}>
              Thank You
            </h1>
            <p className="page-subtitle mt-3">
              Miami Music Week 2026 has come to a close.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-luxe-card">
            <img
              src="/ultra-hero.png"
              alt="Ultra Miami skyline"
              className="w-full h-auto block"
            />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-champagne-400/80 leading-relaxed">
              Thank you for an incredible weekend at the Bentley Bay. We hope you had the time of your life at Ultra and throughout Miami Music Week. Until next year.
            </p>
          </div>

          <div
            className="card-interactive flex cursor-pointer items-center justify-center rounded-2xl p-5 text-center"
            onClick={() => navigate('/photos')}
          >
            <div>
              <p className="card-header">Photos</p>
              <h2 className="card-title">Share Your Pictures</h2>
              <p className="mt-2 text-sm text-champagne-400/80">Upload your best moments from the weekend</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
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
        <Route path="/photos" element={<PhotoUpload guest={user} />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<Landing setUser={setUser} setIsAdmin={setIsAdmin} />} />
      </Routes>
    </Router>
  );
}
