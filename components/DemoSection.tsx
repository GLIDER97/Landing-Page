import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, PhoneOff, Mic, Volume2 } from 'lucide-react';

interface DemoSectionProps {
  darkMode: boolean;
}

export const DemoSection: React.FC<DemoSectionProps> = ({ darkMode }) => {
  const [isActive, setIsActive] = useState(false);
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    { text: "Hello! Thanks for calling GabLab Pizza. How can I help you today?", isUser: false }
  ]);

  const handleCallToggle = () => {
    if (!isActive) {
      setIsActive(true);
      // Simulate interaction
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Hi, I'd like to order a large pepperoni pizza.", isUser: true }]);
      }, 1500);
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Great choice! A large pepperoni. Would you like to add any drinks or sides to that?", isUser: false }]);
      }, 3500);
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Yeah, throw in a coke.", isUser: true }]);
      }, 5500);
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Got it. Anything else?", isUser: false }]);
      }, 7500);
    } else {
      setIsActive(false);
      setMessages([{ text: "Hello! Thanks for calling GabLab Pizza. How can I help you today?", isUser: false }]);
    }
  };

  return (
    <section id="demo" className={`py-20 rounded-[3rem] border-4 ${darkMode ? 'border-white bg-gray-900' : 'border-black bg-yellow-50'} overflow-hidden relative mx-4 scroll-mt-32`}>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10 p-8">
        
        <div className="flex-1 text-left space-y-6">
          <div className="inline-block bg-google-red text-white font-bold px-4 py-1 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
            LIVE DEMO
          </div>
          <h2 className="text-4xl md:text-6xl font-black">
            HEAR THE <br/>
            <span className="text-google-blue">DIFFERENCE.</span>
          </h2>
          <p className="text-xl font-medium">
            Experience latency so low it feels telepathic. Our voice engine processes audio in under 500ms.
          </p>
          
          <div className="flex gap-4">
             <div className="flex flex-col gap-2">
                <span className="text-4xl font-black">~500ms</span>
                <span className="text-sm font-bold uppercase opacity-60">Latency</span>
             </div>
             <div className="w-[2px] bg-current opacity-20"></div>
             <div className="flex flex-col gap-2">
                <span className="text-4xl font-black">99.9%</span>
                <span className="text-sm font-bold uppercase opacity-60">Uptime</span>
             </div>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center">
            {/* Phone Mockup */}
            <div className={`w-full max-w-sm rounded-[3rem] border-8 ${darkMode ? 'border-gray-700 bg-black' : 'border-black bg-white'} shadow-[15px_15px_0px_0px_rgba(0,0,0,0.2)] overflow-hidden relative h-[600px] flex flex-col`}>
              
              {/* Dynamic Island Area */}
              <div className="h-8 bg-black w-full flex justify-center items-end pb-1">
                 <div className="w-24 h-5 bg-gray-900 rounded-full"></div>
              </div>

              {/* Screen Content */}
              <div className="flex-1 flex flex-col p-6 bg-gray-50 relative overflow-hidden">
                 
                 {/* Header */}
                 <div className="flex justify-between items-center mb-8">
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    <div className="text-xs font-bold text-gray-400">GABLAB AI</div>
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                 </div>

                 {/* Visualizer / Avatar */}
                 <div className="flex-1 flex flex-col items-center justify-center gap-6">
                    <motion.div 
                        animate={isActive ? { scale: [1, 1.2, 1], boxShadow: ["0 0 0 0px rgba(66, 133, 244, 0)", "0 0 0 20px rgba(66, 133, 244, 0.2)", "0 0 0 0px rgba(66, 133, 244, 0)"] } : {}}
                        transition={isActive ? { duration: 2, repeat: Infinity } : {}}
                        className="w-32 h-32 rounded-full border-4 border-black bg-google-blue flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] relative"
                    >
                        <Volume2 className="text-white w-12 h-12" />
                        {isActive && (
                            <div className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-50"></div>
                        )}
                    </motion.div>
                    
                    <div className="text-center">
                        <h3 className="text-2xl font-black text-black">Pizza Bot</h3>
                        <p className={`text-sm font-bold ${isActive ? 'text-google-green' : 'text-gray-400'}`}>
                            {isActive ? '00:14 • Connected' : 'Ready to call'}
                        </p>
                    </div>

                    {/* Chat Bubbles */}
                    <div className="w-full space-y-3 h-48 overflow-y-auto no-scrollbar flex flex-col justify-end">
                       <AnimatePresence>
                          {messages.slice(-3).map((msg, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className={`p-3 rounded-2xl text-sm font-bold max-w-[80%] ${msg.isUser ? 'bg-black text-white self-end rounded-br-none' : 'bg-gray-200 text-black self-start rounded-bl-none'}`}
                              >
                                {msg.text}
                              </motion.div>
                          ))}
                       </AnimatePresence>
                    </div>
                 </div>

                 {/* Controls */}
                 <div className="mt-auto pt-6 flex justify-center gap-6">
                    <button className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-300">
                        <Mic size={24} className="text-gray-600" />
                    </button>
                    <button 
                        onClick={handleCallToggle}
                        className={`w-20 h-20 rounded-full flex items-center justify-center border-4 border-transparent transition-all shadow-lg ${isActive ? 'bg-google-red rotate-[135deg]' : 'bg-google-green'}`}
                    >
                        {isActive ? <PhoneOff size={32} className="text-white" /> : <Phone size={32} className="text-white" />}
                    </button>
                    <button className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-300">
                        <Volume2 size={24} className="text-gray-600" />
                    </button>
                 </div>

              </div>
            </div>
        </div>
      </div>
    </section>
  );
};