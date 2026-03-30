import { RefObject } from 'react';
import { DISSERTATIONS_SECTION } from '../works.constants';
import { DissertationsYear } from './dissertations-year';
import { WorksSection } from './works-section';

type DissertationsProps = {
  sectionRef: RefObject<HTMLDivElement | null>;
  yearRefs: RefObject<HTMLDivElement | null>[];
};

export const Dissertations = ({ sectionRef, yearRefs }: DissertationsProps) => {
  return (
    <WorksSection
      title={DISSERTATIONS_SECTION.label}
      picture={DISSERTATIONS_SECTION.picture}
      sectionRef={sectionRef}
    >
      <p className="py-4"> {DISSERTATIONS_SECTION.description}</p>
      {DISSERTATIONS_SECTION.years.map((year, index) => (
        <DissertationsYear
          key={year.id}
          {...year}
          sectionRef={yearRefs[index]}
          isLast={index === DISSERTATIONS_SECTION.years.length - 1}
        />
      ))}
    </WorksSection>
  );
};
