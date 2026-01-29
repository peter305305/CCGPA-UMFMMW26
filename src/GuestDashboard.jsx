import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import TopNav from './TopNav';

export default function GuestDashboard({ guest }) {
  const [firestoreGuest, setFirestoreGuest] = useState(null);
  const [showServices, setShowServices] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchGuest() {
      if (!guest?.key) return;
      const docRef = doc(db, 'guests', guest.key);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setFirestoreGuest(docSnap.data());
      } else {
        setFirestoreGuest(null);
      }
    }
    fetchGuest();
  }, [guest]);

  if (!firestoreGuest) {
    return (
      <div className="page-shell animate-fade">
        <div className="page-container text-center">
          <h1 className="page-title">Guest not found</h1>
          <p className="page-subtitle">Please double-check your name and try again.</p>
          <div className="mt-6 flex justify-center">
            <button className="ghost-button" onClick={() => navigate('/')}>
              ← Back to login
            </button>
          </div>
        </div>
      </div>
    );
  }

  const renderField = (value) => (
    value ? value : <span className="italic text-red-600">Please check back later</span>
  );

  return (
    <div className="page-shell animate-fade">
      <div className="page-container">
        <TopNav />
        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
          <img
            src="/ultra-hero.svg"
            alt="Ultra Miami skyline glow"
            className="h-56 w-full object-cover sm:h-72"
          />
        </div>
        <div className="mb-10 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="chip">Miami Music Week</span>
            <span className="chip">March 26–29, 2026</span>
          </div>
          <div>
            <h1 className="page-title">Hi {firestoreGuest.name || 'Guest'} 👋</h1>
            <p className="page-subtitle">Your Ultra-weekend essentials, curated in one place.</p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="card p-6">
            <p className="card-header">Concierge Desk</p>
            <h2 className="card-title">At-your-service, hotel-level support</h2>
            <p className="mt-3 text-sm text-indigo-100/80">
              Status: <span className="text-ultraBlue-400">Online</span> · Typical response under 5 minutes
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a className="cta-button" href="sms:+447846763369">Message Concierge</a>
              <a className="ghost-button" href="sms:+17865255271">Technical Support</a>
            </div>
          </div>

          <div className="card p-6">
            <p className="card-header">Today’s Itinerary</p>
            <h2 className="card-title">Signature moments</h2>
            <div className="mt-4 space-y-3 text-sm text-indigo-100/80">
              <div>
                <p className="font-semibold text-white">3:00 PM</p>
                <p>Party bus departure</p>
              </div>
              <div className="lux-divider" />
              <div>
                <p className="font-semibold text-white">10:00 AM – 1:00 PM</p>
                <p>Brunch service in residence</p>
              </div>
              <div className="lux-divider" />
              <div>
                <p className="font-semibold text-white">1:00 AM – 3:00 AM</p>
                <p>Late-night bites</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div
            className="card-interactive flex h-36 items-center justify-center text-center text-lg font-semibold"
            onClick={() => navigate('/house-info')}
          >
            🏝 Residence Info
          </div>

          <div className="card p-5">
            <p className="card-header">Your stay</p>
            <h2 className="card-title">🏙 Building & Unit</h2>
            <p className="mt-3 text-sm text-indigo-100/80">
              Building: {renderField(firestoreGuest.building)}<br />
              Unit: {renderField(firestoreGuest.unit)}<br />
              Arrival: {renderField(firestoreGuest.arrival)}<br />
              Departure: {renderField(firestoreGuest.departure)}
            </p>
          </div>

          <div
            className="card-interactive flex flex-col items-center justify-center p-5 text-center"
            onClick={() => setShowServices(!showServices)}
          >
            <p className="card-header">On-demand</p>
            <h2 className="card-title">🧼 Services</h2>
            {showServices && (
              <div className="mt-4 space-y-2 text-sm text-indigo-100/80">
                <div className="rounded-xl border border-white/10 bg-white/10 p-3">🧺 Laundry – TBD</div>
                <div className="rounded-xl border border-white/10 bg-white/10 p-3">
                  🧹 Cleaning<br />Cleaning Hours: 3 PM – 7 PM daily<br />(Please leave your unit door unlocked during this window)
                </div>
                <div className="rounded-xl border border-white/10 bg-white/10 p-3">
                  <a href="sms:+447846763369" className="text-glow-300 underline">📲 Need another request?</a>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/10 p-3">
                  <a href="sms:+17865255271" className="text-glow-300 underline">🧰 Technical Support?</a>
                </div>
              </div>
            )}
          </div>

          <div
            className="card-interactive p-5"
            onClick={() => navigate('/dining')}
          >
            <p className="card-header">Dining</p>
            <h2 className="card-title">🍳 Food</h2>
            <p className="mt-3 text-sm text-indigo-100/80">
              Brunch: 10 AM – 1 PM<br />Late-Night: 1–3 AM
            </p>
          </div>

          <div className="card p-5">
            <p className="card-header">Getting around</p>
            <h2 className="card-title">🚐 Transport</h2>
            <p className="mt-3 text-sm text-indigo-100/80">
              Party Bus: 3 PM<br />
              Private Car: <a href="sms:+16452219584" className="text-glow-300 underline">Click here!</a> 1hr ahead
            </p>
          </div>

          <div className="card p-5">
            <p className="card-header">Forecast</p>
            <h2 className="card-title">☀️ Miami Weather</h2>
            <a
              href="https://weather.com/weather/tenday/l/33139"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-sm font-semibold text-glow-300 underline"
            >
              Check weather forecast
            </a>
          </div>

          <div
            className="card-interactive col-span-full flex h-36 items-center justify-center text-center text-lg font-semibold"
            onClick={() => navigate('/set-times')}
          >
            🎶 Set Times
          </div>

          <div
            className="card-interactive col-span-full flex h-28 items-center justify-center text-center text-lg font-semibold"
            onClick={() => window.location.href = "sms:+447846763369"}
          >
            📲 Need something else?
          </div>
        </div>
      </div>
    </div>
  );
}
