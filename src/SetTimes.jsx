import TopNav from './TopNav';

export default function SetTimes() {
  return (
    <div className="page-shell animate-fade">
      <div className="page-container">
        <TopNav />
        <div className="mb-8 text-center">
          <h1 className="page-title">🎶 Set Times</h1>
          <p className="page-subtitle">March 26–29, 2026 lineup.</p>
        </div>
        <div className="space-y-8">
          <div className="card overflow-hidden">
            <div className="border-b border-white/10 bg-white/5 px-6 py-4 text-center">
              <h2 className="text-xl font-semibold">Friday</h2>
            </div>
            <div className="px-6 py-10 text-center text-sm text-indigo-100/70">
              Set times coming soon.
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="border-b border-white/10 bg-white/5 px-6 py-4 text-center">
              <h2 className="text-xl font-semibold">Saturday</h2>
            </div>
            <div className="px-6 py-10 text-center text-sm text-indigo-100/70">
              Set times coming soon.
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="border-b border-white/10 bg-white/5 px-6 py-4 text-center">
              <h2 className="text-xl font-semibold">Sunday</h2>
            </div>
            <div className="px-6 py-10 text-center text-sm text-indigo-100/70">
              Set times coming soon.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
