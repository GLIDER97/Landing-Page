import React from 'react';
import { NeoButton } from './NeoButton';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  return (
    <section id="contact" className="py-20 px-4 scroll-mt-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">Let's <span className="text-google-blue">Talk</span></h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">Not ready to book a call? Send me a message directly.</p>
        </div>

        <div className={`
          p-8 md:p-12 border-4 border-black rounded-xl relative
          ${darkMode ? 'bg-dark-bg text-white shadow-[8px_8px_0px_0px_#fff]' : 'bg-white shadow-[8px_8px_0px_0px_#000]'}
        `}>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-google-yellow border-2 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_#000]">
            <Mail size={24} className="text-black" />
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-bold flex items-center gap-2">
                  <User size={18} /> Name
                </label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className={`w-full p-4 border-2 border-black rounded-lg font-medium outline-none transition-all focus:shadow-neo-sm focus:translate-x-[-2px] focus:translate-y-[-2px] ${darkMode ? 'bg-gray-800 text-white placeholder-gray-500' : 'bg-gray-50'}`}
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold flex items-center gap-2">
                  <Mail size={18} /> Email
                </label>
                <input 
                  type="email" 
                  placeholder="john@company.com"
                  className={`w-full p-4 border-2 border-black rounded-lg font-medium outline-none transition-all focus:shadow-neo-sm focus:translate-x-[-2px] focus:translate-y-[-2px] ${darkMode ? 'bg-gray-800 text-white placeholder-gray-500' : 'bg-gray-50'}`}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-bold flex items-center gap-2">
                <MessageSquare size={18} /> Message
              </label>
              <textarea 
                rows={4}
                placeholder="Tell me about your business needs..."
                className={`w-full p-4 border-2 border-black rounded-lg font-medium outline-none transition-all focus:shadow-neo-sm focus:translate-x-[-2px] focus:translate-y-[-2px] ${darkMode ? 'bg-gray-800 text-white placeholder-gray-500' : 'bg-gray-50'}`}
              ></textarea>
            </div>

            <div className="flex justify-end pt-4">
              <NeoButton variant="primary" size="lg" darkMode={darkMode}>
                Send Message <Send size={20} />
              </NeoButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};