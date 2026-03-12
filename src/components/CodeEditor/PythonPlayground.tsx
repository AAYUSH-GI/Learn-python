import { useState } from 'react';
import { useAppStore } from '@/context/useAppStore';

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

export function PythonPlayground({ starterCode, solution }: { starterCode: string; solution: string }) {
  const [code, setCode] = useState(starterCode);
  const [output, setOutput] = useState('Run your code to see output...');
  const [showSolution, setShowSolution] = useState(false);
  const fontSize = useAppStore((s) => s.editorFontSize);

  const run = async () => {
    const start = performance.now();
    try {
      const pyodide = await ensurePyodide();
      pyodide.setStdout({ batched: (msg: string) => setOutput((prev) => `${prev}\n${msg}`.trim()) });
      setOutput('');
      await pyodide.runPythonAsync(code);
      setOutput((prev) => `${prev}\n\n⏱ ${(performance.now() - start).toFixed(0)}ms`.trim());
    } catch (err) {
      setOutput(`❌ ${String(err)}`);
    }
  };

  return (
    <div className="space-y-2">
      <textarea value={code} onChange={(e) => setCode(e.target.value)} className="h-56 w-full rounded-lg border border-slate-700 bg-slate-950 p-3 font-mono text-brand-green" style={{ fontSize }} />
      <div className="flex flex-wrap gap-2">
        <button onClick={run} className="rounded bg-brand-blue px-3 py-1 text-sm">Run Code</button>
        <button onClick={() => setCode(starterCode)} className="rounded border border-slate-600 px-3 py-1 text-sm">Reset Code</button>
        <button onClick={() => setShowSolution((v) => !v)} className="rounded border border-amber-500 px-3 py-1 text-sm">Show Solution</button>
      </div>
      {showSolution && <pre className="rounded-lg bg-slate-900 p-3 text-xs text-amber-300">{solution}</pre>}
      <pre className="min-h-24 rounded-lg bg-black p-3 text-xs text-green-300">{output}</pre>
    </div>
  );
}
