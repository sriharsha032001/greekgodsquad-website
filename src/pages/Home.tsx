import React, { useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import DumbbellLoader from '../components/DumbbellLoader';
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

// Add success metrics
const SUCCESS_METRICS = [
  { number: "5000+", label: "Active Members" },
  { number: "95%", label: "Success Rate" },
  { number: "10k+", label: "Transformations" },
  { number: "4.9/5", label: "Member Rating" }
];

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

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [age, setAge] = useState<number | null>(null);
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
    const dob = e.target.value;
    const dateParts = dob.split('-');
    if (dateParts.length === 3) {
      const birthDate = new Date(
        `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`
      );
      const diff = Date.now() - birthDate.getTime();
      const ageDate = new Date(diff);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      setAge(calculatedAge);
    }
  }, []);

  const handlePhoneChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value.replace(/[^0-9]/g, '');
    if (phone.length <= 10) {
      e.target.value = phone;
    }
  }, []);

  return (
    <div className="min-h-screen font-sans px-4 sm:px-6 relative overflow-hidden text-white">
      <Helmet>
        <title>The Greek God Squad - Transform Your Body, Transform Your Life</title>
        <meta name="description" content="Join 5000+ successful members who transformed their lives with The Greek God Squad. Expert coaching, personalized plans, and proven results." />
        <meta name="keywords" content="fitness, training, body transformation, Greek God Squad, personal training, fitness coach, weight loss, muscle gain" />
        <meta property="og:title" content="The Greek God Squad - Transform Your Body, Transform Your Life" />
        <meta property="og:description" content="Join 5000+ successful members who transformed their lives with The Greek God Squad. Expert coaching, personalized plans, and proven results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="./bg-pic.webp" />
      </Helmet>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div
          className="absolute inset-0 bg-black bg-opacity-70 z-0"
          style={{
            backgroundImage: "url('./bg-pic.webp')",
            backgroundSize: 'cover',
            backgroundPosition: '45% 35%',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
          aria-hidden="true"
        />

        <main className="relative z-10">
          <AnimatePresence>
            {loading && <DumbbellLoader show={loading} />}
          </AnimatePresence>

          {/* Navbar */}
          <nav className="py-4 px-4 sm:px-6 bg-black text-yellow-400 shadow-md flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sticky top-0 z-10">
            <h1 className="text-2xl font-extrabold tracking-widest uppercase text-center sm:text-left">
              The Greek God Squad
            </h1>
            <div className="flex items-center justify-center sm:justify-end gap-3 flex-wrap">
              <button
                onClick={() => handleClick('/achievements')}
                className="hover:text-yellow-300 transition text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-400"
              >
                Achievements
              </button>
              <button
                onClick={() => handleClick('/clients')}
                className="hover:text-yellow-300 transition text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-400"
              >
                Transformations
              </button>
              <button
                onClick={() => handleClick('/ebooks')}
                className="hover:text-yellow-300 transition text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-400"
              >
                Explore Ebooks
              </button>
              <a
                href="https://apps.apple.com/app/thegreekgodsquad/id6740698559"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black text-xs px-3 py-1.5 rounded-md hover:bg-gray-200 transition font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-400"
              >
                iOS App
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.ydl.thegreekgodsquad"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black text-xs px-3 py-1.5 rounded-md hover:bg-gray-200 transition font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-400"
              >
                Android App
              </a>
            </div>
          </nav>

          {/* Hero Section with CTA */}
          <section className="flex flex-col items-center justify-center py-12 sm:py-16 px-2">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white px-2 drop-shadow-lg mb-6"
            >
              WELCOME TO THE GREEK GOD SQUAD
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-center text-yellow-400 mb-8 max-w-2xl"
            >
              Join 5000+ members who transformed their lives. Start your journey today!
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              onClick={() => document.getElementById('join-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg"
            >
              Start Your Transformation
            </motion.button>
          </section>

          {/* Success Metrics */}
          <section className="py-12 bg-black bg-opacity-50">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
              {SUCCESS_METRICS.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">{metric.number}</div>
                  <div className="text-sm text-gray-300">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Main Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-20 max-w-6xl mx-auto">
            {/* Left Section */}
            <Suspense fallback={<DumbbellLoader show={true} />}>
              <LazyLoadingContent>
                <div className="space-y-10">
                  {/* About Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
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

                  {/* Why Join */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-800 bg-opacity-80 border border-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition backdrop-blur-sm"
                  >
                    <h2 className="text-2xl font-bold mb-4">Why Join Us?</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 font-bold">
                      <li>Customized training programs tailored to your body</li>
                      <li>Expert diet plans crafted by our coaches</li>
                      <li>Regular progress tracking & feedback</li>
                      <li>Motivational community support</li>
                      <li>Flexible access via our mobile app</li>
                      <li>Money-back guarantee if not satisfied</li>
                    </ul>
                  </motion.div>

                  {/* Coaches */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-900 bg-opacity-80 p-6 rounded-xl shadow-md hover:shadow-lg transition backdrop-blur-sm"
                  >
                    <h2 className="text-2xl font-bold mb-6">Meet Our Coaches</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {COACHES.map((coach, idx) => (
                        <motion.div
                          key={coach.name}
                          className="flex flex-col items-center text-center bg-gray-800 bg-opacity-80 rounded-xl p-6 border border-gray-600 shadow-sm hover:shadow-lg transition backdrop-blur-sm"
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: idx * 0.2 }}
                        >
                          <OptimizedImage
                            src={coach.image}
                            alt={`Coach ${coach.name}`}
                            className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white"
                          />
                          <h4 className="text-lg font-bold text-white">{coach.name}</h4>
                          <p className="text-sm text-gray-400 font-bold">{coach.title}</p>
                          <p className="mt-2 text-gray-300 text-sm font-bold">{coach.description}</p>
                          <a
                            href={coach.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 text-blue-400 hover:underline text-sm font-bold"
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
                    transition={{ duration: 0.6 }}
                    className="bg-gray-900 bg-opacity-80 p-6 rounded-xl shadow-md hover:shadow-lg transition backdrop-blur-sm"
                  >
                    <h2 className="text-2xl font-bold mb-6">Success Stories</h2>
                    <div className="space-y-6">
                      {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                          key={testimonial.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          className="bg-gray-800 bg-opacity-80 p-4 rounded-lg"
                        >
                          <div className="mb-3">
                            <h4 className="font-bold text-white">{testimonial.name}</h4>
                            <p className="text-yellow-400 text-sm">{testimonial.transformation}</p>
                          </div>
                          <p className="text-gray-300 text-sm mb-2">{testimonial.text}</p>
                          <div className="flex">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <span key={i} className="text-yellow-400">★</span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </LazyLoadingContent>
            </Suspense>

            {/* Form Section */}
            <motion.div
              id="join-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:max-w-md mx-auto bg-gray-900 bg-opacity-80 border border-gray-700 p-6 rounded-xl shadow-md self-start hover:shadow-lg transition backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-2 text-center text-white">Join the Squad</h3>
              <p className="text-center text-gray-300 text-sm mb-6">
                Start your transformation journey today. Limited spots available!
              </p>
              <form className="space-y-4" onSubmit={handleFormSubmit} autoComplete="on">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Name"
                  pattern="[A-Za-z ]+"
                  title="Name should contain only letters and spaces."
                  className="w-full bg-gray-100 border border-gray-300 rounded-md p-3 text-base font-bold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                  autoComplete="name"
                />
                <input
                  name="dob"
                  type="text"
                  required
                  placeholder="DD-MM-YYYY"
                  pattern="\\d{2}-\\d{2}-\\d{4}"
                  onChange={handleDobChange}
                  className="w-full bg-gray-100 border border-gray-300 rounded-md p-3 text-base font-bold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                  autoComplete="bday"
                />
                <input
                  name="age"
                  type="text"
                  value={age || ''}
                  readOnly
                  placeholder="Age"
                  className="w-full bg-gray-100 border border-gray-300 rounded-md p-3 text-base font-bold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                  tabIndex={-1}
                />
                <input
                  name="phone"
                  type="text"
                  required
                  placeholder="Phone"
                  onChange={handlePhoneChange}
                  maxLength={10}
                  pattern="\\d{10}"
                  className="w-full bg-gray-100 border border-gray-300 rounded-md p-3 text-base font-bold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                  autoComplete="tel"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full bg-gray-100 border border-gray-300 rounded-md p-3 text-base font-bold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                  autoComplete="email"
                />
                <input
                  name="height"
                  type="number"
                  required
                  placeholder="Height (in cm)"
                  className="w-full bg-gray-100 border border-gray-300 rounded-md p-3 text-base font-bold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                  autoComplete="off"
                />
                <input
                  name="weight"
                  type="number"
                  required
                  placeholder="Weight (in kg)"
                  className="w-full bg-gray-100 border border-gray-300 rounded-md p-3 text-base font-bold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-3 rounded-md hover:bg-yellow-300 transition font-bold text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-400 disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Start Your Journey'}
                </button>
                <p className="text-center text-sm text-gray-400">
                  By joining, you agree to our Terms & Conditions and Privacy Policy
                </p>
              </form>

              <div className="mt-8">
                <h4 className="text-lg font-bold text-center text-white mb-2">What Our Members Say</h4>
                <p className="text-sm text-gray-300 text-center italic font-semibold">
                  "Joining the Greek God Squad was the best decision I ever made. I feel stronger, more disciplined, and part of an amazing community!" – Abhiram.
                </p>
              </div>
            </motion.div>
          </section>

          <footer className="text-center py-6 text-gray-400 px-4 text-sm font-bold relative z-10">
            <p>&copy; 2025 The Greek God Squad. All rights reserved.</p>
            <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-3">
              <Link to="/pricingpolicy" className="hover:text-white font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">Pricing Policy</Link>
              <Link to="/shipping" className="hover:text-white font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">Shipping Policy</Link>
              <Link to="/termsandconditions" className="hover:text-white font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">Terms & Conditions</Link>
              <Link to="/privacypolicy" className="hover:text-white font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">Privacy Policy</Link>
              <Link to="/refund" className="hover:text-white font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">Cancellation/Refund</Link>
              <Link to="/contactus" className="hover:text-white font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">Contact Us</Link>
            </div>
          </footer>
        </main>
      </ErrorBoundary>
    </div>
  );
}