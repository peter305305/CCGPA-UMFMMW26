import { useNavigate } from 'react-router-dom';
import TopNav from './TopNav';

export default function Penthouse({ guest }) {
  const navigate = useNavigate();

  return (
    <div className="page-shell animate-fade">
      <div className="page-container">
        <TopNav />
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 lux-pill inline-flex items-center gap-2">
            Private Event
            <span className="h-1.5 w-1.5 rounded-full bg-ultraPink-400 animate-pulse" aria-hidden />
          </div>
          <h1 className="page-title">Sunset Session</h1>
          <p className="page-subtitle">Thursday, March 26, 2026</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="card p-6 border-ultraPink-500/20">
            <p className="card-header text-ultraPink-400">Schedule</p>
            <h2 className="card-title">Event timing</h2>
            <div className="mt-4 space-y-3 text-sm text-champagne-400/80">
              <div>
                <p className="font-semibold text-white">6:00 PM</p>
                <p>Doors open</p>
              </div>
              <div className="lux-divider" />
              <div>
                <p className="font-semibold text-white">6:00 PM – 4:00 AM</p>
                <p>Main event</p>
              </div>
              <div className="lux-divider" />
              <div>
                <p className="font-semibold text-white">12:00 AM</p>
                <p>Party goes inside</p>
              </div>
              <div className="lux-divider" />
              <div>
                <p className="font-semibold text-white">4:00 AM</p>
                <p>Event ends</p>
              </div>
            </div>
          </div>

          <div className="card p-6 border-ultraPink-500/20">
            <p className="card-header text-ultraPink-400">Venue</p>
            <h2 className="card-title">Location</h2>
            <div className="mt-4 text-sm text-champagne-400/80">
              <p className="font-semibold text-white">Bentley Bay Penthouse 23</p>
              <p className="mt-1">520 West Ave, Miami Beach, FL 33139</p>
              <p className="mt-3">Rooftop level · Panoramic bay views</p>
              <p className="mt-1 text-champagne-400/60">Elevator access from main lobby</p>
            </div>
          </div>

          <div className="card p-6 border-ultraPink-500/20">
            <p className="card-header text-ultraPink-400">Attire</p>
            <h2 className="card-title">Dress code</h2>
            <div className="mt-4 text-sm text-champagne-400/80">
              <p className="font-semibold text-white">Upscale casual</p>
              <p className="mt-1">Miami chic · No athletic wear</p>
              <p className="mt-3 text-champagne-400/60">Think cocktail attire with a relaxed vibe.</p>
            </div>
          </div>

          <div className="card p-6 border-ultraPink-500/20">
            <p className="card-header text-ultraPink-400">Food & Drink</p>
            <h2 className="card-title">Menu</h2>
            <div className="mt-4 text-sm text-champagne-400/80">
              <p className="font-semibold text-white">Open bar & passed bites</p>
              <p className="mt-1">Premium spirits · Signature cocktails</p>
              <p className="mt-1">Chef-curated hors d'oeuvres</p>
            </div>
          </div>

          <div className="card col-span-full p-6 border-ultraPink-500/20">
            <p className="card-header text-ultraPink-400">Entertainment</p>
            <h2 className="card-title">Lineup</h2>
            <div className="mt-4 text-center text-sm text-champagne-400/80">
              <p className="text-lg font-display text-white">Live DJ sets · Surprise guests</p>
              <p className="mt-2 text-champagne-400/60">Full lineup announcement coming soon</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a className="cta-button" href={`sms:+17864174744?body=${encodeURIComponent(`${guest?.name || ''} - Unit ${guest?.unit || ''}: `)}`}>
            Message Concierge
          </a>
          <button className="ghost-button" onClick={() => navigate('/dashboard')}>
            Back to Lobby
          </button>
        </div>
      </div>
    </div>
  );
}
