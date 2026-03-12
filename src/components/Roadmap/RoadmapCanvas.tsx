import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { lessons } from '@/data/curriculum';
import { useAppStore } from '@/context/useAppStore';

export function RoadmapCanvas() {
  const completed = useAppStore((s) => s.completedLessons);
  const nodes = useMemo(
    () =>
      lessons.map((lesson, idx) => ({
        ...lesson,
        x: 90 + idx * 90,
        y: idx % 2 === 0 ? 70 : 180
      })),
    []
  );

  return (
    <div className="card overflow-auto">
      <div className="relative h-[320px]" style={{ width: `${nodes.length * 95}px` }}>
        <svg className="absolute inset-0 h-full w-full">
          {nodes.map((node, idx) => {
            if (idx === 0) return null;
            const start = nodes[idx - 1];
            const active = completed.includes(start.id);
            return (
              <motion.line
                key={`${start.id}-${node.id}`}
                x1={start.x + 18}
                y1={start.y + 18}
                x2={node.x + 18}
                y2={node.y + 18}
                stroke={active ? '#22c55e' : '#334155'}
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
            );
          })}
        </svg>

        {nodes.map((node) => {
          const done = completed.includes(node.id);
          const unlocked = node.prerequisites.every((pre) => completed.includes(pre));
          return (
            <Link
              to={`/lesson/${node.id}`}
              key={node.id}
              className={`absolute flex h-10 w-10 items-center justify-center rounded-full text-[10px] font-semibold ${done ? 'bg-brand-green text-black' : unlocked ? 'bg-brand-blue text-white' : 'bg-slate-700 text-slate-300'}`}
              style={{ left: node.x, top: node.y }}
              title={`${node.id} • ${node.title}`}
            >
              {done ? '✓' : unlocked ? node.id.slice(1) : '🔒'}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
