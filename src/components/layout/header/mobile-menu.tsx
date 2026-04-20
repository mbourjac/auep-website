import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  return (
    <>
      <motion.button
        type="button"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        animate={{
          color: isOpen ? '#ffffff' : '#000000',
        }}
        transition={{
          duration: 0.3,
          delay: isOpen ? 0.3 : 0,
        }}
        className="z-50 inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-gray-900 lg:hidden"
      >
        <span className="sr-only">
          {isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          {isOpen ? (
            <>
              <path d="M5 5l14 14" />
              <path d="M19 5L5 19" />
            </>
          ) : (
            <>
              <path d="M3 6h18" />
              <path d="M3 12h18" />
              <path d="M3 18h18" />
            </>
          )}
        </svg>
      </motion.button>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: isOpen ? '0%' : '100%' }}
        transition={{
          duration: 0.6,
          ease: [0.9, 0, 0.2, 1],
        }}
        className="bg-primary fixed top-0 left-0 flex h-dvh w-screen flex-col justify-end"
      >
        <nav role="navigation" aria-label="Navigation principale">
          <ul className="flex flex-col gap-2 px-4 pb-4 text-6xl font-extrabold text-white sm:px-6 xl:px-12">
            <li className="w-full border-b border-white">
              <Link
                href="/formation"
                scroll={true}
                onClick={() => setIsOpen(false)}
              >
                formation
              </Link>
            </li>
            <li className="w-full border-b border-white">
              <Link
                href="/equipes"
                scroll={true}
                onClick={() => setIsOpen(false)}
              >
                équipes
              </Link>
            </li>
            <li className="w-full border-b border-white">
              <Link
                href="/travaux"
                scroll={true}
                onClick={() => setIsOpen(false)}
              >
                travaux
              </Link>
            </li>
            <li className="w-full border-b border-white">
              <Link
                href="/actualites"
                scroll={true}
                onClick={() => setIsOpen(false)}
              >
                actualités
              </Link>
            </li>
            <li className="w-full border-b border-white">
              <Link
                href="/contact"
                scroll={true}
                onClick={() => setIsOpen(false)}
              >
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </motion.div>
    </>
  );
};
