import { useCallback, RefObject, ReactNode } from 'react';
import { cn } from '@/lib/tailwind';

type SectionLinkProps = {
  sectionRef: RefObject<HTMLDivElement | null>;
  isCurrent?: boolean;
  children: ReactNode;
};

export const SectionLink = ({
  sectionRef,
  isCurrent,
  children,
}: SectionLinkProps) => {
  const handleScrollTo = useCallback(
    (ref: RefObject<HTMLDivElement | null>, usePush = false) => {
      const element = ref.current;

      if (!element) return;

      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const id = element.id;

      if (!id) return;

      try {
        if (usePush) {
          history.pushState(null, '', `#${id}`);
        } else {
          history.replaceState(null, '', `#${id}`);
        }
      } catch {
        location.hash = `#${id}`;
      }
    },
    []
  );

  return (
    <button
      onClick={() => handleScrollTo(sectionRef)}
      aria-current={isCurrent ? 'true' : undefined}
      className={cn('cursor-pointer text-left', isCurrent && 'underline')}
    >
      {children}
    </button>
  );
};
