import { useState, useEffect } from 'react';

export const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const setWindowDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    setWindowDimensions();
    window.addEventListener('resize', setWindowDimensions);

    return () => window.removeEventListener('resize', setWindowDimensions);
  }, []);

  return dimensions;
};
