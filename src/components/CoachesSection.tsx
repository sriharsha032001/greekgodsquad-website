import React from 'react';
import { motion } from 'framer-motion';

const coaches = [
  {
    name: 'Chakri - The GreekGod',
    title: 'Fitness Coach',
    description: 'Strength training & body transformation, 5+ years experience.',
    image: './coach1.webp',
    link: 'https://www.instagram.com/the_greek_.god_?igsh=MTJmdGpuZXdzdDR5dw==',
    handle: '@the_greek_god',
  },
  {
    name: 'Deva Kiran',
    title: 'Fitness Coach',
    description: 'Strength training & body transformation, 3+ years experience.',
    image: './coach2.webp',
    link: 'https://www.instagram.com/deva.inx?igsh=YjJ1amRieWh3MTJq',
    handle: '@deva.inx',
  },
];

export default function CoachesSection() {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">Meet Our Coaches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {coaches.map((coach, idx) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              <img
                src={coach.image}
                alt={coach.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-400 shadow-lg"
                loading="lazy"
                decoding="async"
              />
              <h4 className="text-lg font-bold text-gray-800 mb-1">{coach.name}</h4>
              <p className="text-sm text-green-600 font-semibold mb-1">{coach.title}</p>
              <p className="mt-2 text-gray-700 text-sm font-semibold">{coach.description}</p>
              <a
                href={coach.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-blue-500 hover:underline text-sm font-bold"
              >
                {coach.handle}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 