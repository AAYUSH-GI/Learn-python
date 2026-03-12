import { Link, NavLink } from 'react-router-dom';
import { useAppStore } from '@/context/useAppStore';

const navItems = [
  ['/', 'Home'],
  ['/roadmap', 'Roadmap'],
  ['/dashboard', 'Dashboard'],
  ['/leaderboard', 'Leaderboard']
];

export function Navbar() {
  const { theme, toggleTheme, xp } = useAppStore();
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-lg font-bold text-brand-blue">PyPath</Link>
        <nav className="flex items-center gap-4 text-sm">
          {navItems.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'text-brand-purple' : 'text-slate-600 dark:text-slate-300')}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="rounded-md bg-brand-green/20 px-2 py-1 text-xs">XP {xp}</span>
          <button onClick={toggleTheme} className="rounded-md border border-slate-300 px-2 py-1 text-xs dark:border-slate-700">{theme === 'dark' ? 'Light' : 'Dark'}</button>
        </div>
      </div>
    </header>
  );
}
