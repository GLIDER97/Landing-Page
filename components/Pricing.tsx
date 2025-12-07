import React from 'react';
import { NeoButton } from './NeoButton';
import { Check, ShieldCheck, Rocket, Zap } from 'lucide-react';

interface PricingProps {
  darkMode: boolean;
}

export const Pricing: React.FC<PricingProps> = ({ darkMode }) => {
  return (
    <section id="pricing" className="py-20 px-4 scroll-mt-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">
          Simple <span className="text-google-green">Pricing</span>. <br/>
          Unmatched <span className="text-google-blue">ROI</span>.
        </h2>
        <p className="text-xl opacity-80 max-w-2xl mx-auto font-medium">
            Stop renting generic software. <br/>
            <span className="bg-google-yellow text-black px-2 border-2 border-black inline-block transform -rotate-1 mt-2 shadow-[2px_2px_0px_0px_#000]">Own a custom AI workforce.</span>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center max-w-6xl mx-auto">
        
        {/* Card 1: The Build */}
        <div className={`
          relative flex-1 p-8 md:p-10 border-4 border-black rounded-2xl
          ${darkMode ? 'bg-dark-bg text-white shadow-[8px_8px_0px_0px_#fff]' : 'bg-white shadow-[8px_8px_0px_0px_#000]'}
          flex flex-col
        `}>
           <div className="absolute -top-6 left-8 bg-google-blue text-white font-black px-6 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#000] -rotate-2">
             PHASE 1: THE BUILD
           </div>

           <div className="mt-8 mb-6 border-b-2 border-dashed border-gray-400 pb-6">
              <h3 className="text-3xl font-black mb-2">Custom Implementation</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black">$1,000</span>
                <span className="text-xl font-bold opacity-60">/ one-time</span>
              </div>
              <p className="mt-4 font-bold opacity-80">
                A fully bespoke AI infrastructure engineered specifically for your business logic and brand voice.
              </p>
           </div>

           <ul className="space-y-4 mb-8 flex-1">
              {[
                "Strategic Workflow Analysis",
                "Advanced Prompt Engineering",
                "Full CRM & Calendar Integration",
                "Human-like Voice Calibration",
                "Rigorous QA & Latency Optimization"
              ].map((feat, i) => (
                <li key={i} className="flex items-start gap-3 font-medium text-lg">
                  <div className="mt-1 min-w-[20px]"><Check size={20} strokeWidth={4} className="text-google-blue" /></div>
                  {feat}
                </li>
              ))}
           </ul>

           <div className={`p-4 mb-8 rounded-lg border-2 ${darkMode ? 'border-gray-600 bg-gray-900' : 'border-blue-100 bg-blue-50'} flex items-start gap-3`}>
              <ShieldCheck size={28} className="text-google-green flex-shrink-0 mt-1" />
              <p className="text-sm font-bold leading-relaxed">
                <span className="text-google-green uppercase text-base">Ironclad Guarantee:</span><br/>
                We build it first. You test it. You pay the setup fee <span className="underline decoration-2">only when you are 100% satisfied</span> with the performance.
              </p>
           </div>
        </div>

        {/* Card 2: The Scale */}
        <div className={`
          relative flex-1 p-8 md:p-10 border-4 border-black rounded-2xl
          ${darkMode ? 'bg-gray-900 text-white shadow-[8px_8px_0px_0px_#fff]' : 'bg-off-white shadow-[8px_8px_0px_0px_#000]'}
          flex flex-col
        `}>
           <div className="absolute -top-6 right-8 bg-google-green text-white font-black px-6 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#000] rotate-2">
             PHASE 2: THE SCALE
           </div>

           <div className="mt-8 mb-6 border-b-2 border-dashed border-gray-400 pb-6">
              <h3 className="text-3xl font-black mb-2">Usage & Operation</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black">$0.16</span>
                <span className="text-xl font-bold opacity-60">/ minute</span>
              </div>
              <p className="mt-4 font-bold opacity-80">
                Billed monthly based on usage. No hidden platform fees. No minimums.
              </p>
           </div>

           <ul className="space-y-4 mb-8 flex-1">
              {[
                "Zero Fixed Monthly Costs",
                "Pay Only For Connected Minutes",
                "Unlimited Concurrent Scalability",
                "Includes Transcriptions & Recordings",
                "24/7 Enterprise Server Maintenance"
              ].map((feat, i) => (
                <li key={i} className="flex items-start gap-3 font-medium text-lg">
                  <div className="mt-1 min-w-[20px]"><Zap size={20} strokeWidth={3} className="text-google-green fill-google-green" /></div>
                  {feat}
                </li>
              ))}
           </ul>

           <div className="mt-auto">
             <NeoButton 
                variant="accent-green" 
                className="w-full text-center justify-center" 
                size="lg"
                darkMode={darkMode}
                onClick={() => window.open('https://calendly.com', '_blank')} 
              >
                <Rocket className="w-6 h-6 mr-2" />
                Build My Agent
              </NeoButton>
              <p className="text-xs text-center font-bold opacity-50 mt-3">No credit card required for consultation</p>
           </div>
        </div>

      </div>
    </section>
  );
};