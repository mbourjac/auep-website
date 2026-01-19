import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useLenis } from 'lenis/react';
import { XMarkIcon } from '@/components/icons/x-mark-icon';
import { DitherCanvas } from '../../../components/dither-canvas';
import { SquareWithDiagonals } from '../../../components/square-with-diagonals';
import { Person } from '../people.types';

type PersonModalProps = Person & {
  section: string;
};

export const PersonModal = ({
  firstName,
  lastName,
  image,
  description,
  section,
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
          <p className="px-4 text-2xl font-bold">{section}</p>
          <Dialog.Close asChild>
            <button className="border-primary block cursor-pointer border-l-4">
              <span className="sr-only">Fermer la fenêtre</span>
              <XMarkIcon aria-hidden="true" className="size-16" />
            </button>
          </Dialog.Close>
        </div>
        <div className="flex">
          <div>
            {image ? (
              <DitherCanvas
                src={`/images/people/staff/${image}`}
                fitMode="cover"
                className="h-full w-[240px]"
              />
            ) : (
              <SquareWithDiagonals
                className="h-full w-[200px] border-none"
                strokeWidth={4}
              />
            )}
          </div>
          <div
            className="border-primary flex flex-col border-l-4"
            data-lenis-prevent
          >
            <div className="border-primary border-b-4 p-4">
              <Dialog.Title className="text-xl font-bold">
                {firstName} {lastName}
              </Dialog.Title>
            </div>
            <Dialog.Description className="max-h-full overflow-y-scroll p-4">
              {description}
            </Dialog.Description>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
