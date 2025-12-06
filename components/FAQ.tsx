import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus } from 'lucide-react';

interface FAQProps {
  darkMode: boolean;
}

export const FAQ: React.FC<FAQProps> = ({ darkMode }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Does the voice sound robotic?",
      a: "Not at all. I use the latest ultra-low latency models (OpenAI Realtime / Vapi) that capture breathing, pauses, and intonation. Most callers don't realize they are speaking to an AI."
    },
    {
      q: "Can it integrate with my CRM?",
      a: "Yes. I can integrate with HubSpot, Salesforce, GoHighLevel, Zapier, and Cal.com. The agent can read from your CRM to personalize calls and write back to it to update lead status."
    },
    {
      q: "What happens if the caller interrupts?",
      a: "The AI handles interruptions naturally. It stops speaking immediately, listens to the new input, and pivots the conversation, just like a human would."
    },
    {
      q: "Is there a setup fee?",
      a: "No. For my standard packages, development is included. I build the agent for free, you test it, and you only start the monthly subscription if you're happy."
    },
    {
      q: "Can I transfer complex calls to a human?",
      a: "Absolutely. We can set up logic where if the AI gets stuck or the user asks for a human, it performs a warm transfer to your real phone line."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 max-w-4xl mx-auto scroll-mt-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black mb-4 uppercase">Got <span className="text-google-red">Questions?</span></h2>
      </div>

      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div 
            key={i}
            className={`border-2 border-black rounded-lg overflow-hidden transition-all ${activeIndex === i ? (darkMode ? 'bg-gray-800' : 'bg-white shadow-[4px_4px_0px_0px_#000]') : (darkMode ? 'bg-dark-bg' : 'bg-gray-50')}`}
          >
            <button 
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              className="w-full p-6 flex justify-between items-center text-left font-bold text-lg md:text-xl"
            >
              {item.q}
              <motion.div
                animate={{ rotate: activeIndex === i ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Plus size={24} />
              </motion.div>
            </button>
            <AnimatePresence>
              {activeIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 opacity-80 leading-relaxed text-base md:text-lg border-t-2 border-dashed border-gray-300 mt-2">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};