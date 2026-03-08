import { ReactNode } from 'react';

type WorksSectionProps = {
  title: string;
  children: ReactNode;
};

export const WorksSection = ({ title, children }: WorksSectionProps) => {
  return (
    <section>
      <h2 className="py-1 text-4xl font-bold">{title}</h2>
      {children}
    </section>
  );
};
