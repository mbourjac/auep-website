import { ReactNode } from 'react';
import { SectionHeading } from '../../../components/section-heading';

type PeopleSectionProps = {
  heading: string;
  children: ReactNode;
};

export const PeopleSection = ({ heading, children }: PeopleSectionProps) => {
  return (
    <section>
      <SectionHeading>{heading}</SectionHeading>
      {children}
    </section>
  );
};
