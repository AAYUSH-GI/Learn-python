# 🐍 PyPath — Interactive Python Learning Platform

PyPath is a modern, gamified Python learning web app built with **React + TypeScript**.
It combines a visual learning roadmap, lesson content, coding exercises, quizzes, and in-browser Python execution via **Pyodide**.

---

## ✨ What you can do

- Follow a **stage-based roadmap** from beginner to intermediate Python.
- Open any lesson to read theory, review examples, and practice with exercises.
- Run Python code directly in the browser (no Python backend required).
- Complete lessons to earn XP and build a streak.
- Track progress in a persistent local profile (saved in browser localStorage).

---

## 🧱 Tech Stack

- **Frontend:** React + TypeScript + Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router
- **State Management:** Zustand
- **Python Runtime:** Pyodide (WebAssembly, client-side)

---

## 📚 Curriculum coverage

Current curriculum data includes:

- **32 stages** (`S1` → `S32`)
- **358 lessons** (`L001` → `L358`)
- Per lesson: theory, examples, exercises, quiz questions, prerequisites, XP

> Note: The platform currently uses generated lesson bodies for scale and structure. You can replace generated entries with handcrafted content stage-by-stage when needed.

---

## 🚀 Quick Start

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

---

## 🗂️ Project Structure

```text
src/
  components/
    CodeEditor/
    LessonContent/
    Navigation/
    Quiz/
    Roadmap/
  context/
  data/
  pages/
  styles/
  types/
```

---

## 🧪 Validation Notes

- Exercise checking executes Python code in-browser through Pyodide.
- Progress (theme, XP, streak, lesson completion, editor settings) is persisted in localStorage.

If you’re in a restricted environment and install fails (e.g., registry/network restrictions), run locally where npm can download packages.

---

## 🛣️ Suggested Next Improvements

- Replace generated lesson bodies with authored lesson content per stage.
- Add hidden test cases and richer exercise validators.
- Add auth + backend persistence (Supabase/Firebase/Postgres).
- Add leaderboard backed by real user data.
- Add PWA/offline mode and certificates.

---

## 📄 License

This repository currently has no explicit license file. Add one before public distribution.
