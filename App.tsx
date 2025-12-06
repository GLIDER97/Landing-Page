import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { UseCases } from './components/UseCases';
import { Features } from './components/Features';
import { DemoSection } from './components/DemoSection';
import { ROIComparison } from './components/ROIComparison';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-dark-bg text-white' : 'bg-off-white text-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <main className="flex flex-col gap-10 pb-20">
          <Hero darkMode={darkMode} />
          <UseCases darkMode={darkMode} />
          <Features darkMode={darkMode} />
          <Testimonials darkMode={darkMode} />
          <DemoSection darkMode={darkMode} />
          <ROIComparison darkMode={darkMode} />
          <Pricing darkMode={darkMode} />
          <FAQ darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}