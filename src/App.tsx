import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { FilmsPage } from './pages/FilmsPage';
import { GreenSolutionsPage } from './pages/GreenSolutionsPage';
import { VolunteerPage } from './pages/VolunteerPage';
import { NewsPage } from './pages/NewsPage';
import { TeamPage } from './pages/TeamPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/films" element={<FilmsPage />} />
            <Route path="/green-solutions" element={<GreenSolutionsPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}
