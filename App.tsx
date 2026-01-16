import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import HireMe from './components/HireMe';
import PrivacyPolicy from './components/PrivacyPolicy';
import BottomToolbar from './components/BottomToolbar';

export type ViewState = 'portfolio' | 'hire' | 'privacy';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('portfolio');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || !saved;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const navigateTo = (view: ViewState) => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen selection:bg-indigo-500 selection:text-white transition-colors duration-500 pb-20">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} currentView={currentView} navigateTo={navigateTo} />
      
      <main className="relative z-10">
        {currentView === 'portfolio' && (
          <>
            <section id="home">
              <Hero />
            </section>
            
            <section id="about" className="py-24 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-20 pointer-events-none"></div>
              <About />
            </section>

            <section id="skills" className="py-24">
              <SkillsSection />
            </section>

            <section id="projects" className="py-24 bg-slate-100/50 dark:bg-slate-900/30">
              <ProjectsSection />
            </section>

            <section id="services" className="py-24">
              <ServicesSection />
            </section>

            <section id="contact" className="py-24 bg-slate-100/50 dark:bg-slate-900/30">
              <ContactSection />
            </section>
          </>
        )}

        {currentView === 'hire' && <HireMe navigateTo={navigateTo} />}
        {currentView === 'privacy' && <PrivacyPolicy navigateTo={navigateTo} />}
      </main>

      <Footer navigateTo={navigateTo} />
      
      <BottomToolbar currentView={currentView} navigateTo={navigateTo} />
    </div>
  );
};

export default App;