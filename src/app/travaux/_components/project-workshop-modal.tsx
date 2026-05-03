import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useLenis } from 'lenis/react';
import { CloseButton } from '../../../components/close-button';
import { SquareWithDiagonals } from '../../../components/square-with-diagonals';
import { cn } from '../../../lib/tailwind';
import { ProjectWorkshop, ProjectWorkshopsSemester } from '../works.types';

type ProjectWorkshopModalProps = ProjectWorkshop & {
  year: string;
  semester: ProjectWorkshopsSemester;
};

export const ProjectWorkshopModal = ({
  students,
  title,
  description,
  year,
  semester,
}: ProjectWorkshopModalProps) => {
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="border-primary fixed top-4 left-8 z-50 flex max-h-[calc(100dvh-2rem)] w-176 max-w-[min(64rem,calc(100vw-64px))] flex-col border-4 bg-white"
      >
        <div className="border-primary flex items-center justify-between border-b-4">
          <p className="px-4 text-2xl font-bold">Atelier de projet</p>
          <Dialog.Close asChild>
            <CloseButton />
          </Dialog.Close>
        </div>
        <div className="flex overflow-hidden">
          <div className="w-[200px]">
            <SquareWithDiagonals
              className="h-full w-full border-none"
              strokeWidth={4}
            />
          </div>
          <div
            className="border-primary flex flex-1 flex-col border-l-4"
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
              <div className="flex flex-col gap-4 overflow-y-auto p-4">
                <div>
                  <p
                    className={cn(
                      (title || description) && 'border-b font-semibold'
                    )}
                  >
                    {students.join(' - ')}
                  </p>
                  <p>{title}</p>
                </div>
                {description && (
                  <div>
                    <p>{description}</p>
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
