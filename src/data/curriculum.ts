import { Lesson } from '@/types';

const stageMeta = [
  { stageId: 'S1', stageName: 'WELCOME TO PYTHON', difficulty: 1, start: 1, end: 8 },
  { stageId: 'S2', stageName: 'PRINT & OUTPUT', difficulty: 1, start: 9, end: 17 },
  { stageId: 'S3', stageName: 'VARIABLES', difficulty: 1, start: 18, end: 28 },
  { stageId: 'S4', stageName: 'DATA TYPES', difficulty: 1, start: 29, end: 38 },
  { stageId: 'S5', stageName: 'NUMBERS & MATH', difficulty: 1, start: 39, end: 50 },
  { stageId: 'S6', stageName: 'STRINGS FUNDAMENTALS', difficulty: 2, start: 51, end: 63 },
  { stageId: 'S7', stageName: 'STRING METHODS', difficulty: 2, start: 64, end: 76 },
  { stageId: 'S8', stageName: 'STRING FORMATTING', difficulty: 2, start: 77, end: 84 },
  { stageId: 'S9', stageName: 'USER INPUT', difficulty: 2, start: 85, end: 90 },
  { stageId: 'S10', stageName: 'TYPE CONVERSION', difficulty: 2, start: 91, end: 97 },
  { stageId: 'S11', stageName: 'BOOLEANS & COMPARISONS', difficulty: 2, start: 98, end: 108 },
  { stageId: 'S12', stageName: 'CONDITIONAL STATEMENTS', difficulty: 2, start: 109, end: 118 },
  { stageId: 'S13', stageName: 'WHILE LOOPS', difficulty: 2, start: 119, end: 130 },
  { stageId: 'S14', stageName: 'FOR LOOPS', difficulty: 2, start: 131, end: 144 },
  { stageId: 'S15', stageName: 'LOOP TECHNIQUES', difficulty: 2, start: 145, end: 152 },
  { stageId: 'S16', stageName: 'LISTS FUNDAMENTALS', difficulty: 2, start: 153, end: 165 },
  { stageId: 'S17', stageName: 'LIST METHODS & TECHNIQUES', difficulty: 2, start: 166, end: 178 },
  { stageId: 'S18', stageName: 'TUPLES', difficulty: 2, start: 179, end: 187 },
  { stageId: 'S19', stageName: 'SETS', difficulty: 2, start: 188, end: 198 },
  { stageId: 'S20', stageName: 'DICTIONARIES FUNDAMENTALS', difficulty: 2, start: 199, end: 209 },
  { stageId: 'S21', stageName: 'DICTIONARY METHODS & ADVANCED', difficulty: 3, start: 210, end: 220 },
  { stageId: 'S22', stageName: 'FUNCTIONS FUNDAMENTALS', difficulty: 2, start: 221, end: 232 },
  { stageId: 'S23', stageName: 'FUNCTION PARAMETERS & SCOPE', difficulty: 3, start: 233, end: 242 },
  { stageId: 'S24', stageName: 'ADVANCED FUNCTIONS', difficulty: 3, start: 243, end: 255 },
  { stageId: 'S25', stageName: 'LIST COMPREHENSIONS', difficulty: 3, start: 256, end: 264 },
  { stageId: 'S26', stageName: 'ERROR HANDLING', difficulty: 3, start: 265, end: 276 },
  { stageId: 'S27', stageName: 'FILE HANDLING', difficulty: 3, start: 277, end: 290 },
  { stageId: 'S28', stageName: 'MODULES & PACKAGES', difficulty: 3, start: 291, end: 303 },
  { stageId: 'S29', stageName: 'OOP: CLASSES & OBJECTS', difficulty: 3, start: 304, end: 318 },
  { stageId: 'S30', stageName: 'OOP: INHERITANCE & POLYMORPHISM', difficulty: 3, start: 319, end: 333 },
  { stageId: 'S31', stageName: 'INTERMEDIATE CONCEPTS', difficulty: 3, start: 334, end: 346 },
  { stageId: 'S32', stageName: 'MINI PROJECTS', difficulty: 3, start: 347, end: 358 },
] as const;

const pad = (n: number) => `L${String(n).padStart(3, '0')}`;

const buildLesson = (n: number, stageId: string, stageName: string, difficulty: number): Lesson => ({
  id: pad(n),
  stageId,
  stage: Number(stageId.slice(1)),
  order: n,
  title: `Lesson ${n} — ${stageName}`,
  duration: `${5 + (n % 6) * 2} min`,
  difficulty: difficulty === 1 ? 'Easy' : difficulty === 2 ? 'Medium' : 'Hard',
  objective: `Master lesson ${n} concepts in ${stageName.toLowerCase()}.`,
  theory: [
    `Core idea for ${stageName}: understand the syntax, concept, and practical use.`,
    `Lesson ${n} focuses on applying Python patterns incrementally.`,
    `Practice by editing code and validating outputs with tests.`
  ],
  didYouKnow: `Stage ${stageId} builds directly on prerequisite lessons for progressive learning.`,
  pitfall: 'Pay attention to indentation, data types, and edge cases when coding.',
  analogy: 'Treat each lesson like a skill-tree node: unlock, practice, then combine.',
  examples: [
    { title: 'Example 1', code: `print("Lesson ${n}")`, explanation: 'Basic output demo.' },
    { title: 'Example 2', code: `value = ${n}\nprint(value)`, explanation: 'Variable usage demo.' },
    { title: 'Example 3', code: `for i in range(2):\n    print(i)`, explanation: 'Iteration demo.' }
  ],
  exercises: [
    { id: `${pad(n)}-ex1`, prompt: 'Write code that prints the lesson id.', starterCode: '# TODO\n', solution: `print("${pad(n)}")`, hint: ['Use print().', 'Output should include lesson id.', 'Match exact text.'], tests: [{ input: '', expected: pad(n), description: 'Lesson id output check' }] },
    { id: `${pad(n)}-ex2`, prompt: 'Create a variable and print it.', starterCode: '# TODO\n', solution: 'x = 1\nprint(x)', hint: ['Assign x.', 'Print x.', 'Keep output simple.'], tests: [{ input: '', expected: '1', description: 'Variable output check' }] },
    { id: `${pad(n)}-ex3`, prompt: 'Print two lines: A then B.', starterCode: '# TODO\n', solution: 'print("A")\nprint("B")', hint: ['Use two print calls.', 'A first.', 'B second.'], tests: [{ input: '', expected: 'A\nB', description: 'Two-line output check' }] }
  ],
  quiz: [
    { id: `${pad(n)}-q1`, question: 'Which keyword starts a loop in Python?', choices: ['loop', 'for', 'repeat', 'iterate'], answer: 1, explanation: 'for starts iterative loops.' },
    { id: `${pad(n)}-q2`, question: 'Python blocks are defined by?', choices: ['Braces', 'Semicolons', 'Indentation', 'Commas'], answer: 2, explanation: 'Indentation defines blocks.' },
    { id: `${pad(n)}-q3`, question: 'Which function prints output?', choices: ['echo()', 'print()', 'show()', 'write()'], answer: 1, explanation: 'print() writes console output.' },
    { id: `${pad(n)}-q4`, question: 'Which type stores text?', choices: ['int', 'bool', 'str', 'float'], answer: 2, explanation: 'str represents text.' },
    { id: `${pad(n)}-q5`, question: 'Best way to improve?', choices: ['Skip practice', 'Memorize only', 'Practice coding', 'Ignore errors'], answer: 2, explanation: 'Practice builds fluency.' }
  ],
  xp: 50 + (n % 5) * 10,
  prerequisites: n === 1 ? [] : [pad(n - 1)]
});

export const lessons: Lesson[] = stageMeta.flatMap((s) => {
  const out: Lesson[] = [];
  for (let i = s.start; i <= s.end; i += 1) out.push(buildLesson(i, s.stageId, s.stageName, s.difficulty));
  return out;
});

export const lessonMap = Object.fromEntries(lessons.map((lesson) => [lesson.id, lesson]));
