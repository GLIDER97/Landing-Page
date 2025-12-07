import React, { useState } from 'react';
import { Moon, Sun, Terminal, Menu, X } from 'lucide-react';
import { NeoButton } from './NeoButton';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'use-cases', label: 'Use Cases' },
    { id: 'features', label: 'Process' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'roi', label: 'ROI' },
    { id: 'demo', label: 'Demo' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Wait for the menu to close/state to update before scrolling
    setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
            const nav = document.querySelector('nav');
            const navHeight = nav ? nav.getBoundingClientRect().height : 80;
            const yOffset = -navHeight - 20; // Extra padding
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }, 100);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`sticky top-4 z-50 rounded-xl border-2 ${darkMode ? 'border-white bg-dark-bg' : 'border-black bg-white'} p-4 mt-4 shadow-neo mx-auto max-w-7xl relative`}
    >
      <div className="flex justify-between items-center">
        <a 
          href="#" 
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className={`p-2 ${darkMode ? 'bg-google-blue text-white' : 'bg-black text-white'} border-2 ${darkMode ? 'border-white' : 'border-black'} rounded-lg`}>
            <Terminal size={24} strokeWidth={3} />
          </div>
          <span className="text-2xl font-bold tracking-tighter">Vipul Singh</span>
        </a>

        <div className="hidden xl:flex gap-6 font-bold text-base items-center">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              className="hover:text-google-blue transition-colors hover:underline decoration-4 underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-lg border-2 transition-transform hover:rotate-12 ${darkMode ? 'border-white bg-gray-800' : 'border-black bg-gray-100'}`}
          >
            {darkMode ? <Sun size={20} className="text-google-yellow" /> : <Moon size={20} />}
          </button>
          <div className="hidden sm:block">
              <a href="#pricing">
                <NeoButton variant="primary" size="sm" darkMode={darkMode}>
                Book Call
                </NeoButton>
              </a>
          </div>
          <div className="xl:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-1">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
            <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={`absolute left-0 right-0 top-[calc(100%+0.5rem)] rounded-xl border-2 ${darkMode ? 'border-white bg-dark-bg' : 'border-black bg-white'} shadow-neo xl:hidden overflow-hidden z-50`}
            >
                <div className="flex flex-col p-6 gap-4 font-bold text-lg text-center">
                    {navLinks.map((link) => (
                      <a 
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={(e) => handleMobileNavClick(e, link.id)} 
                        className="hover:text-google-blue py-2 border-b-2 border-transparent hover:border-dashed hover:border-gray-300 transition-all cursor-pointer select-none"
                      >
                        {link.label}
                      </a>
                    ))}
                    <div className="sm:hidden pt-4 flex justify-center">
                        <a 
                          href="#pricing" 
                          onClick={(e) => handleMobileNavClick(e, 'pricing')}
                        >
                            <NeoButton variant="primary" size="sm" darkMode={darkMode}>
                                Book Call
                            </NeoButton>
                        </a>
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};