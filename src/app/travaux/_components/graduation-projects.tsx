import { RefObject } from 'react';
import { GraduationProjectsYear as GraduationProjectsYearType } from '../works.types';
import { GraduationProjectsYear } from './graduation-projects-year';
import { WorksSection } from './works-section';

type GraduationProjectsProps = {
  years: GraduationProjectsYearType[];
  sectionRef: RefObject<HTMLDivElement | null>;
  yearRefs: RefObject<HTMLDivElement | null>[];
};

export const GraduationProjects = ({
  sectionRef,
  years,
  yearRefs,
}: GraduationProjectsProps) => {
  return (
    <WorksSection title="projets de fin d’études" sectionRef={sectionRef}>
      {years.map((year, index) => (
        <GraduationProjectsYear
          key={year.id}
          {...year}
          sectionRef={yearRefs[index]}
        />
      ))}
    </WorksSection>
  );
};
