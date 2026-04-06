import { RefObject, useState } from 'react';
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

  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <div ref={sectionRef} className={cn('scroll-mt-24', !isLast && 'pb-4')}>
      <div className="flex flex-col gap-2.5 border-t-2 pt-4 pb-2.5">
        <h3 className="text-md font-medium">{label}</h3>
        <p>Équipe encadrante de suivi : {mentoring.join(', ')}</p>
      </div>
      <table className="w-full table-fixed">
        <colgroup>
          <col className="w-[160px] lg:w-[260px]" />
          <col className="w-full" />
          {hasSupervisors && <col className="w-[240px]" />}
        </colgroup>
        <thead>
          <tr className="text-white">
            <th className="pr-6 text-left font-normal">
              <span className="bg-primary block px-2 py-1">Étudiant·es</span>
            </th>
            <th
              className={cn('text-left font-normal', hasSupervisors && 'pr-6')}
            >
              <span className="bg-primary block px-2 py-1">Titre</span>
            </th>
            {hasSupervisors && (
              <th className="text-left font-normal">
                <span className="bg-primary block px-2 py-1">
                  Sous la direction de
                </span>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {graduationProjects.map((graduationProject, index) => (
            <tr
              key={index}
              className={cn(
                'text-primary cursor-pointer align-top transition-opacity',
                index !== graduationProjects.length - 1 &&
                  'border-primary border-b',
                hoveredRow !== null && hoveredRow !== index && 'opacity-60'
              )}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td className="pr-6">
                <span className="block h-8 truncate overflow-hidden px-2 py-1 text-ellipsis whitespace-nowrap">
                  {graduationProject.students.join(' - ')}
                </span>
              </td>
              <td className={cn(hasSupervisors && 'pr-6')}>
                <span className="block h-8 truncate overflow-hidden px-2 py-1 text-ellipsis whitespace-nowrap">
                  {graduationProject.title}
                </span>
              </td>
              {hasSupervisors && (
                <td>
                  <span className="block h-8 truncate overflow-hidden px-2 py-1 text-ellipsis whitespace-nowrap">
                    {graduationProject.supervisedBy}
                  </span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
