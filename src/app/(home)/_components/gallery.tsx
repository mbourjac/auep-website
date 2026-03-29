'use client';

import { DitherCanvas } from '@/components/dither-canvas';
import { useMediaQuery } from '../../../hooks/use-media-query';
import { BREAKPOINTS } from '../../constants';

export const Gallery = () => {
  const isSixImages = useMediaQuery(BREAKPOINTS.lg);
  const isFiveImages = useMediaQuery(BREAKPOINTS.md);
  const isFourImages = useMediaQuery(BREAKPOINTS.sm);

  const images = [
    'home-1.jpg',
    'home-2.jpg',
    'home-3.jpg',
    'home-4.jpg',
    'home-5.jpg',
    'home-6.jpg',
  ];

  return (
    <div className="grid grid-cols-3 gap-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
      {images
        .slice(0, isSixImages ? 6 : isFiveImages ? 5 : isFourImages ? 4 : 3)
        .map((src, i) => (
          <div key={i} className="relative aspect-4/5">
            <DitherCanvas
              className="absolute inset-0"
              src={`/images/home/${src}`}
            />
          </div>
        ))}
    </div>
  );
};
