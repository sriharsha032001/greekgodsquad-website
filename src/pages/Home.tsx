import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import DumbbellLoader from '../components/DumbbellLoader';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(path);
    }, 1500);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const dob = formData.get('dob');
    const age = formData.get('age');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const height = formData.get('height');
    const weight = formData.get('weight');

    if (!name || !dob || !age || !phone || !email || !height || !weight) {
      alert('All fields are mandatory.');
      setLoading(false);
      return;
    }

    const message = encodeURIComponent(
      `Hi! I'm interested in joining The Greek God Squad.\n\n` +
      `Name: ${name}\n` +
      `Date of Birth: ${dob}\n` +
      `Age: ${age}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Height: ${height}\n` +
      `Weight: ${weight}`
    );

    const phoneNumber = '919160427763';

    setTimeout(() => {
      setLoading(false);
      window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    }, 1500);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white font-sans"
      style={{ backgroundImage: "url('./welcome-bg.JPG')" }}
    >
      <DumbbellLoader show={loading} />

      {/* Top Bar */}
      <div className="bg-black bg-opacity-80 text-white py-4 px-6 shadow-sm flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
        <h1 className="text-xl font-semibold tracking-wide text-center md:text-left">
          The Greek God Squad
        </h1>

        <div className="flex items-center justify-center md:justify-end gap-4 flex-wrap">
          <button onClick={() => handleClick('/achievements')} className="hover:underline hover:text-gray-300 transition text-sm">
            Achievements
          </button>
          <button onClick={() => handleClick('/clients')} className="hover:underline hover:text-gray-300 transition text-sm">
            Transformations
          </button>
          <a
            href="https://apps.apple.com/app/thegreekgodsquad/id6740698559"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black text-xs px-3 py-1.5 rounded-md hover:bg-gray-200 transition"
          >
            iOS App
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.ydl.thegreekgodsquad"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black text-xs px-3 py-1.5 rounded-md hover:bg-gray-200 transition"
          >
            Android App
          </a>
        </div>
      </div>

      {/* Welcome Heading */}
      <div className="flex items-center justify-center py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-white drop-shadow"
        >
          WELCOME TO THE GREEK GOD SQUAD
        </motion.h1>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 pb-24 max-w-7xl mx-auto">
        {/* Left: About + Coaches */}
        <div>
          {/* About */}
          <div className="mb-10 bg-black/60 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4 text-white">About Us</h2>
            <p className="text-gray-300 leading-relaxed text-base">
              The Greek God Squad is more than a fitness program — it's a transformation
              movement. We're focused on building stronger bodies and sharper minds through
              customized training, nutrition, and community-driven motivation.
            </p>
          </div>

          {/* Coaches */}
          <div className="bg-black/60 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6 text-white">Meet Our Coaches</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Coach 1 */}
              <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <img
                  src="./coach1.jpeg"
                  alt="Coach 1"
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white"
                />
                <h4 className="text-lg font-bold text-white">Chakri - The GreekGod</h4>
                <p className="text-sm text-gray-300">Fitness Coach</p>
                <p className="mt-2 text-gray-400 text-sm">
                  Specializes in strength training and body transformation with 5+ years of experience.
                </p>
                <a
                  href="https://www.instagram.com/the_greek_.god_?igsh=MTJmdGpuZXdzdDR5dw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-blue-400 hover:underline text-sm"
                >
                  @the_greek_god
                </a>
              </div>

              {/* Coach 2 */}
              <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <img
                  src="./coach2.jpeg"
                  alt="Coach 2"
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white"
                />
                <h4 className="text-lg font-bold text-white">Deva Kiran</h4>
                <p className="text-sm text-gray-300">Fitness Coach</p>
                <p className="mt-2 text-gray-400 text-sm">
                  Specializes in strength training and body transformation with 3+ years of experience.
                </p>
                <a
                  href="https://www.instagram.com/deva.inx?igsh=YjJ1amRieWh3MTJq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-blue-400 hover:underline text-sm"
                >
                  @deva.inx
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Join Form */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-xl shadow-2xl text-white self-start w-full">
          <h3 className="text-xl font-bold mb-6 text-center">Join the Squad</h3>
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <input name="name" type="text" required placeholder="Name" className="w-full bg-white/20 border border-white/30 rounded-md p-2 text-sm placeholder-white" />
            <input name="dob" type="date" required className="w-full bg-white/20 border border-white/30 rounded-md p-2 text-sm text-white" />
            <input name="age" type="number" required placeholder="Age" className="w-full bg-white/20 border border-white/30 rounded-md p-2 text-sm placeholder-white" />
            <input name="phone" type="tel" required placeholder="Phone Number" className="w-full bg-white/20 border border-white/30 rounded-md p-2 text-sm placeholder-white" />
            <input name="email" type="email" required placeholder="Email Address" className="w-full bg-white/20 border border-white/30 rounded-md p-2 text-sm placeholder-white" />
            <input name="height" type="text" required placeholder="Height (e.g. 5'8 or 172 cm)" className="w-full bg-white/20 border border-white/30 rounded-md p-2 text-sm placeholder-white" />
            <input name="weight" type="text" required placeholder="Weight (e.g. 70 kg)" className="w-full bg-white/20 border border-white/30 rounded-md p-2 text-sm placeholder-white" />
            <button type="submit" className="w-full mt-4 bg-white text-black py-2 rounded-md hover:bg-gray-200 transition text-sm font-medium">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
