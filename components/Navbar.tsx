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

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`sticky top-4 z-50 rounded-xl border-2 ${darkMode ? 'border-white bg-dark-bg' : 'border-black bg-white'} p-4 mt-4 shadow-neo mx-auto max-w-7xl`}
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
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden xl:hidden"
            >
                <div className="pt-6 pb-2 flex flex-col gap-4 font-bold text-lg text-center border-t-2 border-dashed border-gray-300 mt-4">
                    {navLinks.map((link) => (
                      <a 
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={() => setIsOpen(false)} 
                        className="hover:text-google-blue py-2"
                      >
                        {link.label}
                      </a>
                    ))}
                    <div className="sm:hidden pt-2 flex justify-center">
                        <a 
                          href="#pricing" 
                          onClick={() => setIsOpen(false)}
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