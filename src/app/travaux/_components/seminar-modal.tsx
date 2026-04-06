import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useLenis } from 'lenis/react';
import { XMarkIcon } from '@/components/icons/x-mark-icon';
import { SquareWithDiagonals } from '../../../components/square-with-diagonals';
import { Seminar, SeminarsSemester } from '../works.types';

type PersonModalProps = Seminar & {
  semester: SeminarsSemester;
};

export const SeminarModal = ({
  year,
  mentoring,
  guests,
  semester,
}: PersonModalProps) => {
  const lenis = useLenis();

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [isHovered, lenis]);

  return (
    <Dialog.Portal>
      <Dialog.Content
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="border-primary fixed top-4 left-8 z-50 w-176 max-w-[min(64rem,calc(100vw-64px))] transform border-4 bg-white"
      >
        <div className="border-primary flex items-center justify-between border-b-4">
          <p className="px-4 text-2xl font-bold">Séminaire</p>
          <Dialog.Close asChild>
            <button className="border-primary block cursor-pointer border-l-4">
              <span className="sr-only">Fermer la fenêtre</span>
              <XMarkIcon aria-hidden="true" className="size-16" />
            </button>
          </Dialog.Close>
        </div>
        <div className="flex">
          <div>
            <SquareWithDiagonals
              className="h-full w-[200px] border-none"
              strokeWidth={4}
            />
          </div>
          <div
            className="border-primary flex grow flex-col border-l-4"
            data-lenis-prevent
          >
            <div className="border-primary border-b-4 p-4">
              <Dialog.Title asChild>
                <div className="font-bold">
                  <p>{semester.label}</p>
                  <p>{semester.title}</p>
                </div>
              </Dialog.Title>
              <p className="italic">{year}</p>
            </div>
            <Dialog.Description asChild>
              <div className="flex flex-col gap-4 p-4">
                <div>
                  <p className="border-b font-semibold">Encadrement</p>
                  <p>{mentoring.join(' - ')}</p>
                </div>
                {guests.length > 0 && (
                  <div>
                    <p className="border-b font-semibold">Invité·es</p>
                    <p>{guests.join(' - ')}</p>
                  </div>
                )}
              </div>
            </Dialog.Description>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
