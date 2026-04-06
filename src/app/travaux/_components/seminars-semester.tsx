import { RefObject, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { cn } from '../../../lib/tailwind';
import type { SeminarsSemester as SeminarsSemesterType } from '../works.types';

type SeminarsSemesterProps = Omit<SeminarsSemesterType, 'id'> & {
  semesterRef: RefObject<HTMLDivElement | null>;
  isLast: boolean;
  isFirst: boolean;
  setSelectedSeminarId: (id: string | null) => void;
};

export const SeminarsSemester = ({
  label,
  title,
  description,
  seminars,
  semesterRef,
  isLast,
  isFirst,
  setSelectedSeminarId,
}: SeminarsSemesterProps) => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <div ref={semesterRef} className={cn('scroll-mt-24', !isLast && 'pb-4')}>
      <div
        className={cn('flex flex-col gap-2.5 py-4', !isFirst && 'border-t-2')}
      >
        <h3 className="text-lg font-bold">
          {label} - {title}
        </h3>
        {description && <p>{description}</p>}
      </div>
      <table className="w-full table-fixed">
        <colgroup>
          <col className="w-[110px] md:w-[140px]" />
          <col className="w-[50%]" />
          <col className="w-[50%]" />
        </colgroup>
        <thead>
          <tr className="text-white">
            <th className="pr-6 text-left font-normal">
              <span className="bg-primary block px-2 py-1">Année</span>
            </th>
            <th className="pr-6 text-left font-normal">
              <span className="bg-primary block px-2 py-1">Encadrement</span>
            </th>
            <th className="text-left font-normal">
              <span className="bg-primary block px-2 py-1">Invité·es</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {seminars.map((seminar, index) => (
            <Dialog.Trigger key={index} asChild>
              <tr
                className={cn(
                  'text-primary cursor-pointer align-top transition-opacity',
                  index !== seminars.length - 1 && 'border-b-primary border-b',
                  hoveredRow !== null && hoveredRow !== index && 'opacity-60'
                )}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
                onClick={() => setSelectedSeminarId(seminar.id)}
              >
                <td className="pr-6">
                  <span className="block px-2 py-1">{seminar.year}</span>
                </td>
                <td className="pr-6">
                  <span className="block h-8 truncate overflow-hidden px-2 py-1 text-ellipsis whitespace-nowrap">
                    {seminar.mentoring.join(' - ')}
                  </span>
                </td>
                <td>
                  <span className="block h-8 truncate overflow-hidden px-2 py-1 text-ellipsis whitespace-nowrap">
                    {seminar.guests.join(' - ')}
                  </span>
                </td>
              </tr>
            </Dialog.Trigger>
          ))}
        </tbody>
      </table>
    </div>
  );
};
