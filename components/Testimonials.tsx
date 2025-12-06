import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  darkMode: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ darkMode }) => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Dental Practice Owner",
      text: "I was skeptical about the 'free build' offer, but Vipul delivered. The agent handles 90% of our appointment rescheduling now. It feels like magic.",
      color: "bg-google-blue"
    },
    {
      name: "Mike Ross",
      role: "Real Estate Broker",
      text: "We used to miss calls during showings. Now, the AI captures every lead and books a follow-up. It paid for itself in the first week.",
      color: "bg-google-green"
    },
    {
      name: "David Chen",
      role: "E-commerce Manager",
      text: "The latency is non-existent. My customers literally think they are talking to a human support agent. The best investment for our CX team.",
      color: "bg-google-red"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 scroll-mt-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">Trust the <span className="text-google-yellow underline decoration-4 underline-offset-4 decoration-black">Process</span></h2>
        <p className="text-xl font-medium opacity-80 max-w-2xl mx-auto">Don't just take my word for it. Here is what business owners are saying.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`
              relative p-8 border-4 border-black rounded-xl flex flex-col gap-4
              ${darkMode ? 'bg-dark-bg text-white shadow-[8px_8px_0px_0px_#fff]' : 'bg-white shadow-[8px_8px_0px_0px_#000]'}
            `}
          >
            <div className={`absolute -top-5 -left-5 p-3 rounded-full border-2 border-black ${review.color} text-white shadow-[2px_2px_0px_0px_#000]`}>
              <Quote size={24} fill="currentColor" />
            </div>

            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={20} className="text-google-yellow fill-google-yellow" />
              ))}
            </div>

            <p className="text-lg font-medium leading-relaxed italic opacity-90">
              "{review.text}"
            </p>

            <div className="mt-auto pt-4 border-t-2 border-dashed border-gray-300">
              <div className="font-bold text-xl">{review.name}</div>
              <div className="text-sm font-bold opacity-60 uppercase tracking-wider">{review.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};