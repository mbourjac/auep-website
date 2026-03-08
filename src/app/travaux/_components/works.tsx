'use client';

import { useRef } from 'react';
import { UseInViewOptions, useInView } from 'motion/react';
import { ElbowArrowIcon } from '../../../components/icons/elbow-arrow-icon';
import { SectionLink } from '../../formation/_components/section-link';
import { Seminars } from './seminars';

export const Works = () => {
  const seminarsRef = useRef<HTMLDivElement | null>(null);
  const seminarsSemester7ref = useRef<HTMLDivElement | null>(null);
  const seminarsSemester8ref = useRef<HTMLDivElement | null>(null);
  const seminarsSemester9ref = useRef<HTMLDivElement | null>(null);

  const inViewOptions: UseInViewOptions = {
    margin: '-50% 0px -50% 0px',
  };

  const isObjectivesInView = useInView(seminarsRef, inViewOptions);
  const isSeminarsSemester7InView = useInView(
    seminarsSemester7ref,
    inViewOptions
  );
  const isSeminarsSemester8InView = useInView(
    seminarsSemester8ref,
    inViewOptions
  );
  const isSeminarsSemester9InView = useInView(
    seminarsSemester9ref,
    inViewOptions
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
                  sectionRef={seminarsRef}
                  isCurrent={isObjectivesInView}
                >
                  séminaires
                </SectionLink>
                <ul>
                  <li className="flex items-center gap-1.5 pl-4 text-lg">
                    <ElbowArrowIcon />
                    <SectionLink
                      sectionRef={seminarsSemester7ref}
                      isCurrent={isSeminarsSemester7InView}
                    >
                      semestre 7
                    </SectionLink>
                  </li>
                  <li className="flex items-center gap-1.5 pl-4 text-lg">
                    <ElbowArrowIcon />
                    <SectionLink
                      sectionRef={seminarsSemester8ref}
                      isCurrent={isSeminarsSemester8InView}
                    >
                      semestre 8
                    </SectionLink>
                  </li>
                  <li className="flex items-center gap-1.5 pl-4 text-lg">
                    <ElbowArrowIcon />
                    <SectionLink
                      sectionRef={seminarsSemester9ref}
                      isCurrent={isSeminarsSemester9InView}
                    >
                      semestre 9
                    </SectionLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="flex w-full flex-col gap-32">
            <Seminars
              seminarsRef={seminarsRef}
              seminarsSemester7ref={seminarsSemester7ref}
              seminarsSemester8ref={seminarsSemester8ref}
              seminarsSemester9ref={seminarsSemester9ref}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
