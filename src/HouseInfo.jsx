import { useEffect, useState } from 'react';
import TopNav from './TopNav';

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg"
];

export default function HouseInfo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-shell animate-fade">
      <div className="page-container">
        <TopNav />
        <div className="mb-10 text-center">
          <h1 className="page-title">Residence</h1>
          <p className="page-subtitle">Tap the address for directions; explore the gallery below.</p>
        </div>

        <div className="card mb-10 overflow-hidden">
          <div className="relative">
            <img
              src={images[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              className="h-80 w-full object-cover transition-all duration-700"
            />
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 px-3 py-2 text-lg text-white backdrop-blur-sm transition hover:bg-black/70 hover:border-gold-500/30"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 px-3 py-2 text-lg text-white backdrop-blur-sm transition hover:bg-black/70 hover:border-gold-500/30"
              aria-label="Next image"
            >
              →
            </button>
          </div>
        </div>

        <div className="card mb-8 p-6 text-center">
          <a
            href="https://www.google.com/maps/place/520-540+West+Ave,+Miami+Beach,+FL+33139"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-gold-400 hover:underline sm:text-lg"
          >
            520-540 West Ave, Miami Beach, FL 33139
          </a>
        </div>

        <div className="mb-10 grid gap-5 sm:grid-cols-2">
          <div className="card p-6">
            <p className="card-header">Amenities</p>
            <h2 className="card-title">Curated for comfort</h2>
            <ul className="mt-4 space-y-2 text-sm text-champagne-400/80">
              <li>Tennis court · Canoes · Paddleboarding</li>
              <li>Pool · Beach volleyball · Pickleball</li>
              <li>Movie theater · Indoor spa · Sauna</li>
              <li>Billiards · Air hockey · Ping pong · Foosball</li>
            </ul>
          </div>

          <div className="card p-6">
            <p className="card-header">House notes</p>
            <h2 className="card-title">Quiet luxury</h2>
            <ul className="mt-4 space-y-2 text-sm text-champagne-400/80">
              <li>Quiet hours: 2:00 AM – 8:00 AM</li>
              <li>Pool closes at 2:00 AM</li>
              <li>Keep doors locked when leaving</li>
              <li>Concierge handles all requests</li>
            </ul>
          </div>
        </div>

        <div className="card mb-10 overflow-hidden rounded-2xl">
          <iframe
            title="Map to residence"
            src="https://maps.google.com/maps?q=520-540%20West%20Ave,%20Miami%20Beach,%20FL%2033139&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="320"
            className="w-full"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
