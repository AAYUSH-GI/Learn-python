import { RoadmapCanvas } from '@/components/Roadmap/RoadmapCanvas';
import { useAppStore } from '@/context/useAppStore';

export function RoadmapPage() {
  const completed = useAppStore((s) => s.completedLessons.length);
  const progress = Math.round((completed / 5) * 100);
  return (
    <div className="space-y-4">
      <div className="card">
        <h2 className="text-xl font-bold">Interactive Python Roadmap</h2>
        <p className="text-sm text-slate-400">Progress: {progress}% complete ({completed}/5 lessons finished)</p>
        <div className="mt-2 h-2 rounded bg-slate-800"><div className="h-2 rounded bg-brand-green" style={{ width: `${progress}%` }} /></div>
      </div>
      <RoadmapCanvas />
    </div>
  );
}
