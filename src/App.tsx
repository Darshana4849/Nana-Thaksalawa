import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar, NavTab } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { HomePage } from './pages/HomePage';
import { DomainPage } from './pages/DomainPage';
import { MilestonesPage } from './pages/MilestonesPage';
import { DocumentsPage } from './pages/DocumentsPage';
import { PresentationsPage } from './pages/PresentationsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [targetComponentId, setTargetComponentId] = useState<string | undefined>(undefined);

  const handleSelectTab = (tab: NavTab, componentId?: string) => {
    setActiveTab(tab);
    if (componentId) {
      setTargetComponentId(componentId);
    } else {
      setTargetComponentId(undefined);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900/50 dark:selection:text-blue-200 transition-colors duration-150">
        {/* Top Smooth Navigation Indicator */}
        <motion.div
          key={`nav-line-${activeTab}`}
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: [1, 0.8, 0] }}
          transition={{ duration: 0.38, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-teal-400 to-indigo-600 origin-left z-50 pointer-events-none"
        />

        {/* Global Navigation */}
        <Navbar
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
        />

        {/* Main Page Body */}
        <main className="flex-1 w-full overflow-x-hidden" id="main-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              {activeTab === 'home' && <HomePage onSelectTab={handleSelectTab} />}
              {activeTab === 'domain' && <DomainPage initialComponentId={targetComponentId} />}
              {activeTab === 'milestones' && <MilestonesPage onSelectTab={handleSelectTab} />}
              {activeTab === 'documents' && <DocumentsPage />}
              {activeTab === 'presentations' && <PresentationsPage />}
              {activeTab === 'about' && <AboutPage />}
              {activeTab === 'contact' && <ContactPage />}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Global Academic Footer */}
        <Footer onSelectTab={handleSelectTab} />

        {/* Utility Controls */}
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}
