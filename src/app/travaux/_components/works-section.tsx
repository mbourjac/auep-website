import { ReactNode, RefObject } from 'react';
import { DitherCanvas } from '../../../components/dither-canvas';
import { SectionHeading } from '../../../components/section-heading';

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
      <SectionHeading>{title}</SectionHeading>
      <div className="flex flex-col border-l-2 pt-8 pl-4">
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
