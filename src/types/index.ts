export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Example {
  title: string;
  code: string;
  explanation: string;
}

export interface Exercise {
  id: string;
  prompt: string;
  starterCode: string;
  solution: string;
  hint: string[];
  tests: { input: string; expected: string; description: string }[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  choices: string[];
  answer: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  stage: number;
  title: string;
  duration: string;
  difficulty: Difficulty;
  objective: string;
  theory: string[];
  didYouKnow: string;
  pitfall: string;
  analogy: string;
  examples: Example[];
  exercises: Exercise[];
  quiz: QuizQuestion[];
  xp: number;
  prerequisites: string[];
}

export interface RoadmapNode {
  id: string;
  title: string;
  stage: number;
  x: number;
  y: number;
  lessonId?: string;
  prerequisites: string[];
}
