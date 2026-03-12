import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { lessons } from '@/data/curriculum';
import { PythonPlayground } from '@/components/CodeEditor/PythonPlayground';
import { ExercisePanel } from '@/components/LessonContent/ExercisePanel';
import { QuizPanel } from '@/components/Quiz/QuizPanel';
import { useAppStore } from '@/context/useAppStore';

export function LessonPage() {
  const { lessonId = '' } = useParams();
  const lesson = useMemo(() => lessons.find((l) => l.id === lessonId), [lessonId]);
  const completeLesson = useAppStore((s) => s.completeLesson);
  if (!lesson) return <div className="card">Lesson not found.</div>;

  return (
    <div className="space-y-4">
      <div className="card">
        <h1 className="text-2xl font-bold">{lesson.title}</h1>
        <p className="text-slate-400">{lesson.objective} • {lesson.duration} • {lesson.difficulty}</p>
      </div>

      <div className="card space-y-2">
        <h2 className="font-semibold">Theory</h2>
        {lesson.theory.map((p) => <p key={p}>{p}</p>)}
        <div className="rounded bg-blue-500/10 p-2 text-sm">💡 Did you know? {lesson.didYouKnow}</div>
        <div className="rounded bg-amber-500/10 p-2 text-sm">⚠️ Pitfall: {lesson.pitfall}</div>
        <div className="rounded bg-purple-500/10 p-2 text-sm">🧠 Analogy: {lesson.analogy}</div>
      </div>

      <div className="card">
        <h2 className="mb-2 font-semibold">Examples</h2>
        <div className="space-y-2">{lesson.examples.map((e) => <pre key={e.title} className="rounded bg-slate-950 p-2 text-xs"><strong>{e.title}</strong>{`\n${e.code}\n# ${e.explanation}`}</pre>)}</div>
      </div>

      <div className="card">
        <h2 className="mb-2 font-semibold">Interactive Playground</h2>
        <PythonPlayground starterCode={lesson.exercises[0].starterCode} solution={lesson.exercises[0].solution} />
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Exercises</h2>
        {lesson.exercises.map((ex) => <ExercisePanel key={ex.id} exercise={ex} />)}
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">Mini Quiz</h2>
        <QuizPanel questions={lesson.quiz} />
      </div>

      <div className="flex gap-2">
        <button onClick={() => completeLesson(lesson.id)} className="rounded bg-brand-green px-4 py-2 text-black">Mark Complete +{lesson.xp}XP</button>
        <Link to="/roadmap" className="rounded border border-slate-600 px-4 py-2">Back to Roadmap</Link>
      </div>
    </div>
  );
}
