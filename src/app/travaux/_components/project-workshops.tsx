import { RefObject } from 'react';
import { ProjectWorkshopsSemester as ProjectWorkshopsSemesterTypes } from '../works.types';
import { ProjectWorkshopsSemester } from './project-workshops-semester';
import { WorksSection } from './works-section';

type ProjectWorkshopsProps = {
  semesters: ProjectWorkshopsSemesterTypes[];
  sectionRef: RefObject<HTMLDivElement | null>;
  semesterRefs: RefObject<HTMLDivElement | null>[];
};

export const ProjectWorkshops = ({
  semesters,
  sectionRef,
  semesterRefs,
}: ProjectWorkshopsProps) => {
  return (
    <WorksSection title="ateliers de projets" sectionRef={sectionRef}>
      {semesters.map((semester, index) => (
        <ProjectWorkshopsSemester
          key={semester.id}
          {...semester}
          semesterRef={semesterRefs[index]}
        />
      ))}
    </WorksSection>
  );
};
