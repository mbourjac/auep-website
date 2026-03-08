import { ReactNode, RefObject } from 'react';
import { cn } from '../../../lib/tailwind';

type SeminarsSemesterProps = {
  label: string;
  title: string;
  description: ReactNode | null;
  list: {
    year: string;
    mentoring: string[];
    guests: string[];
  }[];
  sectionRef: RefObject<HTMLDivElement | null>;
};

export const SeminarsSemester = ({
  label,
  title,
  description,
  list,
  sectionRef,
}: SeminarsSemesterProps) => {
  return (
    <div ref={sectionRef} className="scroll-mt-24">
      <div className="flex flex-col gap-2.5 border-t-2 py-2.5">
        <h3 className="text-md font-medium">
          {label} - {title}
        </h3>
        {description && <p>{description}</p>}
      </div>
      <table className="w-full table-fixed border-t border-t-black/40">
        <colgroup>
          <col style={{ width: '200px' }} />
          <col style={{ width: '40%' }} />
          <col style={{ width: '40%' }} />
          <col style={{ width: '20%' }} />
        </colgroup>
        <thead>
          <tr className="border-b border-b-black/40">
            <th className="py-1 pr-6 text-left font-normal">Année</th>
            <th className="px-6 py-1 text-left font-normal">Encadrement</th>
            <th className="px-6 py-1 text-left font-normal">Invités</th>
            <th className="py-1 pl-6 text-left font-normal" />
          </tr>
        </thead>
        <tbody>
          {list.map((seminar, index) => (
            <tr
              key={index}
              className={cn(
                'align-top',
                index !== list.length - 1 && 'border-b border-b-black/40'
              )}
            >
              <td className="py-1 pr-6">{seminar.year}</td>
              <td className="truncate overflow-hidden px-6 py-1 text-ellipsis whitespace-nowrap">
                {seminar.mentoring.join(' - ')}
              </td>
              <td className="truncate overflow-hidden px-6 py-1 text-ellipsis whitespace-nowrap">
                {seminar.guests.join(' - ')}
              </td>
              <td className="py-1 pl-6" />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
