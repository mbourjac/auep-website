'use client';

import { useRef, useEffect } from 'react';
import { useInView, UseInViewOptions } from 'motion/react';
import { ElbowArrowIcon } from '@/components/icons/elbow-arrow-icon';
import { CareerOpportunities } from './career-opportunities';
import { Objectives } from './objectives';
import { SectionLink } from './section-link';
import { StudyPlan } from './study-plan';

export const Formation = () => {
  const objectivesRef = useRef<HTMLDivElement | null>(null);
  const principlesRef = useRef<HTMLDivElement | null>(null);
  const studyPlanRef = useRef<HTMLDivElement | null>(null);
  const bachelorRef = useRef<HTMLDivElement | null>(null);
  const masterRef = useRef<HTMLDivElement | null>(null);
  const graduationsRef = useRef<HTMLDivElement | null>(null);
  const metrofablabRef = useRef<HTMLDivElement | null>(null);
  const careerRef = useRef<HTMLDivElement | null>(null);

  const inViewOptions: UseInViewOptions = {
    margin: '-50% 0px -50% 0px',
  };

  const isObjectivesInView = useInView(objectivesRef, inViewOptions);
  const isPrinciplesInView = useInView(principlesRef, inViewOptions);
  const isStudyPlanInView = useInView(studyPlanRef, inViewOptions);
  const isBachelorInView = useInView(bachelorRef, inViewOptions);
  const isMasterInView = useInView(masterRef, inViewOptions);
  const isGraduationsInView = useInView(graduationsRef, inViewOptions);
  const isMetrofablabInView = useInView(metrofablabRef, inViewOptions);
  const isCareerInView = useInView(careerRef, inViewOptions);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const scrollToHash = (hash?: string) => {
      const targetHash = hash ?? window.location.hash;

      if (!targetHash) return;

      const id = decodeURIComponent(targetHash.replace(/^#/, ''));
      const element = document.getElementById(id);

      if (element) {
        if (!element.hasAttribute('tabindex')) {
          element.setAttribute('tabindex', '-1');
        }

        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        element.focus({ preventScroll: true });
      }
    };

    scrollToHash();

    const onHashChange = () => scrollToHash();

    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  return (
    <div className="px-4 sm:px-6 xl:px-12">
      <div className="flex min-h-[calc(100dvh-64px)] flex-col gap-24 border-b-2 pb-32">
        <h1 className="mt-[-1.2vw] cursor-default border-b-20 pb-[2vw] text-[clamp(2rem,7.5vw,8.75rem)] leading-none font-extrabold md:border-b-28 lg:border-b-36">
          formation
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
                  sectionRef={objectivesRef}
                  isCurrent={isObjectivesInView}
                >
                  objectifs et compétences
                </SectionLink>
                <ul>
                  <li className="flex items-center gap-1.5 pl-4 text-lg">
                    <ElbowArrowIcon />
                    <SectionLink
                      sectionRef={principlesRef}
                      isCurrent={isPrinciplesInView}
                    >
                      cinq grands principes
                    </SectionLink>
                  </li>
                </ul>
              </li>
              <li>
                <SectionLink
                  sectionRef={studyPlanRef}
                  isCurrent={isStudyPlanInView}
                >
                  schéma des études
                </SectionLink>
                <ul>
                  <li className="flex items-center gap-1.5 pl-4 text-lg">
                    <ElbowArrowIcon />
                    <SectionLink
                      sectionRef={bachelorRef}
                      isCurrent={isBachelorInView}
                    >
                      licence AUEP
                    </SectionLink>
                  </li>
                  <li className="flex items-center gap-1.5 pl-4 text-lg">
                    <ElbowArrowIcon />
                    <SectionLink
                      sectionRef={masterRef}
                      isCurrent={isMasterInView}
                    >
                      master AUEP
                    </SectionLink>
                  </li>
                  <li className="flex items-center gap-1.5 pl-4 text-lg">
                    <ElbowArrowIcon />
                    <SectionLink
                      sectionRef={graduationsRef}
                      isCurrent={isGraduationsInView}
                    >
                      diplômations
                    </SectionLink>
                  </li>
                  <li className="flex items-center gap-1.5 pl-4 text-lg">
                    <ElbowArrowIcon />
                    <SectionLink
                      sectionRef={metrofablabRef}
                      isCurrent={isMetrofablabInView}
                    >
                      le programme MetroFabLab
                    </SectionLink>
                  </li>
                </ul>
              </li>
              <li>
                <SectionLink sectionRef={careerRef} isCurrent={isCareerInView}>
                  débouchés professionnels
                </SectionLink>
              </li>
            </ul>
          </nav>
          <div className="flex w-full flex-col gap-32">
            <Objectives
              objectivesRef={objectivesRef}
              principlesRef={principlesRef}
            />
            <StudyPlan
              studyPlanRef={studyPlanRef}
              bachelorRef={bachelorRef}
              masterRef={masterRef}
              graduationsRef={graduationsRef}
              metrofablabRef={metrofablabRef}
            />
            <CareerOpportunities careerRef={careerRef} />
          </div>
        </div>
      </div>
    </div>
  );
};
