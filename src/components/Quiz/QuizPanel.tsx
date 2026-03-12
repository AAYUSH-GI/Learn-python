import { useState } from 'react';
import { QuizQuestion } from '@/types';

export function QuizPanel({ questions }: { questions: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<Record<string, number>>({});

  return (
    <div className="space-y-3">
      {questions.map((q) => {
        const chosen = answers[q.id];
        const submitted = chosen !== undefined;
        const correct = chosen === q.answer;
        return (
          <div className="card" key={q.id}>
            <p className="mb-2 font-semibold">{q.question}</p>
            <div className="grid gap-2">
              {q.choices.map((choice, idx) => (
                <button key={choice} onClick={() => setAnswers((a) => ({ ...a, [q.id]: idx }))} className="rounded border border-slate-700 px-3 py-2 text-left text-sm">
                  {choice}
                </button>
              ))}
            </div>
            {submitted && <p className={`mt-2 text-sm ${correct ? 'text-brand-green' : 'text-red-400'}`}>{correct ? '✅ Correct' : '❌ Incorrect'} — {q.explanation}</p>}
          </div>
        );
      })}
    </div>
  );
}
