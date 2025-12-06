import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`border-t-4 ${darkMode ? 'border-white' : 'border-black'} pt-12 mt-12`}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        <div className="space-y-4">
          <div className="text-3xl font-black tracking-tighter">Vipul Singh</div>
          <p className="max-w-xs font-medium opacity-70">
            Freelance AI Engineer. Building the future of voice communication, one agent at a time.
          </p>
        </div>

        <div className="flex gap-4">
          {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
            <a 
              key={i} 
              href="#" 
              className={`p-3 border-2 ${darkMode ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'} rounded-lg transition-colors`}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <div className="font-bold flex flex-col gap-2">
            <a href="#" className="hover:underline decoration-2">Privacy Policy</a>
            <a href="#features" className="hover:underline decoration-2">Process</a>
            <a href="#contact" className="hover:underline decoration-2">Contact Me</a>
        </div>
      </div>
      
      <div className="text-center mt-12 font-bold opacity-40 text-sm">
        © 2024 Vipul Singh. All rights reserved.
      </div>
    </footer>
  );
};