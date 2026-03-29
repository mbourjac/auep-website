'use client';

import { createRef, useMemo, useRef } from 'react';
import { useInView, UseInViewOptions } from 'motion/react';
import { ElbowArrowIcon } from '../../../components/icons/elbow-arrow-icon';
import { useInViewArray } from '../../../hooks/use-in-view-array';
import { SectionLink } from '../../formation/_components/section-link';
import {
  DISSERTATIONS_SECTION,
  GRADUATION_PROJECTS_SECTION,
  PROJECT_WORKSHOPS_SECTION,
  SEMINARS_SECTION,
} from '../works.constants';
import { Dissertations } from './dissertations';
import { GraduationProjects } from './graduation-projects';
import { ProjectWorkshops } from './project-workshops';
import { Seminars } from './seminars';

export const Works = () => {
  const seminarsSectionRef = useRef<HTMLDivElement | null>(null);
  const dissertationsSectionRef = useRef<HTMLDivElement | null>(null);
  const projectWorkshopsSectionRef = useRef<HTMLDivElement | null>(null);
  const graduationProjectsSectionRef = useRef<HTMLDivElement | null>(null);

  const seminarsSemesterRefs = useMemo(
    () =>
      SEMINARS_SECTION.semesters.map(() => createRef<HTMLDivElement | null>()),
    []
  );
  const dissertationsYearRefs = useMemo(
    () =>
      DISSERTATIONS_SECTION.years.map(() => createRef<HTMLDivElement | null>()),
    []
  );
  const projectWorkshopsSemesterRefs = useMemo(
    () =>
      PROJECT_WORKSHOPS_SECTION.semesters.map(() =>
        createRef<HTMLDivElement | null>()
      ),
    []
  );
  const graduationProjectsYearRefs = useMemo(
    () =>
      GRADUATION_PROJECTS_SECTION.years.map(() =>
        createRef<HTMLDivElement | null>()
      ),
    []
  );

  const inViewMargin = '-50% 0px -50% 0px';

  const inViewOptions: UseInViewOptions = {
    margin: inViewMargin,
  };
  const inViewArrayOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: inViewMargin,
    threshold: 0,
  };

  const isSeminarsSectionInView = useInView(seminarsSectionRef, inViewOptions);
  const isDissertationsSectionInView = useInView(
    dissertationsSectionRef,
    inViewOptions
  );
  const isProjectWorkshopsSectionInView = useInView(
    projectWorkshopsSectionRef,
    inViewOptions
  );
  const isGraduationProjectsSectionInView = useInView(
    graduationProjectsSectionRef,
    inViewOptions
  );

  const seminarsSemesterInViewArray = useInViewArray(
    seminarsSemesterRefs,
    inViewArrayOptions
  );
  const dissertationsYearInViewArray = useInViewArray(
    dissertationsYearRefs,
    inViewArrayOptions
  );
  const projectWorkshopsSemesterInViewArray = useInViewArray(
    projectWorkshopsSemesterRefs,
    inViewArrayOptions
  );
  const graduationProjectsYearInViewArray = useInViewArray(
    graduationProjectsYearRefs,
    inViewArrayOptions
  );

  return (
    <div className="px-4 sm:px-6 xl:px-12">
      <div className="flex min-h-[calc(100dvh-64px)] flex-col gap-32 border-b-2 pb-32">
        <h1 className="mt-[-1.2vw] cursor-default border-b-20 pb-[2vw] text-[clamp(2rem,7.5vw,8.75rem)] leading-none font-extrabold md:border-b-28 lg:border-b-36">
          travaux
        </h1>
        <div className="flex gap-16">
          <nav
            role="navigation"
            aria-label="Navigation - formation"
            className="sticky top-22.5 hidden w-[280px] shrink-0 self-start pt-4 text-xl font-bold xl:block"
          >
            <ul>
              <li>
                <SectionLink
                  sectionRef={seminarsSectionRef}
                  isCurrent={isSeminarsSectionInView}
                >
                  {SEMINARS_SECTION.label}
                </SectionLink>
                <ul>
                  {SEMINARS_SECTION.semesters.map((semester, index) => (
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
              <li>
                <SectionLink
                  sectionRef={dissertationsSectionRef}
                  isCurrent={isDissertationsSectionInView}
                >
                  {DISSERTATIONS_SECTION.label}
                </SectionLink>
                <ul>
                  {DISSERTATIONS_SECTION.years.map((year, index) => (
                    <li
                      key={year.id}
                      className="flex items-center gap-1.5 pl-4 text-lg"
                    >
                      <ElbowArrowIcon />
                      <SectionLink
                        sectionRef={dissertationsYearRefs[index]}
                        isCurrent={dissertationsYearInViewArray[index]}
                      >
                        {year.label.toLowerCase()}
                      </SectionLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <SectionLink
                  sectionRef={projectWorkshopsSectionRef}
                  isCurrent={isProjectWorkshopsSectionInView}
                >
                  {PROJECT_WORKSHOPS_SECTION.label}
                </SectionLink>
                <ul>
                  {PROJECT_WORKSHOPS_SECTION.semesters.map(
                    (semester, index) => (
                      <li
                        key={semester.id}
                        className="flex items-center gap-1.5 pl-4 text-lg"
                      >
                        <ElbowArrowIcon />
                        <SectionLink
                          sectionRef={projectWorkshopsSemesterRefs[index]}
                          isCurrent={projectWorkshopsSemesterInViewArray[index]}
                        >
                          {semester.label.toLowerCase()}
                        </SectionLink>
                      </li>
                    )
                  )}
                </ul>
              </li>
              <li>
                <SectionLink
                  sectionRef={graduationProjectsSectionRef}
                  isCurrent={isGraduationProjectsSectionInView}
                >
                  {GRADUATION_PROJECTS_SECTION.label}
                </SectionLink>
                <ul>
                  {GRADUATION_PROJECTS_SECTION.years.map((year, index) => (
                    <li
                      key={year.id}
                      className="flex items-center gap-1.5 pl-4 text-lg"
                    >
                      <ElbowArrowIcon />
                      <SectionLink
                        sectionRef={graduationProjectsYearRefs[index]}
                        isCurrent={graduationProjectsYearInViewArray[index]}
                      >
                        {year.label.toLowerCase()}
                      </SectionLink>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
          <div className="flex w-full flex-col gap-32">
            <Seminars
              sectionRef={seminarsSectionRef}
              semesterRefs={seminarsSemesterRefs}
            />
            <Dissertations
              sectionRef={dissertationsSectionRef}
              yearRefs={dissertationsYearRefs}
            />
            <ProjectWorkshops
              sectionRef={projectWorkshopsSectionRef}
              semesterRefs={projectWorkshopsSemesterRefs}
            />
            <GraduationProjects
              sectionRef={graduationProjectsSectionRef}
              yearRefs={graduationProjectsYearRefs}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
