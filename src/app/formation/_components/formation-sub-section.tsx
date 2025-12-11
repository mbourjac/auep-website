import { ReactNode, RefObject } from 'react';
import { DitherCanvas } from '@/components/dither-canvas';
import { cn } from '../../../lib/tailwind';

type FormationSubSectionProps = {
  sectionRef?: RefObject<HTMLDivElement | null>;
  id: string;
  heading: string;
  headingAlignment: 'left' | 'right';
  isLast?: boolean;
  image: string;
  children: ReactNode;
};

export const FormationSubSection = ({
  sectionRef,
  id,
  heading,
  headingAlignment,
  isLast,
  image,
  children,
}: FormationSubSectionProps) => {
  const isRightAlignment = headingAlignment === 'right';
  const isLeftAlignment = headingAlignment === 'left';

  return (
    <div ref={sectionRef} className="scroll-mt-22" id={id}>
      <div className="flex">
        {isRightAlignment && <div className="grow border-b-2 border-l-2"></div>}
        <h3 className="w-fit border-x-2 border-t-2 px-4 pt-1 text-2xl font-bold">
          {heading}
        </h3>
        {isLeftAlignment && <div className="grow border-r-2 border-b-2"></div>}
      </div>
      <div
        className={cn(
          'flex flex-col gap-4 pt-8',
          isLeftAlignment ? 'border-l-2 pl-4' : 'border-r-2 pr-4',
          !isLast && 'pb-8'
        )}
      >
        <DitherCanvas
          src={image}
          height={360}
          fitMode="cover"
          className="w-full"
        />
        <div className="flex flex-col gap-4">{children}</div>
      </div>
    </div>
  );
};
