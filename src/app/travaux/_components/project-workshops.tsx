import { RefObject } from 'react';
import { PROJECT_WORKSHOPS_SECTION } from '../works.constants';
import { ProjectWorkshopsSemester } from './project-workshops-semester';
import { WorksSection } from './works-section';

type ProjectWorkshopsProps = {
  sectionRef: RefObject<HTMLDivElement | null>;
  semesterRefs: RefObject<HTMLDivElement | null>[];
};

export const ProjectWorkshops = ({
  sectionRef,
  semesterRefs,
}: ProjectWorkshopsProps) => {
  return (
    <WorksSection
      title={PROJECT_WORKSHOPS_SECTION.label}
      picture={PROJECT_WORKSHOPS_SECTION.picture}
      sectionRef={sectionRef}
    >
      {PROJECT_WORKSHOPS_SECTION.semesters.map((semester, index) => (
        <ProjectWorkshopsSemester
          key={semester.id}
          {...semester}
          semesterRef={semesterRefs[index]}
        />
      ))}
    </WorksSection>
  );
};
