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
    <section className="scroll-mt-24">
      <div ref={sectionRef}>
        <SectionHeading>{title}</SectionHeading>
        <div className="border-l-2 pt-8 pl-4">
          <DitherCanvas
            src={picture}
            height={360}
            fitMode="cover"
            className="w-full"
          />
        </div>
      </div>
      <div className="border-l-2 pl-4">{children}</div>
    </section>
  );
};
