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
        <button className="relative cursor-pointer text-left text-3xl leading-none font-bold text-white">
          <div>
            <DitherCanvas
              src={`/images/people/staff/${image}`}
              height={360}
              fitMode="cover"
              className="w-full"
            />
          </div>
          <p className="bg-primary/60 absolute right-0 bottom-0 left-0">
            <span className="block border-t-4 border-white px-1 py-0.5">
              {firstName}
            </span>
            <span className="block border-t-4 border-white px-1 py-0.5">
              {lastName}
            </span>
          </p>
        </button>
      </Dialog.Trigger>
      <PersonModal {...props} />
    </Dialog.Root>
  );
};
