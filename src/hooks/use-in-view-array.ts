import { RefObject, useEffect, useState } from 'react';

export const useInViewArray = <T extends Element>(
  refs: RefObject<T | null>[],
  options?: IntersectionObserverInit
) => {
  const [inView, setInView] = useState<boolean[]>(() => refs.map(() => false));

  useEffect(() => {
    if (!refs || refs.length === 0) return;

    const elements = refs.map((ref) => ref.current).filter(Boolean) as T[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      setInView((prev) => {
        const next = prev.slice();

        entries.forEach((entry) => {
          const index = refs.findIndex((ref) => ref.current === entry.target);

          if (index !== -1 && next[index] !== entry.isIntersecting) {
            next[index] = entry.isIntersecting;
          }
        });

        return next;
      });
    }, options);

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [refs, options?.root, options?.rootMargin, options?.threshold, options]);

  return inView;
};
