import TopNav from './TopNav';

const days = [
  {
    label: 'Friday',
    date: 'March 27, 2026',
    image: '/friday.jpg',
    stages: [
      {
        name: 'Main Stage',
        artists: ['Major Lazer', 'ILLENIUM', 'Alesso B2B Martin Garrix', 'Dom Dolla', 'John Summit'],
      },
      {
        name: 'RESISTANCE Megastructure',
        artists: ['Eric Prydz', 'Vintage Culture', 'Miss Monique', 'Massano'],
      },
      {
        name: 'Worldwide Stage',
        artists: ['Armin van Buuren B2B Marlon Hoffstadt', 'Andy C', 'Peekaboo', 'Ray Volpe B2B Sullivan King', 'BOLO'],
      },
      {
        name: 'Live Stage',
        artists: ['ZHU', 'Louis The Child', 'PARISI'],
      },
      {
        name: 'RESISTANCE Cove',
        artists: ['The Martinez Brothers', 'Dennis Cruz B2B Seth Troxler', 'Rossi.'],
      },
    ],
  },
  {
    label: 'Saturday',
    date: 'March 28, 2026',
    image: '/saturday.jpg',
    stages: [
      {
        name: 'Main Stage',
        artists: ['Sebastian Ingrosso B2B Steve Angello', 'Armin van Buuren', 'Hardwell', 'Excision', 'Alan Walker'],
      },
      {
        name: 'RESISTANCE Megastructure',
        artists: ['Carl Cox', 'Adam Beyer B2B Joseph Capriati', 'Sasha B2B John Digweed', 'Eli Brown', 'Juliet Fox'],
      },
      {
        name: 'Worldwide Stage',
        artists: ['ISOxo', 'Kai Wachi', 'Bou', 'ARMNHMR', 'Daniel Allan'],
      },
      {
        name: 'Live Stage',
        artists: ['Madeon', 'Boys Noize', 'Brutalismus 3000'],
      },
    ],
  },
  {
    label: 'Sunday',
    date: 'March 29, 2026',
    image: '/sunday.jpg',
    stages: [
      {
        name: 'Main Stage',
        artists: ['John Summit', 'DJ Snake', 'Afrojack', 'ARTBAT', 'Maddix', 'R3HAB'],
      },
      {
        name: 'RESISTANCE Megastructure',
        artists: ['Amelie Lens B2B Sara Landry', 'Boris Brejcha', 'Adriatique', 'Argy B2B Mind Against'],
      },
      {
        name: 'RESISTANCE Cove',
        artists: ['The Martinez Brothers', 'Joris Voorn B2B Korolova', 'Cassian', 'Colyn B2B Innellea'],
      },
      {
        name: 'Worldwide Stage',
        artists: ['WORSHIP', 'Black Tiger Sex Machine', 'SVDDEN DEATH'],
      },
    ],
  },
];

export default function SetTimes() {
  return (
    <div className="page-shell animate-fade">
      <div className="page-container">
        <TopNav />
        <div className="mb-10 text-center">
          <h1 className="page-title">Ultra Music Festival</h1>
          <p className="page-subtitle">March 27–29, 2026 · Bayfront Park, Miami</p>
        </div>

        {/* Official running order */}
        <div className="card overflow-hidden mb-10">
          <div className="border-b border-white/10 bg-white/[0.03] px-6 py-4 text-center">
            <h2 className="font-display text-xl font-medium text-white">Official Running Order</h2>
            <p className="text-sm text-champagne-400/70">All stages · All days</p>
          </div>
          <img
            src="/set-times-all.png"
            alt="Ultra Miami 2026 official running order — all stages"
            className="w-full object-contain"
          />
        </div>

        <div className="lux-divider mb-10" />

        <div className="space-y-10">
          {days.map((day, i) => (
            <div key={day.label}>
              {i > 0 && <div className="lux-divider mb-10" />}
              <div className="card overflow-hidden">
                <div className="border-b border-white/10 bg-white/[0.03] px-6 py-4 text-center">
                  <h2 className="font-display text-xl font-medium text-white">{day.label}</h2>
                  <p className="text-sm text-champagne-400/70">{day.date}</p>
                </div>
                <div className="overflow-hidden">
                  <img
                    src={day.image}
                    alt={`${day.label} set times`}
                    className="w-full object-cover"
                  />
                </div>
                <div className="px-6 py-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {day.stages.map((stage) => (
                      <div key={stage.name} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-3">
                          {stage.name}
                        </p>
                        <ul className="space-y-1.5 text-sm text-champagne-400/80">
                          {stage.artists.map((artist) => (
                            <li key={artist} className="text-white/90">{artist}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
