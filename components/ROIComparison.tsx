import React from 'react';
import { X, Check, User, Bot } from 'lucide-react';

interface ROIComparisonProps {
  darkMode: boolean;
}

export const ROIComparison: React.FC<ROIComparisonProps> = ({ darkMode }) => {
  return (
    <section id="roi" className="py-20 px-4 scroll-mt-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">Why It's a <span className="text-google-green">No-Brainer</span></h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">Stop overpaying for human inefficiency. Switch to AI reliability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* The Old Way */}
          <div className={`
            p-8 border-4 border-black rounded-xl opacity-70 scale-95
            ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-600'}
          `}>
            <div className="flex items-center gap-4 mb-8 border-b-2 border-dashed border-gray-400 pb-4">
              <div className="p-3 bg-gray-300 rounded-full border-2 border-black">
                <User size={32} className="text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-black">Human Employee</h3>
                <p className="font-bold">The expensive way</p>
              </div>
            </div>

            <ul className="space-y-4 font-bold text-lg">
              <li className="flex items-center gap-3 text-red-500">
                <X size={24} strokeWidth={3} /> Costs $3,000+ / month
              </li>
              <li className="flex items-center gap-3 text-red-500">
                <X size={24} strokeWidth={3} /> Available 8 hrs / day
              </li>
              <li className="flex items-center gap-3 text-red-500">
                <X size={24} strokeWidth={3} /> Requires Training
              </li>
              <li className="flex items-center gap-3 text-red-500">
                <X size={24} strokeWidth={3} /> Takes Sick Days
              </li>
              <li className="flex items-center gap-3 text-red-500">
                <X size={24} strokeWidth={3} /> Inconsistent Moods
              </li>
            </ul>
          </div>

          {/* The New Way */}
          <div className={`
            relative p-8 border-4 border-black rounded-xl transform md:rotate-2
            ${darkMode ? 'bg-dark-bg text-white shadow-[10px_10px_0px_0px_#fff]' : 'bg-white shadow-[10px_10px_0px_0px_#000]'}
          `}>
             <div className="absolute -top-6 -right-6 bg-google-yellow text-black font-black px-6 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#000] rotate-3">
                SAVE 80%
             </div>

            <div className="flex items-center gap-4 mb-8 border-b-2 border-dashed border-gray-300 pb-4">
              <div className="p-3 bg-google-blue rounded-full border-2 border-black text-white">
                <Bot size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-black">AI Agent</h3>
                <p className="font-bold text-google-green">The smart way</p>
              </div>
            </div>

            <ul className="space-y-4 font-bold text-xl">
              <li className="flex items-center gap-3">
                <div className="bg-google-green text-white rounded-full p-1"><Check size={16} strokeWidth={4} /></div>
                <span>Starts at <span className="text-google-green text-2xl">$540</span> / month</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-google-green text-white rounded-full p-1"><Check size={16} strokeWidth={4} /></div>
                <span>Available 24/7/365</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-google-green text-white rounded-full p-1"><Check size={16} strokeWidth={4} /></div>
                <span>Instant Knowledge</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-google-green text-white rounded-full p-1"><Check size={16} strokeWidth={4} /></div>
                <span>Infinite Scale</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-google-green text-white rounded-full p-1"><Check size={16} strokeWidth={4} /></div>
                <span>Perfect Scripts Every Time</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};