import { create } from 'zustand';
import { lessons } from '@/data/curriculum';

type Theme = 'dark' | 'light';

interface AppState {
  theme: Theme;
  completedLessons: string[];
  xp: number;
  streak: number;
  editorFontSize: number;
  toggleTheme: () => void;
  completeLesson: (id: string) => void;
  resetProgress: () => void;
  setEditorFontSize: (size: number) => void;
}

const STORAGE_KEY = 'pypath-state';

const initialState = (): Pick<AppState, 'theme' | 'completedLessons' | 'xp' | 'streak' | 'editorFontSize'> => {
  if (typeof window === 'undefined') return { theme: 'dark', completedLessons: [], xp: 0, streak: 1, editorFontSize: 14 };
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return { theme: 'dark', completedLessons: [], xp: 0, streak: 1, editorFontSize: 14 };
  return JSON.parse(saved);
};

export const useAppStore = create<AppState>((set, get) => ({
  ...initialState(),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
  completeLesson: (id) =>
    set((state) => {
      if (state.completedLessons.includes(id)) return state;
      const lesson = lessons.find((l) => l.id === id);
      return {
        completedLessons: [...state.completedLessons, id],
        xp: state.xp + (lesson?.xp ?? 0),
        streak: state.streak + 1
      };
    }),
  resetProgress: () => set({ completedLessons: [], xp: 0, streak: 1 }),
  setEditorFontSize: (size) => set({ editorFontSize: size })
}));

if (typeof window !== 'undefined') {
  useAppStore.subscribe((state) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        theme: state.theme,
        completedLessons: state.completedLessons,
        xp: state.xp,
        streak: state.streak,
        editorFontSize: state.editorFontSize
      })
    );
    document.documentElement.classList.toggle('dark', state.theme === 'dark');
  });
}
