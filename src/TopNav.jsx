import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Lobby', to: '/dashboard' },
  { label: 'Residence', to: '/house-info' },
  { label: 'Dining', to: '/dining' },
  { label: 'Set Times', to: '/set-times' },
  { label: 'Weather', to: '/weather' },
];

export default function TopNav() {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/30 px-4 py-4 shadow-luxe backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="lux-pill">Ultra Miami Residence</div>
        <div className="flex flex-wrap items-center gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  isActive
                    ? 'border-ultraBlue-400/80 bg-ultraBlue-500/20 text-white shadow-luxe'
                    : 'border-white/20 bg-white/10 text-white/90 hover:border-ultraPink-300/60 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
