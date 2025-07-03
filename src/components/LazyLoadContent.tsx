import React, { useState, useEffect } from 'react';

const LazyLoadContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsInView(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref}>
      {isInView ? children : null}
    </div>
  );
};

export default LazyLoadContent;