import TopNav from './TopNav';

export default function Weather() {
  return (
    <div className="page-shell animate-fade">
      <div className="page-container">
        <TopNav />
        <div className="mb-6">
          <h1 className="page-title">☀️ Miami Beach Weather</h1>
          <p className="page-subtitle">Live forecast for Ultra week.</p>
        </div>
        <div className="card overflow-hidden">
          <iframe
            title="Weather"
            src="https://forecast7.com/en/25d79n80d13/miami-beach/?unit=us"
            className="h-96 w-full"
          />
        </div>
      </div>
    </div>
  );
}
