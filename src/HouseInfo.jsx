import TopNav from './TopNav';

export default function HouseInfo() {
  return (
    <div className="page-shell animate-fade">
      <div className="page-container">
        <TopNav />
        <div className="mb-10 text-center">
          <h1 className="page-title">Residence</h1>
          <p className="page-subtitle">Your home base for Miami Music Week.</p>
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

        <div className="mb-10 grid gap-5">
          <div className="card p-6">
            <p className="card-header">House notes</p>
            <h2 className="card-title">Quiet luxury</h2>
            <ul className="mt-4 space-y-2 text-sm text-champagne-400/80">
              <li>Quiet hours: 2:00 AM – 10:00 AM</li>
              <li>Keep doors unlocked when leaving</li>
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
