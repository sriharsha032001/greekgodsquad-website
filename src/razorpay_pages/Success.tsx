import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Success = () => {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [isFading, setIsFading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { downloadUrl } = location.state || {};

  useEffect(() => {
    toast.success('Payment Successful! 🎉', {
      position: "top-center",
      duration: 3000,
    });

    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDownload = () => {
    if (downloadUrl) {
      // Trigger download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', 'ebook.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Start fade-out effect
      setIsFading(true);

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 2000);
    }
  };

  return (
    <div className={`flex flex-col justify-center items-center h-screen bg-black transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <Confetti width={dimensions.width} height={dimensions.height} />

      <h1 className="text-4xl font-bold text-green-400 mb-4 animate-pulse drop-shadow-glow">
        Payment Successful!
      </h1>

      <p className="text-lg text-gray-300 mb-6 text-center px-6">
        Thank you for your payment! Your download is ready.
      </p>

      {downloadUrl ? (
        <button
          className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition mb-4"
          onClick={handleDownload}
        >
        Download Your Ebook
        </button>
      ) : (
        <p className="text-gray-400">Generating download link...</p>
      )}

      <button
        className="text-sm text-white underline hover:text-gray-300"
        onClick={() => navigate('/ebooks', { replace: true })}
      >
        Go to Ebooks Library
      </button>
    </div>
  );
};

export default Success;
