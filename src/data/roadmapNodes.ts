import { RoadmapNode } from '@/types';

export const roadmapNodes: RoadmapNode[] = [
  { id: 'hello-python', title: 'Hello, Python!', stage: 1, x: 100, y: 80, lessonId: 'hello-python', prerequisites: [] },
  { id: 'decisions', title: 'Making Decisions', stage: 2, x: 330, y: 170, lessonId: 'decisions', prerequisites: ['hello-python'] },
  { id: 'loops', title: 'Loops & Iteration', stage: 2, x: 560, y: 80, lessonId: 'loops', prerequisites: ['decisions'] },
  { id: 'lists-dicts', title: 'Lists & Dictionaries', stage: 3, x: 790, y: 170, lessonId: 'lists-dicts', prerequisites: ['loops'] },
  { id: 'functions', title: 'Functions', stage: 4, x: 1020, y: 80, lessonId: 'functions', prerequisites: ['lists-dicts'] },
  { id: 'oop', title: 'OOP', stage: 5, x: 1250, y: 170, prerequisites: ['functions'] },
  { id: 'advanced', title: 'Advanced Topics', stage: 6, x: 1480, y: 80, prerequisites: ['oop'] },
  { id: 'real-world', title: 'Real-World Python', stage: 7, x: 1710, y: 170, prerequisites: ['advanced'] },
  { id: 'projects', title: 'Projects & Challenges', stage: 8, x: 1940, y: 80, prerequisites: ['real-world'] }
];
