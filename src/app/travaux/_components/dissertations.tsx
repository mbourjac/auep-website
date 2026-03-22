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
      <div className="flex flex-col gap-2.5 border-t-2 py-2.5">
        <p>{DISSERTATIONS_SECTION.description}</p>
      </div>
      {DISSERTATIONS_SECTION.years.map((year, index) => (
        <DissertationsYear
          key={year.id}
          {...year}
          sectionRef={yearRefs[index]}
        />
      ))}
    </WorksSection>
  );
};
