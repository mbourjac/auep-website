import { DitherCanvas } from '../../../components/dither-canvas';
import { PeopleGrid } from './people-grid';
import { PeopleSection } from './people-section';
import {
  ACADEMIC_COORDINATION,
  FORMER_STAFF,
  GRADUATING_CLASSES,
  TEACHING_STAFF,
} from './people.constants';

export const People = () => {
  return (
    <div className="px-6 xl:px-12">
      <div className="min-h-[calc(100dvh-64px)] border-b-2 pb-12">
        <h1 className="mt-[-1.2vw] cursor-default border-b-36 pb-[2vw] text-[7.5vw] leading-none font-extrabold">
          équipes
        </h1>
        <PeopleSection heading="coordination pédagogique">
          <PeopleGrid people={ACADEMIC_COORDINATION} />
        </PeopleSection>
        <PeopleSection heading="équipe enseignante">
          <PeopleGrid people={TEACHING_STAFF} />
        </PeopleSection>
        <PeopleSection heading="mais aussi">
          <ul className="flex flex-wrap gap-[0.75vw] border-l-2 p-4 pb-0">
            {FORMER_STAFF.map((people, index) => (
              <li
                key={index}
                className="text-[3vw] leading-none font-bold whitespace-nowrap"
              >
                {people}
                {index < FORMER_STAFF.length - 1 ? ', ' : ''}
              </li>
            ))}
          </ul>
        </PeopleSection>
        <PeopleSection heading="diplômé.es auep">
          <div className="flex flex-col gap-4 border-l-2 p-4">
            <DitherCanvas
              src={`/images/people/graduates.png`}
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
                    <ul className="flex flex-wrap gap-[0.75vw] pt-2">
                      {graduates.map((graduate, index) => (
                        <li
                          key={index}
                          className="text-[2vw] leading-none font-bold whitespace-nowrap"
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
      </div>
    </div>
  );
};
