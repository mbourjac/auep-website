import { CareerOpportunities } from './career-opportunities';
import { Objectives } from './objectives';
import { StudyPlan } from './study-plan';

export const Formation = () => {
  return (
    <div className="px-6 xl:px-12">
      <div className="flex min-h-[calc(100dvh-64px)] flex-col gap-32 border-b-2 pb-32">
        <h1 className="mt-[-1.2vw] cursor-default border-b-36 pb-[2vw] text-[7.5vw] leading-none font-extrabold">
          formation
        </h1>
        <div className="flex w-full flex-col gap-32">
          <Objectives />
          <StudyPlan />
          <CareerOpportunities />
        </div>
      </div>
    </div>
  );
};
