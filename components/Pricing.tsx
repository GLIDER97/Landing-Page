import React from 'react';
import { NeoButton } from './NeoButton';
import { Check, Calendar, Info } from 'lucide-react';

interface PricingProps {
  darkMode: boolean;
}

export const Pricing: React.FC<PricingProps> = ({ darkMode }) => {
  const plans = [
    {
      name: "BASIC",
      price: "$540",
      period: "/month",
      color: "border-google-blue",
      btnVariant: "primary" as const,
      features: [
        "1,800 minutes included",
        "~60 minutes/day",
        "Perfect for small teams",
        "Email support",
        "Overage: $0.35/min"
      ]
    },
    {
      name: "PRO",
      price: "$1,350",
      period: "/month",
      popular: true,
      color: "border-google-red",
      btnVariant: "accent-red" as const,
      features: [
        "4,500 minutes included",
        "~150 minutes/day",
        "Great for growing businesses",
        "Priority support",
        "Overage: $0.32/min"
      ]
    },
    {
      name: "ENTERPRISE",
      price: "$2,700",
      period: "/month",
      color: "border-google-green",
      btnVariant: "accent-green" as const,
      features: [
        "9,000 minutes included",
        "~300 minutes/day",
        "For high-volume operations",
        "Dedicated account manager",
        "Overage: $0.30/min"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 scroll-mt-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">Replace Your <span className="text-google-green">Call Center</span></h2>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Hiring a human costs $3,000+/mo. Hire an AI for a fraction of the price. 
            <br/><span className="font-bold text-google-red">Pay $0 development fees.</span>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <div 
            key={i}
            className={`
              relative w-full max-w-md p-8 border-4 border-black 
              ${darkMode ? 'bg-dark-bg text-white shadow-[8px_8px_0px_0px_#fff]' : 'bg-white shadow-[8px_8px_0px_0px_#000]'}
              flex flex-col gap-6
              ${plan.popular ? 'scale-105 z-10' : 'scale-100'}
            `}
          >
            {plan.popular && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-google-yellow text-black font-bold px-4 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                BEST VALUE
              </div>
            )}

            <div className="text-center border-b-2 border-dashed border-gray-300 pb-6">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-black">{plan.price}</div>
              <span className="opacity-60 font-bold text-sm">{plan.period}</span>
            </div>

            <ul className="flex-1 space-y-4">
              {plan.features.map((feat, j) => (
                <li key={j} className="flex items-center gap-3 font-medium">
                  <div className={`p-1 rounded bg-black text-white`}>
                    <Check size={14} strokeWidth={4} />
                  </div>
                  {feat}
                </li>
              ))}
            </ul>

            <NeoButton 
              variant={plan.btnVariant} 
              className="w-full" 
              darkMode={darkMode}
              onClick={() => window.open('https://calendly.com', '_blank')} 
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Meeting
            </NeoButton>
            <p className="text-xs text-center font-bold opacity-50 mt-[-10px]">30-min discovery call</p>
          </div>
        ))}
      </div>

      <div className={`max-w-3xl mx-auto mt-12 p-6 border-2 border-dashed ${darkMode ? 'border-gray-600 bg-gray-900' : 'border-gray-400 bg-gray-50'} rounded-xl text-center`}>
          <div className="flex items-center justify-center gap-2 font-bold mb-2">
            <Info size={20} />
            <span>How Overage Works</span>
          </div>
          <p className="opacity-80">
            Minutes are calculated based on connection time. If you exceed your monthly allowance, 
            overage applies automatically at $0.30 - $0.35 per minute depending on your plan.
          </p>
      </div>
    </section>
  );
};