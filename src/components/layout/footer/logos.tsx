import Image from 'next/image';
import { cn } from '../../../lib/tailwind';

type LogosProps = {
  className?: string;
};

export const Logos = ({ className }: LogosProps) => {
  return (
    <div className={cn('w-[80vw] md:w-[60vw] lg:w-[40vw]', className)}>
      <Image src="/logos.png" width={3026} height={464} alt="" />
    </div>
  );
};
