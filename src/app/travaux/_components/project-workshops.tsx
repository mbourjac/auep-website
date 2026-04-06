import { RefObject, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useLenis } from 'lenis/react';
import { PROJECT_WORKSHOPS_SECTION } from '../works.constants';
import { ProjectWorkshopModal } from './project-workshop-modal';
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
  const lenis = useLenis();

  const [selectedProjectWorkshopId, setSelectedProjectWorkshopId] = useState<
    string | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedData = PROJECT_WORKSHOPS_SECTION.semesters
    .map((semester) => {
      const year = semester.years.find((year) =>
        year.projectWorkshops.some(
          (projectWorkshop) => projectWorkshop.id === selectedProjectWorkshopId
        )
      );

      if (!year) return null;

      const projectWorkshop = year.projectWorkshops.find(
        (projectWorkshop) => projectWorkshop.id === selectedProjectWorkshopId
      );

      return {
        semester,
        year,
        projectWorkshop,
      };
    })
    .find(Boolean);

  const selectedSemester = selectedData?.semester ?? null;
  const selectedYear = selectedData?.year ?? null;
  const selectedProjectWorkshop = selectedData?.projectWorkshop ?? null;

  const handleModalOpen = (isOpen: boolean) => {
    if (!isOpen && lenis?.isStopped) {
      lenis?.start();
    }

    setIsModalOpen(isOpen);
  };

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={handleModalOpen}>
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
            isFirst={index === 0}
            setSelectedProjectWorkshopId={setSelectedProjectWorkshopId}
          />
        ))}
      </WorksSection>
      {selectedSemester && selectedYear && selectedProjectWorkshop && (
        <ProjectWorkshopModal
          {...selectedProjectWorkshop}
          semester={selectedSemester}
          year={selectedYear.label}
        />
      )}
    </Dialog.Root>
  );
};
