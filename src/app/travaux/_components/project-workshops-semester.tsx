import { Fragment, RefObject } from 'react';
import { cn } from '../../../lib/tailwind';
import type { ProjectWorkshopsSemester as ProjectWorkshopsSemesterType } from '../works.types';

type ProjectWorkshopsSemesterProps = Omit<
  ProjectWorkshopsSemesterType,
  'id'
> & {
  semesterRef: RefObject<HTMLDivElement | null>;
};

export const ProjectWorkshopsSemester = ({
  label,
  title,
  description,
  areas,
  years,
  semesterRef,
}: ProjectWorkshopsSemesterProps) => {
  return (
    <div ref={semesterRef} className="scroll-mt-24">
      <div className="flex flex-col gap-2.5 border-t-2 py-2.5">
        <h3 className="text-md font-medium">
          {label} - {title}
        </h3>
        {description && <p>{description}</p>}
        {areas && <p>Territoires de projet : {areas.join(', ')}</p>}
      </div>
      {years.map((year, index) => (
        <Fragment key={index}>
          <div className="scroll-mt-24">
            <div className="flex flex-col gap-2.5 border-t-2 py-2.5">
              <h3 className="text-md font-medium">{year.label}</h3>
              <p>Encadrement : {year.mentoring.join(', ')}</p>
            </div>
            <table className="w-full table-fixed border-t border-t-black/40">
              <colgroup>
                <col className="w-[460px]" />
                <col className="w-full" />
              </colgroup>
              <thead>
                <tr className="border-b border-b-black/40">
                  <th className="py-1 pr-6 text-left font-normal">Étudiants</th>
                  <th className="px-6 py-1 text-left font-normal">Titre</th>
                </tr>
              </thead>
              <tbody>
                {year.projectWorkshops.map((projectWorkshop, index) => (
                  <tr
                    key={index}
                    className={cn(
                      'align-top',
                      index !== year.projectWorkshops.length - 1 &&
                        'border-b border-b-black/40'
                    )}
                  >
                    <td className="truncate overflow-hidden py-1 pr-6 text-ellipsis whitespace-nowrap">
                      {projectWorkshop.students.join(' - ')}
                    </td>
                    <td className="truncate overflow-hidden px-6 py-1 text-ellipsis whitespace-nowrap">
                      {projectWorkshop.title}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Fragment>
      ))}
    </div>
  );
};
