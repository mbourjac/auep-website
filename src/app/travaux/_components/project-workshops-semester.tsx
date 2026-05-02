import { Fragment, RefObject } from 'react';
import { DitherCanvas } from '../../../components/dither-canvas';
import { cn } from '../../../lib/tailwind';
import type { ProjectWorkshopsSemester as ProjectWorkshopsSemesterType } from '../works.types';
import { ProjectWorkshopsTable } from './project-workshops-table';

type ProjectWorkshopsSemesterProps = Omit<
  ProjectWorkshopsSemesterType,
  'id'
> & {
  semesterRef: RefObject<HTMLDivElement | null>;
  isFirst: boolean;
  setSelectedProjectWorkshopId: (id: string | null) => void;
};

export const ProjectWorkshopsSemester = ({
  label,
  title,
  description,
  areas,
  years,
  semesterRef,
  isFirst,
  setSelectedProjectWorkshopId,
}: ProjectWorkshopsSemesterProps) => {
  return (
    <div ref={semesterRef} className={cn('scroll-mt-24', !isFirst && 'pt-4')}>
      <div
        className={cn('flex flex-col gap-2.5 py-4', !isFirst && 'border-t-2')}
      >
        <h3 className="text-lg font-bold">
          {label} - {title}
        </h3>
        {description && <p>{description}</p>}
        {areas && <p>Territoires de projet : {areas.join(', ')}</p>}
      </div>
      {years.map(
        (
          { label, description, mentoring, picture, projectWorkshops },
          index
        ) => (
          <Fragment key={index}>
            <div
              className={cn(
                'scroll-mt-24',
                index !== years.length - 1 && 'pb-4'
              )}
            >
              <div className="flex flex-col gap-2.5 border-t-2 py-4">
                <h3 className="text-lg font-bold">{label}</h3>
                {picture && (
                  <div
                    style={{ aspectRatio: picture.ratio }}
                    className="relative overflow-hidden"
                  >
                    <DitherCanvas
                      src={picture.src}
                      className="absolute inset-0"
                    />
                  </div>
                )}
                {description && <p>{description}</p>}
                <p>Encadrement : {mentoring.join(', ')}</p>
              </div>
              <ProjectWorkshopsTable
                projectWorkshops={projectWorkshops}
                setSelectedProjectWorkshopId={setSelectedProjectWorkshopId}
              />
            </div>
          </Fragment>
        )
      )}
    </div>
  );
};
