import React from 'react';
import { motion } from 'framer-motion';
import { Headset, TrendingUp, CalendarDays, ArrowUpRight } from 'lucide-react';

interface UseCasesProps {
  darkMode: boolean;
}

export const UseCases: React.FC<UseCasesProps> = ({ darkMode }) => {
  const cases = [
    {
      title: "Inbound Support",
      icon: Headset,
      color: "bg-google-blue",
      desc: "Handle FAQs, order status, and troubleshooting 24/7. Never miss a customer call again, even at 3 AM.",
      stats: "Reduce support costs by 70%"
    },
    {
      title: "Outbound Sales",
      icon: TrendingUp,
      color: "bg-google-red",
      desc: "Qualify leads, follow up on forms, and reactivate dormant customers. Your AI agent dials while you sleep.",
      stats: "3x your daily call volume"
    },
    {
      title: "Appointment Setting",
      icon: CalendarDays,
      color: "bg-google-green",
      desc: "Perfect for dentists, real estate, and service businesses. The agent books slots directly into your calendar.",
      stats: "Zero scheduling conflicts"
    }
  ];

  return (
    <section id="use-cases" className="py-20 px-4 scroll-mt-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">What I Can <span className="text-google-blue underline decoration-4 underline-offset-4">Build</span></h2>
        <p className="text-xl font-medium opacity-80 max-w-2xl mx-auto">Replace generic chatbots with human-like voice intelligence.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cases.map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className={`
              flex flex-col h-full p-8 border-4 border-black rounded-xl relative overflow-hidden group
              ${darkMode ? 'bg-dark-bg text-white shadow-[8px_8px_0px_0px_#fff]' : 'bg-white shadow-[8px_8px_0px_0px_#000]'}
            `}
          >
            <div className={`w-16 h-16 ${item.color} rounded-full border-2 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_#000]`}>
              <item.icon size={32} className="text-white" strokeWidth={2.5} />
            </div>

            <h3 className="text-2xl font-black mb-4">{item.title}</h3>
            <p className="text-lg opacity-80 mb-8 flex-grow leading-relaxed">
              {item.desc}
            </p>

            <div className={`p-4 border-2 border-dashed ${darkMode ? 'border-gray-500 bg-gray-900' : 'border-gray-300 bg-gray-50'} rounded-lg font-bold flex items-center gap-2`}>
              <ArrowUpRight size={20} className={item.color.replace('bg-', 'text-')} />
              {item.stats}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};