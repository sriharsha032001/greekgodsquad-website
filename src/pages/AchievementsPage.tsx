import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import { FiX } from 'react-icons/fi';

type Achievement = {
  title: string;
  description: string;
  imageUrl: string;
};

const AchievementsPage = () => {
  const navigate = useNavigate();
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const clientAchievements: Achievement[] = [
    {
      title: "ICN Pro Card Winner",
      description:
        "The ICN Pro Card is one of the most coveted titles in the world of bodybuilding. Achieving this honor is a significant milestone in any athlete's career, and it showcases not only an impressive physique but also dedication, discipline, and consistency in training. Winning the ICN Pro Card means earning recognition at an elite level of competition, competing against the best in the sport. This achievement is a symbol of excellence, perseverance, and a commitment to pushing limits.",
      imageUrl: "./pro-card.webp",
    },
    {
      title: "Muscle Mania Champion",
      description:
        "Muscle Mania is one of the most prestigious fitness competitions worldwide, attracting top-tier athletes and bodybuilders from across the globe. As a finalist, this achievement highlights exceptional muscle definition, aesthetic proportions, and stage presentation. The competition requires not just physical conditioning, but also the ability to present oneself under the spotlight, engaging with the audience and judges. Being named a finalist in Muscle Mania represents months of grueling preparation, smart training strategies, and impeccable stage presence.",
      imageUrl: "./muscle-mania.webp",
    },
    {
      title: "Hammer Champion",
      description:
        "The Hammer event is a rigorous strength and physique competition that tests both muscle size and strength. Winning the Hammer is no small feat, as it requires incredible physical power, endurance, and mental fortitude. The title represents not just brute force, but also the ability to push past limits and stay resilient under pressure. The competition is about more than just building size—it's about perfecting strength while maintaining balance, and the Hammer Champion title signifies the culmination of years of dedication to both strength and hypertrophy training.",
      imageUrl: "./hammer.webp",
    },
    {
      title: "40+ Local Trophies",
      description:
        "In addition to these major accomplishments, the athlete has collected over 40 local trophies, recognizing their dominance in regional and national competitions. These trophies represent years of consistent performance, showcasing dedication, hard work, and commitment to excellence. Each local victory serves as a stepping stone, contributing to the athlete's overall journey in the world of bodybuilding. These trophies acknowledge the athlete's status as a champion at the grassroots level and highlight their rise through various competitive tiers before reaching global prominence.",
      imageUrl: "./welcome-bg.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans antialiased overflow-x-hidden relative">
       {/* Background Gradient & Shapes */}
       <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <main className="relative z-10 p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate('/')}
            className="mb-8 px-5 py-2 bg-white/10 border border-white/20 text-white font-bold shadow-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Home
          </motion.button>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Hall of Achievements
          </motion.h1>
          
          <motion.p 
            className="max-w-3xl mx-auto text-center text-lg text-gray-300 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Every trophy tells a story of dedication, discipline, and the relentless pursuit of greatness. Here are some of the milestones from our journey.
          </motion.p>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                layoutId={`achievement-card-${achievement.title}`}
                className="relative h-96 bg-gray-900 rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
                onClick={() => setSelectedAchievement(achievement)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <img
                  src={achievement.imageUrl}
                  alt={achievement.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
                  <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                  <p className="font-semibold text-red-400">Read Full Story →</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={() => setSelectedAchievement(null)} />
            
            <motion.div
              layoutId={`achievement-card-${selectedAchievement.title}`}
              className="relative w-full max-w-3xl max-h-[90vh] bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="h-80 bg-black">
                <img src={selectedAchievement.imageUrl} alt={selectedAchievement.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 overflow-y-auto" style={{maxHeight: 'calc(90vh - 20rem)'}}>
                <h2 className="text-3xl font-bold mb-3">{selectedAchievement.title}</h2>
                <p className="text-gray-300 leading-relaxed">{selectedAchievement.description}</p>
              </div>
              <motion.button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2"
                onClick={() => setSelectedAchievement(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
              >
                <FiX size={24} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AchievementsPage;
