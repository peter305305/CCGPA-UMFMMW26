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
    <nav className="card px-5 py-4" aria-label="Main">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="lux-pill">Ultra Miami Residence</div>
        <div className="flex flex-wrap items-center gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full border px-4 py-2.5 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-200 ${
                  isActive
                    ? 'border-gold-500/50 bg-gold-500/15 text-gold-300 shadow-luxe-card'
                    : 'border-white/15 bg-white/5 text-champagne-400/90 hover:border-gold-500/30 hover:text-champagne-300'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
