import { useAppStore } from '@/context/useAppStore';

export function ProfilePage() {
  const { xp, completedLessons } = useAppStore();
  return <div className="card"><h2 className="text-xl font-bold">@python_learner</h2><p>Bio: Building Python skills daily.</p><p>XP: {xp} • Lessons done: {completedLessons.length}</p><p>Badges: First Line of Code, Loop Master</p></div>;
}
