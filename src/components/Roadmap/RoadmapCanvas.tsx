import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { roadmapNodes } from '@/data/roadmapNodes';
import { useAppStore } from '@/context/useAppStore';

export function RoadmapCanvas() {
  const completed = useAppStore((s) => s.completedLessons);
  const scale = 1;

  return (
    <div className="card overflow-auto">
      <div className="relative h-[320px] min-w-[2100px]" style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}>
        <svg className="absolute inset-0 h-full w-full">
          {roadmapNodes.map((node) =>
            node.prerequisites.map((pre) => {
              const start = roadmapNodes.find((n) => n.id === pre);
              if (!start) return null;
              const active = completed.includes(pre);
              return (
                <motion.line
                  key={`${pre}-${node.id}`}
                  x1={start.x + 45}
                  y1={start.y + 45}
                  x2={node.x + 45}
                  y2={node.y + 45}
                  stroke={active ? '#22c55e' : '#334155'}
                  strokeWidth="4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2 }}
                />
              );
            })
          )}
        </svg>

        {roadmapNodes.map((node) => {
          const done = completed.includes(node.id);
          const unlocked = node.prerequisites.every((pre) => completed.includes(pre));
          const common = `absolute flex h-24 w-24 items-center justify-center rounded-full text-center text-xs font-semibold`;

          return node.lessonId ? (
            <Link
              to={`/lesson/${node.lessonId}`}
              key={node.id}
              className={`${common} ${done ? 'bg-brand-green text-slate-950' : unlocked ? 'bg-brand-blue text-white' : 'bg-slate-700 text-slate-300'}`}
              style={{ left: node.x, top: node.y }}
              title={`${node.title} • ${done ? 'Completed' : unlocked ? 'Unlocked' : 'Locked'}`}
            >
              <span>{done ? '✅' : unlocked ? node.title : '🔒'}</span>
            </Link>
          ) : (
            <div key={node.id} className={`${common} bg-brand-purple/50`} style={{ left: node.x, top: node.y }}>
              {node.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
