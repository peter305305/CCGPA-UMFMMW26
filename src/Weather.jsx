import TopNav from './TopNav';

export default function Weather() {
  return (
    <div className="page-shell animate-fade">
      <div className="page-container">
        <TopNav />
        <div className="mb-8">
          <h1 className="page-title">Miami Beach Weather</h1>
          <p className="page-subtitle">Live forecast for Ultra week · March 26–29, 2026</p>
        </div>
        <div className="card overflow-hidden rounded-2xl">
          <iframe
            title="Weather"
            src="https://forecast7.com/en/25d79n80d13/miami-beach/?unit=us"
            className="w-full"
            style={{ height: '580px' }}
            frameBorder="0"
          />
        </div>
        <div className="mt-5 card p-6">
          <p className="card-header">Quick reference</p>
          <h2 className="card-title">What to expect</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3 text-sm text-champagne-400/80">
            <div>
              <p className="font-semibold text-white">Temperature</p>
              <p>High 80s °F / Low 70s °F</p>
            </div>
            <div>
              <p className="font-semibold text-white">Conditions</p>
              <p>Partly cloudy, chance of showers</p>
            </div>
            <div>
              <p className="font-semibold text-white">Tip</p>
              <p>Sunscreen, hat, and a light rain layer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
