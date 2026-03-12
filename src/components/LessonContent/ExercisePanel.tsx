import { useState } from 'react';
import { Exercise } from '@/types';

declare global {
  interface Window {
    loadPyodide?: (opts?: { indexURL: string }) => Promise<any>;
    pyodide?: any;
  }
}

async function ensurePyodide() {
  if (!window.loadPyodide) {
    await new Promise<void>((resolve) => {
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
      s.onload = () => resolve();
      document.body.appendChild(s);
    });
  }
  if (!window.pyodide) window.pyodide = await window.loadPyodide?.({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/' });
  return window.pyodide;
}

export function ExercisePanel({ exercise }: { exercise: Exercise }) {
  const [code, setCode] = useState(exercise.starterCode);
  const [result, setResult] = useState('');
  const [hintLevel, setHintLevel] = useState(0);

  const check = async () => {
    try {
      const pyodide = await ensurePyodide();
      let output = '';
      pyodide.setStdout({ batched: (msg: string) => (output = `${output}\n${msg}`.trim()) });
      await pyodide.runPythonAsync(code);
      const expected = exercise.tests[0].expected.trim();
      const normalized = output.trim();
      const pass = normalized === expected;
      setResult(pass ? '✅ Pass' : `❌ Fail: expected "${expected}" but got "${normalized || '[no output]'}"`);
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
