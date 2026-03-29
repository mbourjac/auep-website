import { ReactNode, RefObject } from 'react';
import { DitherCanvas } from '../../../components/dither-canvas';

type WorksSectionProps = {
  title: string;
  picture: string;
  children: ReactNode;
  sectionRef: RefObject<HTMLDivElement | null>;
};

export const WorksSection = ({
  title,
  picture,
  children,
  sectionRef,
}: WorksSectionProps) => {
  return (
    <section ref={sectionRef} className="scroll-mt-24">
      <h2 className="w-fit border-x-2 border-t-2 px-4 pt-1 text-2xl font-bold sm:text-3xl">
        {title}
      </h2>
      <div className="flex flex-col gap-4 border-l-2 pt-8 pl-4">
        <DitherCanvas
          src={picture}
          height={360}
          fitMode="cover"
          className="w-full"
        />
        {children}
      </div>
    </section>
  );
};
