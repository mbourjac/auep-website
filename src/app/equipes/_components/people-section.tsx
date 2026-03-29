import { ReactNode } from 'react';

type PeopleSectionProps = {
  heading: string;
  children: ReactNode;
};

export const PeopleSection = ({ heading, children }: PeopleSectionProps) => {
  return (
    <section>
      <h2 className="w-fit border-x-2 border-t-2 px-4 pt-1 text-2xl font-bold sm:text-3xl">
        {heading}
      </h2>
      {children}
    </section>
  );
};
