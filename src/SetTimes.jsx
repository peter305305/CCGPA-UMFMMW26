import TopNav from './TopNav';

const days = [
  {
    label: 'Friday',
    date: 'March 27, 2026',
    image: null,
    stages: [
      {
        name: 'Main Stage',
        artists: [
          '4:00 PM — Frank Walker',
          '4:50 PM — Voyd',
          '5:55 PM — Worship',
          '7:00 PM — Illenium',
          '8:05 PM — Bzrp',
          '9:20 PM — Alesso B2B Martin Garrix',
          '10:45 PM — Major Lazer ✦',
        ],
      },
      {
        name: 'Worldwide Stage',
        artists: [
          '4:00 PM — Prada2000',
          '5:00 PM — Matty Ralph',
          '6:00 PM — Superstrings',
          '7:00 PM — Vini Vici',
          '8:00 PM — Lily Palmer',
          '9:00 PM — Armin van Buuren B2B Marlon Hoffstadt',
          '10:30 PM — Armin van Buuren ✦',
        ],
      },
      {
        name: 'RESISTANCE Megastructure',
        artists: [
          '4:00 PM — Mar-T',
          '5:30 PM — Massano',
          '7:00 PM — Miss Monique',
          '8:30 PM — Vintage Culture',
          '10:00 PM — Eric Prydz ✦',
        ],
      },
      {
        name: 'The Cove (RESISTANCE)',
        artists: [
          '4:00 PM — Godtripper',
          '5:30 PM — Alt8',
          '7:00 PM — 999999999',
          '8:30 PM — Clara Cuve',
          '10:00 PM — Sara Landry ✦',
        ],
      },
      {
        name: 'Live Stage',
        artists: [
          '5:00 PM — Afrobeta',
          '6:15 PM — Shima',
          '7:45 PM — Black Tiger Sex Machine',
          '9:15 PM — Of the Trees',
          '10:45 PM — Levity Presents Lasership ✦',
        ],
      },
      {
        name: 'UMF Radio',
        artists: [
          '4:00 PM — Linney',
          '4:30 PM — Ookay',
          '5:15 PM — Nostalgix',
          '6:15 PM — Jessica Audiffred',
          '7:15 PM — Steve Aoki',
          '8:15 PM — Special Guest B2B Special Guest',
          '9:15 PM — Laidback Luke',
          '10:15 PM — Riot Ten',
          '11:15 PM — Bloody Beetroots ✦',
        ],
      },
      {
        name: 'The Oasis',
        artists: [
          '4:00 PM — Nundo',
          '5:00 PM — Richard Fraioli B3B Jimmy Page B3B DJ Ideal',
          '6:30 PM — Los de la Vega',
          '7:30 PM — Hymm Marley',
          '8:00 PM — Tak Shak',
          '9:00 PM — Rodrigo Vieira',
          '10:00 PM — DJ Hannah',
          '11:00 PM — Luca Testa ✦',
        ],
      },
    ],
  },
  {
    label: 'Saturday',
    date: 'March 28, 2026',
    image: null,
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
    image: null,
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
                {day.image && (
                  <div className="overflow-hidden">
                    <img
                      src={day.image}
                      alt={`${day.label} set times`}
                      className="w-full object-cover"
                    />
                  </div>
                )}
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
