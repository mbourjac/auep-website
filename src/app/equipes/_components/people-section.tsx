import { ReactNode } from 'react';

type PeopleSectionProps = {
  heading: string;
  children: ReactNode;
};

export const PeopleSection = ({ heading, children }: PeopleSectionProps) => {
  return (
    <section className="pt-24">
      <h2 className="w-fit border-x-2 border-t-2 px-4 pt-1 text-4xl font-bold">
        {heading}
      </h2>
      {children}
    </section>
  );
};
