import { RefObject, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useLenis } from 'lenis/react';
import { DISSERTATIONS_SECTION } from '../works.constants';
import { DissertationModal } from './dissertation-modal';
import { DissertationsYear } from './dissertations-year';
import { WorksSection } from './works-section';

type DissertationsProps = {
  sectionRef: RefObject<HTMLDivElement | null>;
  yearRefs: RefObject<HTMLDivElement | null>[];
};

export const Dissertations = ({ sectionRef, yearRefs }: DissertationsProps) => {
  const lenis = useLenis();

  const [selectedDissertationId, setSelectedDissertationId] = useState<
    string | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedDissertation = DISSERTATIONS_SECTION.years
    .flatMap((year) => year.dissertations)
    .find((dissertation) => dissertation.id === selectedDissertationId);

  const selectedYear = DISSERTATIONS_SECTION.years.find((year) =>
    year.dissertations.some(
      (dissertation) => dissertation.id === selectedDissertationId
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
        title={DISSERTATIONS_SECTION.label}
        picture={DISSERTATIONS_SECTION.picture}
        sectionRef={sectionRef}
      >
        <p className="py-4"> {DISSERTATIONS_SECTION.description}</p>
        {DISSERTATIONS_SECTION.years.map((year, index) => (
          <DissertationsYear
            key={year.id}
            {...year}
            sectionRef={yearRefs[index]}
            isLast={index === DISSERTATIONS_SECTION.years.length - 1}
            setSelectedDissertationId={setSelectedDissertationId}
          />
        ))}
      </WorksSection>
      {selectedDissertation && selectedYear && (
        <DissertationModal
          {...selectedDissertation}
          year={selectedYear.label}
        />
      )}
    </Dialog.Root>
  );
};
