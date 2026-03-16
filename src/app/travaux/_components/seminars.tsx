import { RefObject } from 'react';
import type { SeminarsSemester as SeminarsSemesterType } from '../works.types';
import { SeminarsSemester } from './seminars-semester';
import { WorksSection } from './works-section';

type SeminarsProps = {
  semesters: SeminarsSemesterType[];
  sectionRef: RefObject<HTMLDivElement | null>;
  semesterRefs: RefObject<HTMLDivElement | null>[];
};

export const Seminars = ({
  semesters,
  sectionRef,
  semesterRefs,
}: SeminarsProps) => {
  return (
    <WorksSection title="séminaires" sectionRef={sectionRef}>
      {semesters.map((semester, index) => (
        <SeminarsSemester
          key={semester.id}
          {...semester}
          semesterRef={semesterRefs[index]}
        />
      ))}
    </WorksSection>
  );
};
