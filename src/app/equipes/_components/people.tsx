import { DitherCanvas } from '@/components/dither-canvas';
import {
  ACADEMIC_COORDINATION,
  FORMER_STAFF,
  GRADUATE_EMPLOYERS,
  GRADUATING_CLASSES,
  TEACHING_STAFF,
} from '../people.constants';
import { PeopleGrid } from './people-grid';
import { PeopleSection } from './people-section';

export const People = () => {
  return (
    <div className="px-6 xl:px-12">
      <div className="flex min-h-[calc(100dvh-64px)] flex-col gap-32 border-b-2 pb-32">
        <h1 className="mt-[-1.2vw] cursor-default border-b-36 pb-[2vw] text-[7.5vw] leading-none font-extrabold">
          équipes
        </h1>
        <div className="flex w-full flex-col gap-32">
          <PeopleSection heading="coordination pédagogique">
            <PeopleGrid
              people={ACADEMIC_COORDINATION}
              section="Coordination pédagogique"
            />
          </PeopleSection>
          <PeopleSection heading="équipe enseignante">
            <PeopleGrid people={TEACHING_STAFF} section="Équipe enseignante" />
          </PeopleSection>
          <PeopleSection heading="mais aussi">
            <ul className="flex flex-wrap gap-2.5 border-l-2 pt-8 pl-4">
              {FORMER_STAFF.map((people, index) => (
                <li
                  key={index}
                  className="text-3xl leading-none font-bold whitespace-nowrap"
                >
                  {people}
                  {index < FORMER_STAFF.length - 1 ? ', ' : ''}
                </li>
              ))}
            </ul>
          </PeopleSection>
          <PeopleSection heading="diplômé.es auep">
            <div className="flex flex-col gap-4 border-l-2 pt-8 pl-4">
              <DitherCanvas
                src="/images/people/graduates.png"
                height={360}
                fitMode="cover"
                className="w-full"
              />
              <div className="flex flex-col gap-12">
                {GRADUATING_CLASSES.map(
                  ({ graduates, yearStart, yearEnd }, index) => (
                    <div key={index}>
                      <h3 className="border-b-2 pb-1 text-3xl font-medium">
                        {yearStart} — {yearEnd}
                      </h3>
                      <ul className="flex flex-wrap gap-2.5 pt-2">
                        {graduates.map((graduate, index) => (
                          <li
                            key={index}
                            className="text-3xl leading-none font-bold whitespace-nowrap"
                          >
                            {graduate}
                            {index < graduates.length - 1 ? ', ' : ''}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
          </PeopleSection>
          <PeopleSection heading="que deviennent les diplômé.es auep ?">
            <div className="flex flex-col gap-12 border-l-2 pt-8 pl-4">
              <div className="flex flex-col gap-4">
                <p className="text-xl">
                  Ils-elles ont fondé{' '}
                  <a
                    href="https://otopo.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary px-2 py-0.5 text-2xl leading-none font-bold text-white"
                  >
                    Otopo
                  </a>{' '}
                  — collectif pluridisciplinaire regroupant des architectes,
                  urbanistes et politistes pour repenser la fabrique
                  territoriale.
                </p>
                <DitherCanvas
                  src="/images/people/otopo.png"
                  height={360}
                  fitMode="cover"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-xl">
                  Ils-elles exercent dans des domaines et des organisations
                  variés, partout en France :
                </p>
                <ul className="flex flex-wrap gap-4">
                  {GRADUATE_EMPLOYERS.map(({ name, url }, index) => (
                    <li key={index}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary px-2 py-0.5 text-2xl leading-none font-bold whitespace-nowrap text-white"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </PeopleSection>
        </div>
      </div>
    </div>
  );
};
