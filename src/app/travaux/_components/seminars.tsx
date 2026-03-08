import { RefObject } from 'react';
import { SEMINARS } from '../works.constants';
import { SeminarsSemester } from './seminars-semester';
import { WorksSection } from './works-section';

type SeminarsProps = {
  seminarsRef: RefObject<HTMLDivElement | null>;
  seminarsSemester7ref: RefObject<HTMLDivElement | null>;
  seminarsSemester8ref: RefObject<HTMLDivElement | null>;
  seminarsSemester9ref: RefObject<HTMLDivElement | null>;
};

export const Seminars = ({
  seminarsRef,
  seminarsSemester7ref,
  seminarsSemester8ref,
  seminarsSemester9ref,
}: SeminarsProps) => {
  return (
    <WorksSection title="séminaires" sectionRef={seminarsRef}>
      <SeminarsSemester
        {...SEMINARS.semester7}
        sectionRef={seminarsSemester7ref}
      />
      <SeminarsSemester
        {...SEMINARS.semester8}
        sectionRef={seminarsSemester8ref}
      />
      <SeminarsSemester
        {...SEMINARS.semester9}
        sectionRef={seminarsSemester9ref}
      />
    </WorksSection>
  );
};
