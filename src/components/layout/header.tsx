import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { BREAKPOINTS } from '../../app/constants';
import { useMediaQuery } from '../../hooks/use-media-query';

export const Header = () => {
  const isLarge = useMediaQuery(BREAKPOINTS.lg);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isLarge && isMenuOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsMenuOpen(false);
    }
  }, [isLarge, isMenuOpen]);

  return (
    <header className="sticky top-0 z-10 bg-white px-4 pt-4 sm:px-6 xl:px-12">
      <div className="flex items-center justify-between gap-10 border-b-2">
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="z-50 text-4xl font-bold"
        >
          <motion.abbr
            animate={{
              color: isMenuOpen ? '#ffffff' : '#000000',
            }}
            transition={{
              duration: 0.3,
              delay: isMenuOpen ? 0.3 : 0,
            }}
          >
            auep
          </motion.abbr>
          <span className="sr-only">
            Architecture, Urbanisme et Études Politiques
          </span>
        </Link>
        <nav
          role="navigation"
          aria-label="Navigation principale"
          className="hidden lg:block"
        >
          <ul className="flex gap-10 py-0.5 text-lg font-semibold">
            <li>
              <Link href="/formation">formation</Link>
            </li>
            <li>
              <Link href="/equipes">équipes</Link>
            </li>
            <li>
              <Link href="/travaux">travaux</Link>
            </li>
            <li>
              <Link href="/actualites">actualités</Link>
            </li>
            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </nav>
        <motion.button
          type="button"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          animate={{
            color: isMenuOpen ? '#ffffff' : '#000000',
          }}
          transition={{
            duration: 0.3,
            delay: isMenuOpen ? 0.3 : 0,
          }}
          className="z-50 inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-gray-900 lg:hidden"
        >
          <span className="sr-only">
            {isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          </span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            {isMenuOpen ? (
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
          animate={{ y: isMenuOpen ? '0%' : '100%' }}
          transition={{
            duration: 0.6,
            ease: [0.9, 0, 0.2, 1],
          }}
          className="bg-primary fixed top-0 left-0 flex h-dvh w-screen flex-col justify-end"
        >
          <nav role="navigation" aria-label="Navigation principale">
            <ul className="flex flex-col gap-2 px-4 pb-4 text-6xl font-extrabold text-white sm:px-6 xl:px-12">
              <li className="w-full border-b border-white">
                <Link href="/formation" onClick={() => setIsMenuOpen(false)}>
                  formation
                </Link>
              </li>
              <li className="w-full border-b border-white">
                <Link href="/equipes" onClick={() => setIsMenuOpen(false)}>
                  équipes
                </Link>
              </li>
              <li className="w-full border-b border-white">
                <Link href="/travaux" onClick={() => setIsMenuOpen(false)}>
                  travaux
                </Link>
              </li>
              <li className="w-full border-b border-white">
                <Link href="/actualites" onClick={() => setIsMenuOpen(false)}>
                  actualités
                </Link>
              </li>
              <li className="w-full border-b border-white">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  contact
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>
      </div>
    </header>
  );
};
