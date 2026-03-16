'use client';

import { createRef, useMemo, useRef } from 'react';
import { useInView } from 'motion/react';
import { ElbowArrowIcon } from '../../../components/icons/elbow-arrow-icon';
import { useInViewArray } from '../../../hooks/use-in-view-array';
import { SectionLink } from '../../formation/_components/section-link';
import { SEMINARS_SEMESTERS } from '../works.constants';
import { Seminars } from './seminars';

export const Works = () => {
  const seminarsSectionRef = useRef<HTMLDivElement | null>(null);

  const seminarsSemesterRefs = useMemo(
    () => SEMINARS_SEMESTERS.map(() => createRef<HTMLDivElement | null>()),
    []
  );

  const inViewMargin = '-50% 0px -50% 0px';

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: inViewMargin,
    threshold: 0,
  };

  const isSeminarsSectionInView = useInView(seminarsSectionRef, {
    margin: inViewMargin,
  });
  const seminarsSemesterInViewArray = useInViewArray(
    seminarsSemesterRefs,
    observerOptions
  );

  return (
    <div className="px-6 xl:px-12">
      <div className="flex min-h-[calc(100dvh-64px)] flex-col gap-32 border-b-2 pb-32">
        <h1 className="mt-[-1.2vw] cursor-default border-b-36 pb-[2vw] text-[7.5vw] leading-none font-extrabold">
          travaux
        </h1>
        <div className="flex gap-16">
          <nav
            role="navigation"
            aria-label="Navigation - formation"
            className="sticky top-22.5 hidden shrink-0 self-start pt-4 text-xl font-bold xl:block"
          >
            <ul>
              <li>
                <SectionLink
                  sectionRef={seminarsSectionRef}
                  isCurrent={isSeminarsSectionInView}
                >
                  séminaires
                </SectionLink>
                <ul>
                  {SEMINARS_SEMESTERS.map((semester, index) => (
                    <li
                      key={semester.id}
                      className="flex items-center gap-1.5 pl-4 text-lg"
                    >
                      <ElbowArrowIcon />
                      <SectionLink
                        sectionRef={seminarsSemesterRefs[index]}
                        isCurrent={seminarsSemesterInViewArray[index]}
                      >
                        {semester.label.toLowerCase()}
                      </SectionLink>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
          <div className="flex w-full flex-col gap-32">
            <Seminars
              semesters={SEMINARS_SEMESTERS}
              sectionRef={seminarsSectionRef}
              semesterRefs={seminarsSemesterRefs}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
