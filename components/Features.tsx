import React from 'react';
import { motion } from 'framer-motion';
import { Video, FileText, CheckCircle2, FlaskConical, DollarSign, CalendarCheck } from 'lucide-react';

interface FeaturesProps {
  darkMode: boolean;
}

export const Features: React.FC<FeaturesProps> = ({ darkMode }) => {
  const steps = [
    {
      step: "01",
      title: "Schedule Meeting",
      desc: "Book a 30-min discovery call. We'll discuss your business needs and pain points.",
      icon: CalendarCheck,
      color: "bg-google-blue",
      rotate: "rotate-1"
    },
    {
      step: "02",
      title: "Video Consultation",
      desc: "We meet on a video call. You explain exactly what you need the agent to do.",
      icon: Video,
      color: "bg-google-red",
      rotate: "-rotate-1"
    },
    {
      step: "03",
      title: "Requirement Doc",
      desc: "Within 48 hours, I send you a detailed requirement document outlining the agent's logic.",
      icon: FileText,
      color: "bg-google-yellow",
      rotate: "rotate-2"
    },
    {
      step: "04",
      title: "You Approve",
      desc: "You review the plan. We tweak it until it's perfect. I don't start coding until you say 'Go'.",
      icon: CheckCircle2,
      color: "bg-google-green",
      rotate: "-rotate-2"
    },
    {
      step: "05",
      title: "I Build for Free",
      desc: "I build the prototype at my own risk. You get to test-drive the agent with real calls.",
      icon: FlaskConical,
      color: "bg-google-blue",
      rotate: "rotate-1"
    },
    {
      step: "06",
      title: "Pay & Launch",
      desc: "Only when you are satisfied with the results, you pay the agreed price and we go live.",
      icon: DollarSign,
      color: "bg-google-red",
      rotate: "-rotate-1"
    }
  ];

  return (
    <section id="features" className="py-20 relative scroll-mt-32">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">How I <span className="text-google-blue">Work</span></h2>
        <p className="text-xl font-medium opacity-80 max-w-2xl mx-auto">A risk-free process designed for your peace of mind.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, rotate: 0 }}
            className={`
              relative p-8 border-4 ${darkMode ? 'border-white bg-dark-bg' : 'border-black bg-white'} 
              ${darkMode ? 'shadow-[8px_8px_0px_0px_#fff]' : 'shadow-[8px_8px_0px_0px_#000]'}
              hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px]
              transition-all duration-200 group cursor-pointer flex flex-col h-full
              ${item.rotate}
            `}
          >
            <div className={`absolute -top-6 -right-6 p-4 border-2 border-black ${item.color} text-white rounded-full shadow-[4px_4px_0px_0px_#000]`}>
              <item.icon size={32} strokeWidth={2.5} />
            </div>
            
            <div className="text-6xl font-black opacity-10 absolute left-4 top-2 select-none pointer-events-none">
                {item.step}
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-4 group-hover:text-google-blue transition-colors z-10">{item.title}</h3>
            <p className="font-medium text-lg leading-relaxed opacity-90 z-10">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};