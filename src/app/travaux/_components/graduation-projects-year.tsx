import { RefObject } from 'react';
import { useMediaQuery } from '../../../hooks/use-media-query';
import { cn } from '../../../lib/tailwind';
import { BREAKPOINTS } from '../../constants';
import { GraduationProjectsYear as GraduationProjectsYearType } from '../works.types';

type GraduationProjectsYearProps = Omit<GraduationProjectsYearType, 'id'> & {
  sectionRef: RefObject<HTMLDivElement | null>;
  isLast: boolean;
};

export const GraduationProjectsYear = ({
  sectionRef,
  label,
  graduationProjects,
  isLast,
  mentoring,
}: GraduationProjectsYearProps) => {
  const hasSupervisors = useMediaQuery(BREAKPOINTS.md);

  return (
    <div ref={sectionRef} className={cn('scroll-mt-24', !isLast && 'pb-4')}>
      <div className="flex flex-col gap-2.5 border-t-2 pt-4 pb-2.5">
        <h3 className="text-md font-medium">{label}</h3>
        <p>Equipe encadrante de suivi : {mentoring.join(', ')}</p>
      </div>
      <table className="w-full table-fixed border-t border-t-black/40">
        <colgroup>
          <col className="w-[160px] lg:w-[260px]" />
          <col className="w-full" />
          {hasSupervisors && <col className="w-[240px]" />}
        </colgroup>
        <thead>
          <tr className="border-b border-b-black/40">
            <th className="py-1 pr-6 text-left font-normal">Étudiant·es</th>
            <th className="px-6 py-1 text-left font-normal">Titre</th>
            {hasSupervisors && (
              <th className="px-6 py-1 text-left font-normal">
                Sous la direction de
              </th>
            )}
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
              <td
                className={cn(
                  'truncate overflow-hidden py-1 pr-6 text-ellipsis whitespace-nowrap',
                  index === graduationProjects.length - 1 && 'pb-0'
                )}
              >
                {graduationProject.students.join(' - ')}
              </td>
              <td
                className={cn(
                  'truncate overflow-hidden px-6 py-1 text-ellipsis whitespace-nowrap',
                  index === graduationProjects.length - 1 && 'pb-0'
                )}
              >
                {graduationProject.title}
              </td>
              {hasSupervisors && (
                <td
                  className={cn(
                    'truncate overflow-hidden px-6 py-1 text-ellipsis whitespace-nowrap',
                    index === graduationProjects.length - 1 && 'pb-0'
                  )}
                >
                  {graduationProject.supervisedBy}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
