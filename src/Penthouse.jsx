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
                <p className="font-semibold text-white">6:00 PM – 12:00 AM</p>
                <p>Main event</p>
              </div>
              <div className="lux-divider" />
              <div>
                <p className="font-semibold text-white">8:00 PM – 10:00 PM</p>
                <p>Dinner service</p>
              </div>
              <div className="lux-divider" />
              <div>
                <p className="font-semibold text-white">12:00 AM – 4:00 AM</p>
                <p>After party</p>
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

          <div className="card col-span-full p-6 border-ultraPink-500/20">
            <p className="card-header text-ultraPink-400">Food & Drink</p>
            <h2 className="card-title">Menu</h2>
            <div className="mt-4 text-sm text-champagne-400/80">
              <p className="font-semibold text-white">Open bar</p>
              <p className="mt-1">Premium spirits · Signature cocktails</p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ultraPink-400">Charcuterie</p>
                <p className="mt-1 text-sm text-champagne-400/80">Curated charcuterie bar</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ultraPink-400">Hors d'Oeuvres</p>
                <ul className="mt-1 space-y-1 text-sm text-champagne-400/80">
                  <li><span className="text-white">Wagyu Crispy Rice</span> · ponzu gel, micro herbs</li>
                  <li><span className="text-white">Avocado Tartare</span> · cucumber rounds, tajín, gold flakes</li>
                  <li><span className="text-white">Cheeseburger Slider</span> · cheddar, pickled onion, pickle skewer</li>
                  <li><span className="text-white">Pigs in a Blanket</span> · golden puff pastry</li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ultraPink-400">Entrées</p>
                <ul className="mt-1 space-y-1 text-sm text-champagne-400/80">
                  <li><span className="text-white">Sirloin</span> · herb chimichurri</li>
                  <li><span className="text-white">Herb Chicken</span> · creamy sauce, fresh herbs</li>
                  <li><span className="text-white">Stuffed Bell Peppers</span> · quinoa, black beans, plant-based cheese</li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ultraPink-400">Salads</p>
                <ul className="mt-1 space-y-1 text-sm text-champagne-400/80">
                  <li><span className="text-white">Summer Salad</span> · watermelon, feta, mint, lemon dressing</li>
                  <li><span className="text-white">Caesar Salad</span> · Parmigiano crisps, sourdough croutons</li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ultraPink-400">Sides</p>
                <ul className="mt-1 space-y-1 text-sm text-champagne-400/80">
                  <li><span className="text-white">Roasted Vegetables</span> · zucchini, squash, peppers, broccoli</li>
                  <li><span className="text-white">Cheddar Mashed Potatoes</span> · butter, chives</li>
                  <li><span className="text-white">Penne al Vodka</span> · tomato cream sauce, basil</li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ultraPink-400">Bread & Butter</p>
                <p className="mt-1 text-sm text-champagne-400/80">
                  Sourdough, baguette, ciabatta, multigrain · Compound butters: herb, honey-cinnamon, everything bagel, olive-lemon-za'atar, sun-dried tomato
                </p>
              </div>

              <div className="sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-ultraPink-400">Desserts <span className="normal-case text-champagne-400/60">· passed shooters</span></p>
                <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm text-champagne-400/80">
                  <span>Chocolate Mousse</span><span>·</span>
                  <span>Key Lime Pie</span><span>·</span>
                  <span>Strawberry Shortcake</span><span>·</span>
                  <span>Raspberry Panna Cotta</span><span>·</span>
                  <span>Passionfruit Cheesecake</span><span>·</span>
                  <span>Tiramisu</span><span>·</span>
                  <span>Dubai Style Chocolate</span>
                </div>
              </div>
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
