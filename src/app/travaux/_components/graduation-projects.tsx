import { RefObject } from 'react';
import { GRADUATION_PROJECTS_SECTION } from '../works.constants';
import { GraduationProjectsYear } from './graduation-projects-year';
import { WorksSection } from './works-section';

type GraduationProjectsProps = {
  sectionRef: RefObject<HTMLDivElement | null>;
  yearRefs: RefObject<HTMLDivElement | null>[];
};

export const GraduationProjects = ({
  sectionRef,
  yearRefs,
}: GraduationProjectsProps) => {
  return (
    <WorksSection
      title={GRADUATION_PROJECTS_SECTION.label}
      picture={GRADUATION_PROJECTS_SECTION.picture}
      sectionRef={sectionRef}
    >
      {GRADUATION_PROJECTS_SECTION.years.map((year, index) => (
        <GraduationProjectsYear
          key={year.id}
          {...year}
          sectionRef={yearRefs[index]}
          isFirst={index === 0}
          isLast={index === GRADUATION_PROJECTS_SECTION.years.length - 1}
        />
      ))}
    </WorksSection>
  );
};
