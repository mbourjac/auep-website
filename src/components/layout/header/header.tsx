import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { BREAKPOINTS } from '../../../app/constants';
import { useMediaQuery } from '../../../hooks/use-media-query';
import { MainNav } from './main-nav';
import { MobileMenu } from './mobile-menu';

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
    <header className="sticky top-0 z-20 bg-white px-4 pt-4 sm:px-6 xl:px-12">
      <div className="flex items-center justify-between gap-10 border-b-2">
        <Link
          href="/"
          scroll={true}
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
        <MainNav />
        <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </div>
    </header>
  );
};
