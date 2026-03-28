import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from './TopNav';

export default function GuestDashboard({ guest }) {
  const [showServices, setShowServices] = useState(false);
  const navigate = useNavigate();

  const now = new Date();
  const eastern = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  const hour = eastern.getHours();
  const isOnline = hour >= 9 || hour < 1;

  if (!guest) {
    return (
      <div className="page-shell animate-fade">
        <div className="page-container text-center">
          <h1 className="page-title">Guest not found</h1>
          <p className="page-subtitle">Please double-check your name and try again.</p>
          <div className="mt-6 flex justify-center">
            <button className="ghost-button" onClick={() => navigate('/')}>
              Back to welcome
            </button>
          </div>
        </div>
      </div>
    );
  }

  const renderField = (value) => (
    value ? value : <span className="italic text-champagne-400/60">Please check back later</span>
  );

  return (
    <div className="page-shell animate-fade">
      <div className="page-container">
        <TopNav />
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 shadow-luxe-card">
          <img
            src="/ultra-hero.png"
            alt="Ultra Miami skyline"
            className="w-full h-auto block"
          />
        </div>
        <div className="mb-12 flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="chip">Miami Music Week</span>
            <span className="chip">March 26–29, 2026</span>
          </div>
          <div>
            <h1 className="page-title">Welcome, {guest.name || 'Guest'}</h1>
            <p className="page-subtitle">Your weekend essentials, curated in one place.</p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="card p-6">
            <p className="card-header">Concierge</p>
            <h2 className="card-title">Dedicated support</h2>
            <p className="mt-3 text-sm text-champagne-400/80">
              Status: {isOnline ? <span className="text-gold-400">Online</span> : <span className="text-champagne-400/60">Offline</span>} · {isOnline ? 'Response within 5 minutes' : 'Available 9 AM – 1 AM ET'}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="cta-button" href={`sms:+17864174744?body=${encodeURIComponent(`${guest.name} - Unit ${guest.unit}: `)}`}>Message Concierge</a>
              <a className="ghost-button" href={`sms:+17865255271?body=${encodeURIComponent(`${guest.name} - Unit ${guest.unit}: `)}`}>Technical Support</a>
            </div>
          </div>

          <div className="card-interactive cursor-pointer p-6" onClick={() => navigate('/set-times')}>
            <p className="card-header">Today's Itinerary</p>
            <h2 className="card-title">Saturday, March 28 — Ultra Day 2</h2>
            <div className="mt-4 space-y-3 text-sm text-champagne-400/80">
              <div>
                <p className="font-semibold text-gold-400">6:45 PM</p>
                <p>Departure</p>
              </div>
              <div className="lux-divider" />
              <div>
                <p className="font-semibold text-white">7:25 PM</p>
                <p>Excision</p>
              </div>
              <div className="lux-divider" />
              <div>
                <p className="font-semibold text-white">8:30 PM</p>
                <p>Hardwell</p>
              </div>
              <div className="lux-divider" />
              <div>
                <p className="font-semibold text-white">9:35 PM</p>
                <p>Armin van Buuren</p>
              </div>
              <div className="lux-divider" />
              <div>
                <p className="font-semibold text-white">10:45 PM</p>
                <p>Sebastian Ingrosso B2B Steve Angello</p>
              </div>
            </div>
            <p className="mt-4 text-sm font-medium text-gold-400">View set times →</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div
            className="card-interactive flex h-36 cursor-pointer items-center justify-center text-center text-lg font-semibold text-white"
            onClick={() => navigate('/house-info')}
          >
            Residence
          </div>

          <div className="card p-5">
            <p className="card-header">Your stay</p>
            <h2 className="card-title">Building & unit</h2>
            <p className="mt-3 text-sm text-champagne-400/80">
              Building: {renderField(guest.building)}<br />
              Unit: {renderField(guest.unit)}
            </p>
          </div>

          <div
            className="card-interactive flex cursor-pointer flex-col items-center justify-center p-5 text-center"
            onClick={() => setShowServices(!showServices)}
          >
            <p className="card-header">On-demand</p>
            <h2 className="card-title">Services</h2>
            {showServices && (
              <div className="mt-4 space-y-2 text-sm text-champagne-400/80">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">Laundry – TBD</div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  Cleaning · 3 PM – 7 PM daily<br />(Leave unit door unlocked during this window)
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <a href={`sms:+17864174744?body=${encodeURIComponent(`${guest.name} - Unit ${guest.unit}: `)}`} className="text-gold-400 hover:underline">Another request</a>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <a href={`sms:+17865255271?body=${encodeURIComponent(`${guest.name} - Unit ${guest.unit}: `)}`} className="text-gold-400 hover:underline">Technical support</a>
                </div>
              </div>
            )}
          </div>

          {/* HIDDEN — bring back later this week
          <div
            className="card-interactive cursor-pointer p-5"
            onClick={() => navigate('/dining')}
          >
            <p className="card-header">Dining</p>
            <h2 className="card-title">Food & beverage</h2>
            <p className="mt-3 text-sm text-champagne-400/80">
              Brunch: 10 AM – 1 PM · Late-night: 1–3 AM
            </p>
          </div>
          */}

          <div className="card p-5">
            <p className="card-header">Forecast</p>
            <h2 className="card-title">Miami weather</h2>
            <a
              href="https://weather.com/weather/tenday/l/33139"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-sm font-medium text-gold-400 hover:underline"
            >
              View forecast
            </a>
          </div>

          <div className="card p-5">
            <p className="card-header">Wifi</p>
            <h2 className="card-title">Connect to network</h2>
            <div className="mt-3 space-y-2 text-sm text-champagne-400/80">
              <p>
                SSID: <span className="font-semibold text-white">XCVR</span>
              </p>
              <p>
                Password: <span className="font-mono font-semibold text-white">lazpmu8q</span>
              </p>
            </div>
          </div>

          <div
            className="card-interactive flex h-36 cursor-pointer items-center justify-center text-center text-lg font-semibold text-white"
            onClick={() => navigate('/penthouse')}
          >
            Sunset Session
          </div>

          <div
            className="card-interactive flex h-36 cursor-pointer items-center justify-center text-center text-lg font-semibold text-white"
            onClick={() => navigate('/set-times')}
          >
            Ultra Set Times
          </div>

          <div
            className="card-interactive flex h-36 cursor-pointer items-center justify-center text-center text-lg font-semibold text-white"
            onClick={() => navigate('/photos')}
          >
            Share Your Pictures
          </div>

          <div
            className="card-interactive col-span-full flex h-28 cursor-pointer items-center justify-center text-center text-lg font-semibold text-white"
            onClick={() => window.location.href = `sms:+17864174744?body=${encodeURIComponent(`${guest.name} - Unit ${guest.unit}: `)}`}
          >
            Request something else
          </div>
        </div>
      </div>
    </div>
  );
}
