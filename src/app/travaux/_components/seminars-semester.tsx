import { RefObject } from 'react';
import { cn } from '../../../lib/tailwind';
import type { SeminarsSemester as SeminarsSemesterType } from '../works.types';

type SeminarsSemesterProps = Omit<SeminarsSemesterType, 'id'> & {
  semesterRef: RefObject<HTMLDivElement | null>;
  isLast: boolean;
  isFirst: boolean;
};

export const SeminarsSemester = ({
  label,
  title,
  description,
  seminars,
  semesterRef,
  isLast,
  isFirst,
}: SeminarsSemesterProps) => {
  return (
    <div ref={semesterRef} className={cn('scroll-mt-24', !isLast && 'pb-4')}>
      <div
        className={cn(
          'flex flex-col gap-2.5 pt-4 pb-2.5',
          !isFirst && 'border-t-2'
        )}
      >
        <h3 className="text-md font-medium">
          {label} - {title}
        </h3>
        {description && <p>{description}</p>}
      </div>
      <table className="w-full table-fixed border-t border-t-black/40">
        <colgroup>
          <col className="w-[110px] md:w-[140px]" />
          <col className="w-[50%]" />
          <col className="w-[50%]" />
        </colgroup>
        <thead>
          <tr className="border-b border-b-black/40">
            <th className="py-1 pr-6 text-left font-normal">Année</th>
            <th className="px-6 py-1 text-left font-normal">Encadrement</th>
            <th className="px-6 py-1 text-left font-normal">Invités</th>
          </tr>
        </thead>
        <tbody>
          {seminars.map((seminar, index) => (
            <tr
              key={index}
              className={cn(
                'align-top',
                index !== seminars.length - 1 && 'border-b border-b-black/40'
              )}
            >
              <td
                className={cn(
                  'py-1 pr-6',
                  index === seminars.length - 1 && 'pb-0'
                )}
              >
                {seminar.year}
              </td>
              <td
                className={cn(
                  'truncate overflow-hidden px-6 py-1 text-ellipsis whitespace-nowrap',
                  index === seminars.length - 1 && 'pb-0'
                )}
              >
                {seminar.mentoring.join(' - ')}
              </td>
              <td
                className={cn(
                  'truncate overflow-hidden px-6 py-1 text-ellipsis whitespace-nowrap',
                  index === seminars.length - 1 && 'pb-0'
                )}
              >
                {seminar.guests.join(' - ')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
