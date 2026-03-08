import { ReactNode, RefObject } from 'react';

type WorksSectionProps = {
  title: string;
  children: ReactNode;
  sectionRef: RefObject<HTMLDivElement | null>;
};

export const WorksSection = ({
  title,
  children,
  sectionRef,
}: WorksSectionProps) => {
  return (
    <section ref={sectionRef} className="scroll-mt-24">
      <h2 className="py-1 text-4xl font-bold">{title}</h2>
      {children}
    </section>
  );
};
