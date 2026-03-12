import { useState } from 'react';
import { Exercise } from '@/types';

export function ExercisePanel({ exercise }: { exercise: Exercise }) {
  const [code, setCode] = useState(exercise.starterCode);
  const [result, setResult] = useState('');
  const [hintLevel, setHintLevel] = useState(0);

  const check = () => {
    const logs: string[] = [];
    try {
      // eslint-disable-next-line no-new-func
      const fn = new Function('console', `${code}`);
      fn({ log: (...args: unknown[]) => logs.push(args.join(' ')) });
      const normalized = logs.join('\n').trim();
      const pass = normalized === exercise.tests[0].expected.trim();
      setResult(pass ? '✅ Pass' : `❌ Fail: Expected "${exercise.tests[0].expected}" but got "${normalized}"`);
    } catch (err) {
      setResult(`❌ Runtime Error: ${String(err)}`);
    }
  };

  return (
    <div className="card space-y-2">
      <h4 className="font-semibold">{exercise.prompt}</h4>
      <textarea value={code} onChange={(e) => setCode(e.target.value)} className="h-32 w-full rounded bg-slate-950 p-2 font-mono text-xs text-slate-100" />
      <div className="flex gap-2">
        <button onClick={check} className="rounded bg-brand-green px-3 py-1 text-sm text-black">Check</button>
        <button onClick={() => setHintLevel((h) => Math.min(h + 1, 3))} className="rounded border border-brand-amber px-3 py-1 text-sm">Hint {hintLevel}/3</button>
      </div>
      {hintLevel > 0 && <p className="text-sm text-brand-amber">{exercise.hint[hintLevel - 1]}</p>}
      {result && <p className="text-sm">{result}</p>}
    </div>
  );
}
