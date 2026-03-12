import { lessons } from '@/data/curriculum';
import { useAppStore } from '@/context/useAppStore';
import { Link } from 'react-router-dom';

export function DashboardPage() {
  const { completedLessons, xp, streak } = useAppStore();
  const percent = Math.round((completedLessons.length / lessons.length) * 100);
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="card"><h3 className="font-semibold">Overall Progress</h3><p>{percent}%</p></div>
      <div className="card"><h3 className="font-semibold">Total XP</h3><p>{xp}</p></div>
      <div className="card"><h3 className="font-semibold">Daily Streak 🔥</h3><p>{streak} days</p></div>
      <div className="card md:col-span-3">
        <h3 className="font-semibold">Continue Learning</h3>
        <Link to="/roadmap" className="mt-2 inline-block rounded bg-brand-blue px-3 py-1">Open Roadmap</Link>
      </div>
    </div>
  );
}
