import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import DumbbellLoader from '../components/DumbbellLoader';
import LazyLoadingContent from '../components/LazyLoadContent';

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
    <motion.div
      className="min-h-screen text-black font-sans px-4 sm:px-6 relative overflow-hidden"
      // Animated, lightweight gradient background:
      style={{
        backgroundImage: 'linear-gradient(-45deg, #ffffff, #f3f4f6, #e5e7eb, #ffffff)',
        backgroundSize: '400% 400%',
      }}
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ backgroundPosition: '100% 50%' }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <DumbbellLoader show={loading} />

      {/* Navbar */}
      <div className="py-4 px-4 sm:px-6 bg-black text-white shadow-md flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sticky top-0 z-10">
        <h1 className="text-2xl font-extrabold tracking-widest uppercase text-center sm:text-left">
          The Greek God Squad
        </h1>
        <div className="flex items-center justify-center sm:justify-end gap-3 flex-wrap">
          <button onClick={() => handleClick('/achievements')} className="hover:text-gray-400 transition text-sm font-semibold">
            Achievements
          </button>
          <button onClick={() => handleClick('/clients')} className="hover:text-gray-400 transition text-sm font-semibold">
            Transformations
          </button>
          <button onClick={() => handleClick('/ebooks')} className="hover:text-gray-400 transition text-sm font-semibold">
            Explore Ebooks
          </button>
          <a
            href="https://apps.apple.com/app/thegreekgodsquad/id6740698559"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black text-xs px-3 py-1.5 rounded-md hover:bg-gray-200 transition font-semibold"
          >
            iOS App
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.ydl.thegreekgodsquad"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black text-xs px-3 py-1.5 rounded-md hover:bg-gray-200 transition font-semibold"
          >
            Android App
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex items-center justify-center py-12 sm:py-16 px-2 bg-gradient-to-br from-gray-100 via-white to-gray-100">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-center drop-shadow px-2"
        >
          WELCOME TO THE GREEK GOD SQUAD
        </motion.h1>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-20 max-w-6xl mx-auto">
        {/* Left Section */}
        <LazyLoadingContent>
          <div className="space-y-10">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold mb-4">About Us</h2>
              <p className="text-gray-700 text-base font-bold">
                The Greek God Squad is more than a fitness program — it's a transformation
                movement. We're focused on building stronger bodies and sharper minds through
                customized training, nutrition, and community-driven motivation.
              </p>
            </motion.div>

            {/* Why Join */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold mb-4">Why Join Us?</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-800 font-bold">
                <li>Customized training programs tailored to your body</li>
                <li>Expert diet plans crafted by our coaches</li>
                <li>Regular progress tracking & feedback</li>
                <li>Motivational community support</li>
                <li>Flexible access via our mobile app</li>
              </ul>
            </motion.div>

            {/* Coaches */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold mb-6">Meet Our Coaches</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[{
                    name: 'Chakri - The GreekGod',
                    title: 'Fitness Coach',
                    description: 'Specializes in strength training and body transformation with 5+ years of experience.',
                    image: './coach1.jpeg',
                    link: 'https://www.instagram.com/the_greek_.god_?igsh=MTJmdGpuZXdzdDR5dw==',
                    handle: '@the_greek_god'
                  },
                  {
                    name: 'Deva Kiran',
                    title: 'Fitness Coach',
                    description: 'Specializes in strength training and body transformation with 3+ years of experience.',
                    image: './coach2.jpeg',
                    link: 'https://www.instagram.com/deva.inx?igsh=YjJ1amRieWh3MTJq',
                    handle: '@deva.inx'
                  }
                ].map((coach, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center text-center bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                  >
                    <img src={coach.image} alt={coach.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-black" />
                    <h4 className="text-lg font-bold">{coach.name}</h4>
                    <p className="text-sm text-gray-600 font-bold">{coach.title}</p>
                    <p className="mt-2 text-gray-600 text-sm font-bold">{coach.description}</p>
                    <a href={coach.link} target="_blank" rel="noopener noreferrer" className="mt-3 text-blue-600 hover:underline text-sm font-bold">
                      {coach.handle}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </LazyLoadingContent>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:max-w-md mx-auto bg-gray-100 border border-gray-200 p-6 rounded-xl shadow-md self-start hover:shadow-lg transition"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Join the Squad</h3>
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            {['name', 'dob', 'age', 'phone', 'email', 'height', 'weight'].map((field, idx) => (
              <input
                key={idx}
                name={field}
                type={field === 'age' ? 'number' : field === 'email' ? 'email' : 'text'}
                required
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="w-full bg-white border border-gray-300 rounded-md p-3 text-base font-bold"
              />
            ))}
            <button type="submit" className="w-full bg-blue-600 py-3 rounded-md text-white hover:bg-blue-500 transition font-bold text-base">
              Join Now
            </button>
          </form>

          {/* Testimonial Section */}
          <div className="mt-8">
            <h4 className="text-lg font-bold text-center mb-2">What Our Members Say</h4>
            <p className="text-sm text-gray-700 text-center italic font-semibold">
              “Joining the Greek God Squad was the best decision I ever made. I feel stronger, more disciplined, and part of an amazing community!” – Abhiram.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-600 px-4 text-sm font-bold">
        <p>&copy; 2025 The Greek God Squad. All rights reserved.</p>
        <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-3">
          <Link to="/pricingpolicy" className="hover:text-black font-bold">Pricing Policy</Link>
          <Link to="/shipping" className="hover:text-black font-bold">Shipping Policy</Link>
          <Link to="/termsandconditions" className="hover:text-black font-bold">Terms & Conditions</Link>
          <Link to="/privacypolicy" className="hover:text-black font-bold">Privacy Policy</Link>
          <Link to="/refund" className="hover:text-black font-bold">Cancellation/Refund</Link>
          <Link to="/contactus" className="hover:text-black font-bold">Contact Us</Link>
        </div>
      </footer>
    </motion.div>
  );
}
