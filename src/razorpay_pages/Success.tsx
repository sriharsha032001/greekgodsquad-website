import React, { useState, useEffect } from 'react';

const Success = ({ downloadUrl }) => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [isExpired, setIsExpired] = useState(false);

  // Countdown Timer
  useEffect(() => {
    if (timeLeft === 0) {
      setIsExpired(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [timeLeft]);

  const handleDownload = () => {
    if (!downloadUrl || isExpired) return;

    // Trigger the download action (you can customize this logic)
    window.location.href = downloadUrl;
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white text-black p-4">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Success!</h1>
        <p className="text-lg mb-4">
          Your purchase is confirmed. You can now download your ebook.
        </p>
        
        {downloadUrl ? (
          <>
            <p className="text-sm text-yellow-400 mb-4">
              Please download the PDF within 2 minutes as the link won't be active after that.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Time remaining: {timeLeft} seconds
            </p>
            <button
              className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition mb-4"
              onClick={handleDownload}
              disabled={isExpired}
            >
              {isExpired ? 'Link Expired' : 'Download Your Ebook'}
            </button>
          </>
        ) : (
          <p className="text-gray-400">Generating download link...</p>
        )}

        {isExpired && (
          <p className="text-sm text-red-500 mt-4">Sorry, the link has expired. Please try again.</p>
        )}
      </div>
    </div>
  );
};

export default Success;
