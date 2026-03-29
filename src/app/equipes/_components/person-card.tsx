'use client';

import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useLenis } from 'lenis/react';
import { DitherCanvas } from '@/components/dither-canvas';
import { Person } from '../people.types';
import { PersonModal } from './person-modal';

export type PersonCardProps = Person & {
  section: string;
};

export const PersonCard = (props: PersonCardProps) => {
  const lenis = useLenis();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { firstName, lastName, image } = props;

  const handleModalOpen = (isOpen: boolean) => {
    if (!isOpen && lenis?.isStopped) {
      lenis?.start();
    }

    setIsModalOpen(isOpen);
  };

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={handleModalOpen}>
      <Dialog.Trigger asChild>
        <button className="relative block w-full cursor-pointer text-left leading-none text-white">
          <div>
            <DitherCanvas
              src={`/images/people/staff/${image}`}
              height={320}
              fitMode="cover"
              className="w-full"
            />
          </div>
          <p className="bg-primary/90 absolute right-0 bottom-0 left-0 px-2 py-1.5">
            <span className="text-xl leading-none font-bold">{firstName}</span>
            <br />
            <span className="text-2xl leading-none font-extrabold tracking-wide">
              {lastName}
            </span>
          </p>
        </button>
      </Dialog.Trigger>
      <PersonModal {...props} />
    </Dialog.Root>
  );
};
