'use client';

import { DitherCanvas } from '@/components/dither-canvas';
import { useMediaQuery } from '../../../hooks/use-media-query';
import { BREAKPOINTS } from '../../constants';

export const Gallery = () => {
  const isSixImages = useMediaQuery(BREAKPOINTS.lg);
  const isFiveImages = useMediaQuery(BREAKPOINTS.md);
  const isFourImages = useMediaQuery(BREAKPOINTS.sm);

  return (
    <div className="grid grid-cols-3 gap-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
      {Array.from({ length: 6 })
        .slice(0, isSixImages ? 6 : isFiveImages ? 5 : isFourImages ? 4 : 3)
        .map((_, index) => (
          <div key={index} className="relative aspect-4/5">
            <DitherCanvas
              className="absolute inset-0"
              src={`/images/home/home-${index + 1}.webp`}
            />
          </div>
        ))}
    </div>
  );
};
