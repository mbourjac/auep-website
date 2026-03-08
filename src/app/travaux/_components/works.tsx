import { SEMINARS } from '../works.constants';
import { SeminarsSemester } from './seminars-semester';
import { WorksSection } from './works-section';

export const Works = () => {
  return (
    <div className="px-6 xl:px-12">
      <div className="flex min-h-[calc(100dvh-64px)] flex-col gap-32 border-b-2 pb-32">
        <h1 className="mt-[-1.2vw] cursor-default border-b-36 pb-[2vw] text-[7.5vw] leading-none font-extrabold">
          travaux
        </h1>
        <WorksSection title="séminaires">
          <SeminarsSemester {...SEMINARS.semester7} />
          <SeminarsSemester {...SEMINARS.semester8} />
          <SeminarsSemester {...SEMINARS.semester9} />
        </WorksSection>
      </div>
    </div>
  );
};
