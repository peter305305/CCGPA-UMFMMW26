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
        artists: [
          '12:00 PM — Gil Glaze',
          '12:55 PM — Mykris',
          '2:00 PM — Halo',
          '3:05 PM — Nicky Romero',
          '4:10 PM — Loud Luxury',
          '5:15 PM — Alan Walker',
          '6:20 PM — Steve Aoki',
          '7:25 PM — Excision',
          '8:30 PM — Hardwell',
          '9:35 PM — Armin van Buuren',
          '10:45 PM — Sebastian Ingrosso B2B Steve Angello ✦',
        ],
      },
      {
        name: 'Worldwide Stage',
        artists: [
          '12:10 PM — Julian Cross',
          '1:00 PM — Distinct Motive',
          '2:00 PM — Sidequest',
          '3:00 PM — Daniel Allan',
          '4:00 PM — ARMNHMR',
          '5:00 PM — Hol!',
          '6:00 PM — Bou',
          '7:00 PM — Kai Wachi',
          '8:00 PM — Outlaw B2B Trym',
          '9:00 PM — Hamdi',
          '10:00 PM — Yousuke Yukimatsu',
          '11:00 PM — ISOxo ✦',
        ],
      },
      {
        name: 'RESISTANCE Megastructure',
        artists: [
          '12:00 PM — Andy Pate B2B Rod B.',
          '1:15 PM — Juliet Fox',
          '2:30 PM — Alan Fitzpatrick B2B Marco Faraone',
          '4:00 PM — Sasha & John Digweed',
          '5:30 PM — Eli Brown',
          '7:00 PM — Adam Beyer B2B Joseph Capriati',
          '9:00 PM — Carl Cox ✦',
        ],
      },
      {
        name: 'The Cove (RESISTANCE)',
        artists: [
          '12:00 PM — Joa',
          '1:15 PM — Olympe',
          '2:30 PM — Rivo',
          '4:00 PM — Kasia',
          '5:30 PM — Deep Dish',
          '7:00 PM — Colyn B2B Innellea',
          '8:30 PM — Cassian',
          '10:00 PM — Joris Voorn B2B Korolova ✦',
        ],
      },
      {
        name: 'Live Stage',
        artists: [
          '4:00 PM — Miss Bashful',
          '5:10 PM — Confidence Man',
          '6:30 PM — Snow Strippers',
          '8:00 PM — Madeon',
          '9:30 PM — Boys Noize Live',
          '10:45 PM — Brutalismus 3000 ✦',
        ],
      },
      {
        name: 'UMF Radio (Dirty Workz Takeover)',
        artists: [
          '12:00 PM — Cgk',
          '1:30 PM — Darksiderz',
          '3:00 PM — Audiofreq',
          '4:00 PM — The Purge',
          '5:00 PM — The Saints',
          '6:00 PM — Coone',
          '7:00 PM — Da Tweekaz',
          '8:00 PM — Mish',
          '9:00 PM — D-Sturb',
          '10:00 PM — Dual Damage',
          '11:00 PM — Soren ✦',
        ],
      },
      {
        name: 'The Oasis',
        artists: [
          '12:00 PM — Cimeo',
          '1:00 PM — Juno B3B Wyzzard B3B Bebe Breaks',
          '2:00 PM — Kauro',
          '3:00 PM — Soul Goodman B2B Dabura',
          '4:00 PM — CVMRN',
          '5:00 PM — Bill Kelly',
          '6:00 PM — Lucy Guo',
          '7:00 PM — Jack Vice',
          '8:00 PM — Pinto',
          '9:00 PM — Marco Ninni',
          '10:00 PM — Alexander Som',
          '11:00 PM — Wally Lopez ✦',
        ],
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
        artists: [
          '12:15 PM — Kapuchon',
          '1:05 PM — Me n u',
          '2:10 PM — R3HAB',
          '3:15 PM — Maddix',
          '4:20 PM — ARTBAT',
          '5:25 PM — Marlon Hoffstadt',
          '6:30 PM — Afrojack',
          '7:35 PM — DJ Snake',
          '8:45 PM — John Summit ✦',
        ],
      },
      {
        name: 'Worldwide Stage',
        artists: [
          '12:00 PM — Big Florida',
          '1:00 PM — JSTJR',
          '2:00 PM — Bolo',
          '3:00 PM — Layz',
          '4:00 PM — Andy C',
          '5:00 PM — Holy Priest',
          '6:00 PM — Peekaboo',
          '7:00 PM — Ray Volpe B2B Sullivan King',
          '8:30 PM — Wankdat ✦',
        ],
      },
      {
        name: 'RESISTANCE Megastructure',
        artists: [
          '12:00 PM — Bassett B2B Christopher James',
          '2:00 PM — Scenarios',
          '3:30 PM — Argy B2B Mind Against',
          '5:00 PM — Adriatique',
          '6:30 PM — Boris Brejcha',
          '8:00 PM — Amelie Lens B2B Sara Landry ✦',
        ],
      },
      {
        name: 'The Cove (RESISTANCE) — Cuttin\' Headz',
        artists: [
          '12:00 PM — M.O.N.R.O.E.',
          '1:00 PM — Plastik Funk',
          '2:00 PM — Black Fancy',
          '3:15 PM — Malone',
          '4:30 PM — Rossi.',
          '6:00 PM — Dennis Cruz B2B Seth Troxler',
          '8:00 PM — The Martinez Brothers ✦',
        ],
      },
      {
        name: 'Live Stage',
        artists: [
          '4:00 PM — Boiish',
          '5:00 PM — Parisi',
          '6:15 PM — Louis the Child',
          '7:30 PM — Tim3less',
          '9:00 PM — ZHU ✦',
        ],
      },
      {
        name: 'UMF Radio (Live From Earth)',
        artists: [
          '12:00 PM — Eera',
          '1:30 PM — Frost Children',
          '3:00 PM — X Club',
          '4:30 PM — Fcukers',
          '6:00 PM — MCR-T',
          '7:30 PM — DJ Gigola',
          '8:30 PM — Peterblue ✦',
        ],
      },
      {
        name: 'The Oasis',
        artists: [
          '12:00 PM — Dubplates & Dragons',
          '1:00 PM — Andy Ares',
          '2:00 PM — Jay P',
          '3:00 PM — Sebastian Morxx',
          '4:00 PM — Wags B2B Lemony Snickettes',
          '5:00 PM — Luke Hunter',
          '6:00 PM — Purple',
          '7:00 PM — Audiosal',
          '8:00 PM — X-Con B3B Marvin Delgado B3B CJ',
          '9:00 PM — Metaphysical ✦',
        ],
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
