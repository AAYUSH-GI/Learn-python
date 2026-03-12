import { Route, Routes } from 'react-router-dom';
import { Navbar } from '@/components/Navigation/Navbar';
import { HomePage } from '@/pages/Home/HomePage';
import { RoadmapPage } from '@/pages/Roadmap/RoadmapPage';
import { LessonPage } from '@/pages/Lesson/LessonPage';
import { DashboardPage } from '@/pages/Dashboard/DashboardPage';
import { ProfilePage } from '@/pages/Profile/ProfilePage';
import { LeaderboardPage } from '@/pages/Leaderboard/LeaderboardPage';
import { SettingsPage } from '@/pages/Settings/SettingsPage';
import { AuthPage } from '@/pages/Auth/AuthPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/lesson/:lessonId" element={<LessonPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}
