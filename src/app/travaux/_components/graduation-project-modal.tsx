import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useLenis } from 'lenis/react';
import { XMarkIcon } from '@/components/icons/x-mark-icon';
import { SquareWithDiagonals } from '../../../components/square-with-diagonals';
import { GraduationProject } from '../works.types';

type GraduationProjectProps = GraduationProject & {
  year: string;
};

export const GraduationProjectModal = ({
  students,
  title,
  description,
  supervisedBy,
  year,
}: GraduationProjectProps) => {
  const lenis = useLenis();
  const [isHovered, setIsHovered] = useState(false);

  const applyContraction = (name: string) => {
    const startsWithVowel = /^[aeiouàâäéèêëîïôöùûüÿœæ]/i.test(name);
    return startsWithVowel ? `d’${name}` : `de ${name}`;
  };

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
          <p className="px-4 text-2xl font-bold">Projets de fin d’études</p>
          <Dialog.Close asChild>
            <button className="border-primary block cursor-pointer border-l-4">
              <span className="sr-only">Fermer la fenêtre</span>
              <XMarkIcon aria-hidden="true" className="size-16" />
            </button>
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
              <Dialog.Title className="font-bold">
                {students.join(', ')}
              </Dialog.Title>
              <p className="italic">{year}</p>
            </div>
            <Dialog.Description asChild>
              <div className="flex flex-col gap-4 overflow-y-auto p-4">
                <div>
                  {title && <p className="border-b font-semibold">{title}</p>}
                  {supervisedBy && (
                    <p>Sous la direction {applyContraction(supervisedBy)}</p>
                  )}
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
