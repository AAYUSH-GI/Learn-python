import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function HomePage() {
  return (
    <div className="space-y-10">
      <section className="card overflow-hidden p-8">
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold">
          Learn Python with a Gamified Roadmap
        </motion.h1>
        <p className="mt-3 max-w-2xl text-slate-400">From complete beginner to Python master with interactive lessons, code playground, quizzes, streaks, and achievements.</p>
        <div className="mt-5 flex gap-3">
          <Link className="rounded bg-brand-blue px-4 py-2" to="/roadmap">Start Learning</Link>
          <Link className="rounded border border-slate-600 px-4 py-2" to="/dashboard">View Dashboard</Link>
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        {['10,000+ learners', '500+ coding challenges', '8 learning stages'].map((item) => (
          <div className="card text-center" key={item}>{item}</div>
        ))}
      </section>
    </div>
  );
}
