import { RefObject } from 'react';
import { cn } from '../../../lib/tailwind';
import { GraduationProjectsYear as GraduationProjectsYearType } from '../works.types';

type GraduationProjectsYearProps = Omit<GraduationProjectsYearType, 'id'> & {
  sectionRef: RefObject<HTMLDivElement | null>;
};

export const GraduationProjectsYear = ({
  sectionRef,
  label,
  graduationProjects,
}: GraduationProjectsYearProps) => {
  return (
    <div ref={sectionRef} className="scroll-mt-24">
      <div className="flex flex-col gap-2.5 border-t-2 py-2.5">
        <h3 className="text-md font-medium">{label}</h3>
      </div>
      <table className="w-full table-fixed border-t border-t-black/40">
        <colgroup>
          <col className="w-[260px]" />
          <col className="w-full" />
          <col className="w-[240px]" />
        </colgroup>
        <thead>
          <tr className="border-b border-b-black/40">
            <th className="py-1 pr-6 text-left font-normal">Étudiants</th>
            <th className="px-6 py-1 text-left font-normal">Titre</th>
            <th className="px-6 py-1 text-left font-normal">
              Sous la direction de
            </th>
          </tr>
        </thead>
        <tbody>
          {graduationProjects.map((graduationProject, index) => (
            <tr
              key={index}
              className={cn(
                'align-top',
                index !== graduationProjects.length - 1 &&
                  'border-b border-b-black/40'
              )}
            >
              <td className="truncate overflow-hidden py-1 pr-6 text-ellipsis whitespace-nowrap">
                {graduationProject.students.join(' - ')}
              </td>
              <td className="truncate overflow-hidden px-6 py-1 text-ellipsis whitespace-nowrap">
                {graduationProject.title}
              </td>
              <td className="truncate overflow-hidden px-6 py-1 text-ellipsis whitespace-nowrap">
                {graduationProject.supervisedBy}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
