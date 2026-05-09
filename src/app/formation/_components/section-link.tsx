import { useCallback, RefObject, ReactNode } from 'react';
import { cn } from '@/lib/tailwind';
import { ElbowArrowIcon } from '../../../components/icons/elbow-arrow-icon';

type SectionLinkProps = {
  sectionRef: RefObject<HTMLDivElement | null>;
  isCurrent?: boolean;
  children: ReactNode;
  isSubSection?: boolean;
};

export const SectionLink = ({
  sectionRef,
  isCurrent,
  children,
  isSubSection,
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
      className={cn(
        'group flex w-full cursor-pointer items-center justify-between gap-1.5 text-left text-sm uppercase',
        isSubSection ? 'pl-6' : 'font-semibold'
      )}
    >
      <span className="flex gap-1">
        {isSubSection && <ElbowArrowIcon />}
        {children}
      </span>
      <span
        className={cn(
          'border-primary size-4 rounded-full border',
          isCurrent ? 'bg-primary' : 'opacity-0 group-hover:opacity-100'
        )}
      />
    </button>
  );
};
