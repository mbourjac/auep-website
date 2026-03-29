import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string, defaultValue = false): boolean => {
  const [matches, setMatches] = useState(defaultValue);

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      typeof window.matchMedia === 'undefined'
    ) {
      return;
    }

    const mediaQueryList = window.matchMedia(query);

    const updateMatch = () => {
      setMatches(mediaQueryList.matches);
    };

    updateMatch();

    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', updateMatch);
    } else {
      mediaQueryList.addListener(updateMatch); // Safari < 14
    }

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', updateMatch);
      } else {
        mediaQueryList.removeListener(updateMatch);
      }
    };
  }, [query]);

  return matches;
};
