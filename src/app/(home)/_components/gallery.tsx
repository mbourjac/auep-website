import { DitherCanvas } from '@/components/dither-canvas';

export const Gallery = () => {
  const images = [
    'home-1.jpg',
    'home-2.jpg',
    'home-3.jpg',
    'home-4.jpg',
    'home-5.jpg',
    'home-6.jpg',
  ];

  return (
    <div className="grid grid-cols-6 gap-1">
      {images.map((src, i) => (
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
