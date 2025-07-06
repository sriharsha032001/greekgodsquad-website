import React, { useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import ZeusLoader from '../components/ZeusLoader';
import LazyLoadingContent from '../components/LazyLoadContent';

// Lazy load components
const ErrorFallback = lazy(() => import('../components/ErrorFallback'));

// Move coaches array and phone number constant outside the component
const COACHES = [
  {
    name: 'Chakri - The GreekGod',
    title: 'Fitness Coach',
    description: 'Specializes in strength training and body transformation with 5+ years of experience.',
    image: './coach1.webp',
    link: 'https://www.instagram.com/the_greek_.god_?igsh=MTJmdGpuZXdzdDR5dw==',
    handle: '@the_greek_god',
  },
  {
    name: 'Deva Kiran',
    title: 'Fitness Coach',
    description: 'Specializes in strength training and body transformation with 3+ years of experience.',
    image: './coach2.webp',
    link: 'https://www.instagram.com/deva.inx?igsh=YjJ1amRieWh3MTJq',
    handle: '@deva.inx',
  },
];

const WHATSAPP_PHONE_NUMBER = '919160427763';

// Update testimonials data to remove images
const TESTIMONIALS = [
  {
    name: "Abhiram",
    text: "Lost 15kg in 3 months! The Greek God Squad transformed not just my body, but my entire lifestyle. The personalized training and diet plans are exactly what I needed.",
    rating: 5,
    transformation: "15kg weight loss"
  },
  {
    name: "Rahul",
    text: "From skinny to strong! The personalized training and diet plans are game-changers. The coaches are incredibly supportive and knowledgeable.",
    rating: 5,
    transformation: "8kg muscle gain"
  },
  {
    name: "Priya",
    text: "The community support is incredible. Never felt alone in my fitness journey! Lost 12kg and gained so much confidence. Best investment in myself!",
    rating: 5,
    transformation: "12kg weight loss"
  }
];

// Restore original success metrics
const SUCCESS_METRICS = [
  { number: "500+", label: "Active Members" },
  { number: "95%", label: "Success Rate" },
  { number: "1000+", label: "Transformations" },
  { number: "4.9/5", label: "Member Rating" }
];

// Add limited time offer
const LIMITED_TIME_OFFER = {
  discount: "50%",
  validUntil: "30 days",
  spotsLeft: "450"
};

// Performance optimized image component
const OptimizedImage = React.memo(({ src, alt, className }: { src: string; alt: string; className: string }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    loading="lazy"
    decoding="async"
    width="96"
    height="96"
  />
));

OptimizedImage.displayName = 'OptimizedImage';

// Add will-change hint for better performance
const HeroTitle = React.memo(() => (
  <motion.h1
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white px-2 drop-shadow-lg mb-6 will-change-transform"
    style={{ textRendering: 'optimizeLegibility' }}
  >
    WELCOME TO THE GREEK GOD SQUAD
  </motion.h1>
));

HeroTitle.displayName = 'HeroTitle';

// Memoized components for better performance
const HeroSubtitle = React.memo(() => (
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="text-xl text-center text-yellow-400 mb-8 max-w-2xl"
    style={{ textRendering: 'optimizeLegibility' }}
  >
    Join 1000+ members who transformed their lives. Start your journey today!
  </motion.p>
));

const AboutSection = React.memo(() => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="bg-gray-900 bg-opacity-80 p-6 rounded-xl shadow-md hover:shadow-lg transition backdrop-blur-sm"
  >
    <h2 className="text-2xl font-bold mb-4">About Us</h2>
    <p className="text-gray-300 text-base font-bold">
      The Greek God Squad is more than a fitness program — it's a transformation
      movement. We're focused on building stronger bodies and sharper minds through
      customized training, nutrition, and community-driven motivation.
    </p>
    <div className="mt-4 flex items-center space-x-2">
      <span className="text-yellow-400">★</span>
      <span className="text-yellow-400">★</span>
      <span className="text-yellow-400">★</span>
      <span className="text-yellow-400">★</span>
      <span className="text-yellow-400">★</span>
      <span className="text-gray-300 text-sm">(4.9/5 from 1000+ reviews)</span>
    </div>
  </motion.div>
));

const WhyJoinSection = React.memo(() => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-800/50 border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-red-500/10 transition-shadow backdrop-blur-md"
  >
    <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">Why Join Us?</h2>
    <ul className="list-disc list-inside space-y-3 text-gray-300 font-medium">
      <li>Customized training programs tailored to your body</li>
      <li>Expert diet plans crafted by our coaches</li>
      <li>Regular progress tracking & feedback</li>
      <li>Motivational community support</li>
      <li>Flexible access via our mobile app</li>
      <li>Money-back guarantee if not satisfied</li>
    </ul>
  </motion.div>
));

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [age, setAge] = useState<number | null>(null);
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  // Use useCallback for handlers
  const handleClick = React.useCallback((path: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(path);
    }, 1500);
  }, [navigate]);

  const handleFormSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const dob = formData.get('dob');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const height = formData.get('height');
    const weight = formData.get('weight');
    if (!name || !dob || !phone || !email || !height || !weight) {
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
    setTimeout(() => {
      setLoading(false);
      window.location.href = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${message}`;
    }, 1500);
  }, [age]);

  const handleDobChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    
    // Format the date as user types
    if (value.length > 0) {
      if (value.length <= 2) {
        // DD
        value = value;
      } else if (value.length <= 4) {
        // DD-MM
        value = `${value.slice(0, 2)}-${value.slice(2)}`;
      } else {
        // DD-MM-YYYY
        value = `${value.slice(0, 2)}-${value.slice(2, 4)}-${value.slice(4, 8)}`;
      }
    }

    setDob(value);

    // Calculate age if we have a complete date
    if (value.length === 10) {
      const [day, month, year] = value.split('-').map(Number);
      const birthDate = new Date(year, month - 1, day);
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
      
      setAge(calculatedAge);
    } else {
      setAge(null);
    }
  }, []);

  const handlePhoneChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length <= 10) {
      setPhone(value);
    }
  }, []);

  return (
    <div className="min-h-screen font-sans bg-gray-900 text-white selection:bg-red-500/30">
      <Helmet>
        <title>The Greek God Squad - Transform Your Body, Transform Your Life</title>
        <meta name="description" content="Join 1000+ successful members who transformed their lives with The Greek God Squad. Expert coaching, personalized plans, and proven results." />
        <meta name="keywords" content="fitness, training, body transformation, Greek God Squad, personal training, fitness coach, weight loss, muscle gain" />
        <meta property="og:title" content="The Greek God Squad - Transform Your Body, Transform Your Life" />
        <meta property="og:description" content="Join 1000+ successful members who transformed their lives with The Greek God Squad. Expert coaching, personalized plans, and proven results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="./bg-pic.webp" />
      </Helmet>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
           <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-500 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
           <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
           <div className="absolute -bottom-40 left-20 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div
          className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat bg-fixed"
          style={{
            backgroundImage: "url('./bg-pic.webp')",
            backgroundPosition: 'center 35%',
            opacity: 0.1,
          }}
          aria-hidden="true"
        />
        <main className="relative z-10">
          <AnimatePresence>{loading && <ZeusLoader show={loading} />}</AnimatePresence>

          {/* Navbar */}
          <nav className="py-4 px-4 sm:px-8 bg-black/50 backdrop-blur-md text-yellow-400 shadow-lg flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sticky top-0 z-20 border-b border-white/10">
            <h1 className="text-3xl font-black tracking-widest uppercase text-center sm:text-left text-white drop-shadow-lg">
              The Greek God Squad
            </h1>
            <div className="flex items-center justify-center sm:justify-end gap-3 flex-wrap">
              <button
                onClick={() => handleClick('/achievements')}
                className="rounded-full px-5 py-2 bg-white/10 border border-white/20 text-white font-bold shadow-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                Achievements
              </button>
              <button
                onClick={() => handleClick('/clients')}
                className="rounded-full px-5 py-2 bg-white/10 border border-white/20 text-white font-bold shadow-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                Transformations
              </button>
              <button
                onClick={() => handleClick('/ebooks')}
                className="rounded-full px-5 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold shadow-lg hover:shadow-red-500/40 transition-all duration-300 transform hover:scale-105"
              >
                Explore Ebooks
              </button>
              <a
                href="https://apps.apple.com/app/thegreekgodsquad/id6740698559"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-4 py-2 bg-white text-black font-bold shadow hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-yellow-400 text-xs transition-all"
              >
                iOS App
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.ydl.thegreekgodsquad"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-4 py-2 bg-white text-black font-bold shadow hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-yellow-400 text-xs transition-all"
              >
                Android App
              </a>
            </div>
          </nav>

          {/* Hero Section with CTA */}
          <section className="flex flex-col items-center justify-center py-20 sm:py-28 px-4 text-center">
            <motion.h1 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="text-4xl sm:text-5xl md:text-6xl font-black text-white px-2 drop-shadow-lg mb-4"
             >
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300">
                 Transform
               </span> Your Body,
               <br/>
               Unleash Your Power
             </motion.h1>
            <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.3, duration: 0.8 }}
               className="text-lg text-gray-300 mb-8 max-w-2xl"
             >
               Join 1000+ members who forged their legends. Your journey to god-like strength starts now.
             </motion.p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 150 }}
                  onClick={() => document.getElementById('join-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-red-500/40 focus-visible:outline-2 focus-visible:outline-yellow-400 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Transformation
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, type: 'spring', stiffness: 150 }}
                  onClick={() => handleClick('/ebooks')}
                  className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-red-500/40 focus-visible:outline-2 focus-visible:outline-yellow-400 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Our Ebooks
                </motion.button>
              </div>
          </section>

          {/* Success Metrics */}
          <section className="py-12 bg-black/40 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 text-center">
              {SUCCESS_METRICS.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">{metric.number}</div>
                  <div className="text-base text-gray-400 font-semibold">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Main Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 max-w-6xl mx-auto px-4">
            {/* Left Section */}
            <Suspense fallback={<ZeusLoader show={true} />}> <LazyLoadingContent>
              <div className="space-y-10">
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, amount: 0.5 }}
                   transition={{ duration: 0.5 }}
                   className="bg-gray-800/50 border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-red-500/10 transition-shadow backdrop-blur-md"
                 >
                   <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">About Us</h2>
                   <p className="text-gray-300 text-base font-medium">
                     The Greek God Squad is more than a fitness program — it's a transformation
                     movement. We're focused on building stronger bodies and sharper minds through
                     customized training, nutrition, and community-driven motivation.
                   </p>
                   <div className="mt-4 flex items-center space-x-1 text-yellow-400">
                     {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                     <span className="text-gray-400 text-sm ml-2">(4.9/5 from 1000+ reviews)</span>
                   </div>
                 </motion.div>
                <Suspense fallback={<div className="h-48" />}> <WhyJoinSection /> </Suspense>
                {/* Coaches */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800/50 border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-red-500/10 transition-shadow backdrop-blur-md"
                >
                  <h2 className="text-2xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">Meet Our Coaches</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {COACHES.map((coach, idx) => (
                      <motion.div
                        key={coach.name}
                        className="flex flex-col items-center text-center bg-gray-800/80 rounded-2xl p-6 border border-gray-700/50 shadow-md hover:shadow-xl hover:border-red-500/30 transition-all duration-300 transform hover:-translate-y-1"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                      >
                        <OptimizedImage
                          src={coach.image}
                          alt={`Coach ${coach.name}`}
                          className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white/10 shadow-lg"
                        />
                        <h4 className="text-lg font-bold text-white mb-1">{coach.name}</h4>
                        <p className="text-sm text-red-400 font-semibold mb-2">{coach.title}</p>
                        <p className="mt-2 text-gray-300 text-sm font-medium">{coach.description}</p>
                        <a
                          href={coach.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 text-blue-400 hover:underline text-sm font-bold"
                        >
                          {coach.handle}
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                {/* Testimonials */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800/50 border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-red-500/10 transition-shadow backdrop-blur-md"
                >
                  <h2 className="text-2xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">Success Stories</h2>
                  <div className="space-y-6">
                    {TESTIMONIALS.map((testimonial, index) => (
                      <motion.div
                        key={testimonial.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="bg-gray-900/70 p-4 rounded-xl shadow-inner border border-gray-700/50"
                      >
                        <div className="mb-2">
                          <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                          <p className="text-red-400 text-sm font-semibold">{testimonial.transformation}</p>
                        </div>
                        <p className="text-gray-300 text-base mb-2 italic">"{testimonial.text}"</p>
                        <div className="flex text-yellow-400 text-lg">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </LazyLoadingContent> </Suspense>
            {/* Form Section */}
            <motion.div
              id="join-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="w-full md:max-w-md mx-auto bg-gray-800/50 border border-white/10 p-8 rounded-2xl shadow-lg self-start backdrop-blur-md"
            >
              <h3 className="text-3xl font-black mb-2 text-center text-white">
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">Join the Squad</span>
               </h3>
              <p className="text-center text-gray-300 text-base mb-8">
                Limited spots available. Start your transformation now!
              </p>
              <form className="space-y-5" onSubmit={handleFormSubmit} autoComplete="on">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your Full Name"
                  pattern="[A-Za-z ]+"
                  title="Name should contain only letters and spaces."
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-lg p-3 text-base font-medium text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  autoComplete="name"
                />
                <input
                  name="dob"
                  type="text"
                  required
                  placeholder="Date of Birth (DD-MM-YYYY)"
                  value={dob}
                  onChange={handleDobChange}
                  maxLength={10}
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-lg p-3 text-base font-medium text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  autoComplete="bday"
                />
                <input
                  name="age"
                  type="text"
                  value={age !== null ? age : ''}
                  readOnly
                  placeholder="Age (auto-calculated)"
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-lg p-3 text-base font-medium text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition cursor-not-allowed"
                  tabIndex={-1}
                />
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="10-Digit Phone Number"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength={10}
                  minLength={10}
                  pattern="[0-9]{10}"
                  title="Please enter exactly 10 digits"
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-lg p-3 text-base font-medium text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  autoComplete="tel"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email Address"
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-lg p-3 text-base font-medium text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  autoComplete="email"
                />
                <input
                  name="height"
                  type="number"
                  required
                  placeholder="Height (in cm)"
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-lg p-3 text-base font-medium text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  autoComplete="off"
                />
                <input
                  name="weight"
                  type="number"
                  required
                  placeholder="Weight (in kg)"
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-lg p-3 text-base font-medium text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-lg hover:shadow-lg hover:shadow-red-500/40 transition font-bold text-lg transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Secure Your Spot'}
                </button>
                <p className="text-center text-xs text-gray-500 pt-2">
                  By joining, you agree to our Terms & Conditions and Privacy Policy.
                </p>
              </form>
            </motion.div>
          </section>

          <footer className="text-center py-8 text-gray-400 px-4 text-sm font-medium relative z-10 border-t border-white/10 mt-8">
            <p>&copy; {new Date().getFullYear()} The Greek God Squad. All rights reserved.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link to="/pricingpolicy" className="hover:text-white transition-colors">Pricing Policy</Link>
              <Link to="/shipping" className="hover:text-white transition-colors">Shipping Policy</Link>
              <Link to="/termsandconditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link to="/privacypolicy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/refund" className="hover:text-white transition-colors">Cancellation/Refund</Link>
              <Link to="/contactus" className="hover:text-white transition-colors">Contact Us</Link>
            </div>
          </footer>
       </main>
      </ErrorBoundary>
    </div>
  );
}

// Add display names for memoized components
HeroSubtitle.displayName = 'HeroSubtitle';
AboutSection.displayName = 'AboutSection';
WhyJoinSection.displayName = 'WhyJoinSection';