import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import TopNav from './TopNav';

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSf1Z0u5i2xEvnhxHcxgsK5i4OixJ9OEdm4gMrn3K9d0SD0b1A/formResponse';

// TODO: Replace these placeholders with actual Google Form entry IDs.
const ENTRY_IDS = {
  fullName: 'entry.2144589778',
  roomNumber: 'entry.474418241',
  dietaryRestrictions: 'entry.245339800',
};

export default function Dining({ guest }) {
  const [firestoreGuest, setFirestoreGuest] = useState(null);
  const [restrictions, setRestrictions] = useState('');
  const [status, setStatus] = useState('idle');
  const [showToast, setShowToast] = useState(false);
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
          <p className="page-subtitle">Please log in again to access dining preferences.</p>
          <div className="mt-6 flex justify-center">
            <button className="ghost-button" onClick={() => navigate('/')}>
              Back to welcome
            </button>
          </div>
        </div>
      </div>
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('submitting');
    const buildingValue = firestoreGuest.building ? `Building ${firestoreGuest.building}` : '';
    const unitValue = firestoreGuest.unit ? `Unit ${firestoreGuest.unit}` : '';
    const residenceValue = [buildingValue, unitValue].filter(Boolean).join(' · ');
    const payload = new URLSearchParams({
      [ENTRY_IDS.fullName]: firestoreGuest.name || '',
      [ENTRY_IDS.roomNumber]: residenceValue,
      [ENTRY_IDS.dietaryRestrictions]: restrictions,
    });

    try {
      await fetch(FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: payload,
      });
      setStatus('submitted');
      setShowToast(true);
      setRestrictions('');
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <div className="page-shell animate-fade">
      <div className="page-container">
        <TopNav />
        <div className="mb-10">
          <h1 className="page-title">Dining</h1>
          <p className="page-subtitle">Weekend dining, curated for your stay.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="card p-6">
            <p className="card-header">Dinner</p>
            <h2 className="card-title">Signature entrees</h2>
            <ul className="mt-4 space-y-2 text-sm text-champagne-400/80">
              <li>Seared salmon, citrus beurre blanc</li>
              <li>Filet mignon, truffle demi-glace</li>
              <li>Wild mushroom risotto</li>
              <li>Heirloom salad, champagne vinaigrette</li>
            </ul>
          </div>

          <div className="card p-6">
            <p className="card-header">Late night</p>
            <h2 className="card-title">Finger foods</h2>
            <ul className="mt-4 space-y-2 text-sm text-champagne-400/80">
              <li>Sliders · Pizza · Quesadillas · Fries</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 card p-6">
          <p className="card-header">Dietary</p>
          <h2 className="card-title">Restrictions or preferences</h2>
          <p className="mt-2 text-sm text-champagne-400/80">
            Share allergies or preferences; our concierge will adjust your menu.
          </p>

          <form className="mt-6 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
            <div>
              <label className="card-header block text-[0.65rem]">
                Full name
              </label>
              <input
                value={firestoreGuest.name || ''}
                readOnly
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
              />
            </div>
            <div>
              <label className="card-header block text-[0.65rem]">
                Building
              </label>
              <input
                value={firestoreGuest.building || ''}
                readOnly
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
              />
            </div>
            <div>
              <label className="card-header block text-[0.65rem]">
                Unit
              </label>
              <input
                value={firestoreGuest.unit || ''}
                readOnly
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="card-header block text-[0.65rem]">
                Dietary restrictions
              </label>
              <textarea
                value={restrictions}
                onChange={(event) => setRestrictions(event.target.value)}
                placeholder="Allergies or preferences…"
                rows={4}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-champagne-400/40 focus:border-gold-500/40 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
                required
              />
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
              <button className="cta-button" type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Send to concierge'}
              </button>
              {status === 'submitted' && (
                <span className="text-sm text-gold-400">Sent.</span>
              )}
              {status === 'error' && (
                <span className="text-sm text-champagne-400/80">Something went wrong. Try again.</span>
              )}
            </div>
          </form>
        </div>

        {showToast && (
          <div className="fixed bottom-6 right-6 z-50 rounded-2xl border border-gold-500/30 bg-luxe-800/95 px-5 py-4 text-sm text-champagne-300 shadow-luxe backdrop-blur-md">
            Request received. Returning to lobby…
          </div>
        )}
      </div>
    </div>
  );
}
