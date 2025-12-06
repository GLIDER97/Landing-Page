import React from 'react';
import { motion } from 'framer-motion';
import { NeoButton } from './NeoButton';
import { ArrowRight, Calendar, Zap } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };
  
  return (
    <section className="relative pt-20 pb-10 flex flex-col items-center text-center overflow-x-clip">
      {/* Decorative Floating Shapes */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-10 left-[5%] w-16 h-16 md:w-24 md:h-24 rounded-full border-4 ${darkMode ? 'border-white bg-google-blue' : 'border-black bg-google-blue'} z-0`}
      />
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute bottom-20 right-[10%] w-20 h-20 md:w-32 md:h-32 rotate-45 border-4 ${darkMode ? 'border-white bg-google-red' : 'border-black bg-google-red'} z-0`}
      />
      <motion.div 
        animate={{ x: [0, 20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-40 right-[15%] w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[60px] ${darkMode ? 'border-b-google-yellow' : 'border-b-google-yellow'} drop-shadow-[4px_4px_0_rgba(0,0,0,1)] z-0`}
      />

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 max-w-4xl mx-auto space-y-8"
      >
        <motion.div variants={item} className={`inline-block px-4 py-2 border-2 ${darkMode ? 'border-white bg-gray-800' : 'border-black bg-white'} shadow-neo-sm rotate-[-2deg]`}>
          <span className="font-bold flex items-center gap-2 text-sm md:text-base">
             <Zap size={18} className="fill-google-yellow text-black" /> 
             Freelance AI Engineer
          </span>
        </motion.div>

        <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
          I BUILD <span className="text-google-blue underline decoration-4 decoration-black underline-offset-8">AI</span> CALLING AGENTS<br/>
          THAT WORK <br />
          <span className="bg-google-green text-white px-4 border-2 border-black inline-block transform -rotate-2 mt-2 shadow-[6px_6px_0px_0px_#000]">FOR YOU</span>
        </motion.h1>

        <motion.p variants={item} className="text-xl md:text-2xl max-w-2xl mx-auto font-medium opacity-90">
          I create custom Voice AI agents for businesses. <br/>
          <span className="font-bold underline decoration-google-yellow decoration-4">Zero upfront cost.</span> Pay only after you test the prototype and are 100% satisfied.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a href="#pricing">
            <NeoButton variant="accent-red" size="lg" darkMode={darkMode}>
              Schedule Meeting
              <Calendar size={24} />
            </NeoButton>
          </a>
          <a href="#demo">
            <NeoButton variant="secondary" size="lg" darkMode={darkMode} className={darkMode ? "!bg-transparent !text-white" : ""}>
              See It In Action
              <ArrowRight size={24} />
            </NeoButton>
          </a>
        </motion.div>

        <motion.div variants={item} className="pt-12 flex flex-col items-center gap-4 opacity-70">
             <p className="font-bold text-sm uppercase tracking-widest">Tech Stack</p>
             <div className="flex gap-8 md:gap-12 flex-wrap justify-center font-bold text-xl">
                 <span className="flex items-center gap-2"><div className="w-3 h-3 bg-google-blue rounded-full"></div>OpenAI</span>
                 <span className="flex items-center gap-2"><div className="w-3 h-3 bg-google-red rounded-full"></div>Vapi</span>
                 <span className="flex items-center gap-2"><div className="w-3 h-3 bg-google-yellow rounded-full"></div>Bland</span>
                 <span className="flex items-center gap-2"><div className="w-3 h-3 bg-google-green rounded-full"></div>Retell</span>
             </div>
        </motion.div>
      </motion.div>
    </section>
  );
};