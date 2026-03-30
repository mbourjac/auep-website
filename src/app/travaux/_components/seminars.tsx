import { RefObject } from 'react';
import { SEMINARS_SECTION } from '../works.constants';
import { SeminarsSemester } from './seminars-semester';
import { WorksSection } from './works-section';

type SeminarsProps = {
  sectionRef: RefObject<HTMLDivElement | null>;
  semesterRefs: RefObject<HTMLDivElement | null>[];
};

export const Seminars = ({ sectionRef, semesterRefs }: SeminarsProps) => {
  return (
    <WorksSection
      title={SEMINARS_SECTION.label}
      picture={SEMINARS_SECTION.picture}
      sectionRef={sectionRef}
    >
      {SEMINARS_SECTION.semesters.map((semester, index) => (
        <SeminarsSemester
          key={semester.id}
          {...semester}
          semesterRef={semesterRefs[index]}
          isFirst={index === 0}
          isLast={index === SEMINARS_SECTION.semesters.length - 1}
        />
      ))}
    </WorksSection>
  );
};
