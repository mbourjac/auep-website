import { RefObject, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useLenis } from 'lenis/react';
import { GRADUATION_PROJECTS_SECTION } from '../works.constants';
import { GraduationProjectModal } from './graduation-project-modal';
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
  const lenis = useLenis();

  const [selectedGraduationProjectId, setSelectedGraduationProjectId] =
    useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedGraduationProject = GRADUATION_PROJECTS_SECTION.years
    .flatMap((year) => year.graduationProjects)
    .find((project) => project.id === selectedGraduationProjectId);
  const selectedYear = GRADUATION_PROJECTS_SECTION.years.find((year) =>
    year.graduationProjects.some(
      (project) => project.id === selectedGraduationProjectId
    )
  );

  const handleModalOpen = (isOpen: boolean) => {
    if (!isOpen && lenis?.isStopped) {
      lenis?.start();
    }

    setIsModalOpen(isOpen);
  };

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={handleModalOpen}>
      <WorksSection
        title={GRADUATION_PROJECTS_SECTION.label}
        picture={GRADUATION_PROJECTS_SECTION.picture}
        sectionRef={sectionRef}
      >
        <p className="py-4"> {GRADUATION_PROJECTS_SECTION.description}</p>
        {GRADUATION_PROJECTS_SECTION.years.map((year, index) => (
          <GraduationProjectsYear
            key={year.id}
            {...year}
            sectionRef={yearRefs[index]}
            isLast={index === GRADUATION_PROJECTS_SECTION.years.length - 1}
            setSelectedGraduationProjectId={setSelectedGraduationProjectId}
          />
        ))}
      </WorksSection>
      {selectedGraduationProject && selectedYear && (
        <GraduationProjectModal
          {...selectedGraduationProject}
          year={selectedYear.label}
        />
      )}
    </Dialog.Root>
  );
};
