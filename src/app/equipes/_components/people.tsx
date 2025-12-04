import { PeopleGrid } from './people-grid';
import { PeopleSection } from './people-section';
import { ACADEMIC_COORDINATION, TEACHING_STAFF } from './people.constants';

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
      </div>
    </div>
  );
};
