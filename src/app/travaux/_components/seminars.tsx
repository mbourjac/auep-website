import { RefObject, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useLenis } from 'lenis/react';
import { SEMINARS_SECTION } from '../works.constants';
import { SeminarModal } from './seminar-modal';
import { SeminarsSemester } from './seminars-semester';
import { WorksSection } from './works-section';

type SeminarsProps = {
  sectionRef: RefObject<HTMLDivElement | null>;
  semesterRefs: RefObject<HTMLDivElement | null>[];
};

export const Seminars = ({ sectionRef, semesterRefs }: SeminarsProps) => {
  const lenis = useLenis();

  const [selectedSeminarId, setSelectedSeminarId] = useState<string | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedSeminar = SEMINARS_SECTION.semesters
    .flatMap((semester) => semester.seminars)
    .find((seminar) => seminar.id === selectedSeminarId);

  const selectedSemester = SEMINARS_SECTION.semesters.find((semester) =>
    semester.seminars.some((seminar) => seminar.id === selectedSeminarId)
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
            setSelectedSeminarId={setSelectedSeminarId}
          />
        ))}
      </WorksSection>
      {selectedSeminar && selectedSemester && (
        <SeminarModal {...selectedSeminar} semester={selectedSemester} />
      )}
    </Dialog.Root>
  );
};
