import { RefObject } from 'react';
import { cn } from '../../../lib/tailwind';
import { DissertationsYear as DissertationsYearType } from '../works.types';

type DissertationsYearProps = Omit<DissertationsYearType, 'id'> & {
  sectionRef: RefObject<HTMLDivElement | null>;
};

export const DissertationsYear = ({
  sectionRef,
  label,
  dissertations,
}: DissertationsYearProps) => {
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
            <th className="py-1 pr-6 text-left font-normal">Étudiant</th>
            <th className="px-6 py-1 text-left font-normal">Titre</th>
            <th className="px-6 py-1 text-left font-normal">
              Sous la direction de
            </th>
          </tr>
        </thead>
        <tbody>
          {dissertations.map((dissertation, index) => (
            <tr
              key={index}
              className={cn(
                'align-top',
                index !== dissertations.length - 1 &&
                  'border-b border-b-black/40'
              )}
            >
              <td className="py-1 pr-6">{dissertation.student}</td>
              <td className="truncate overflow-hidden px-6 py-1 text-ellipsis whitespace-nowrap">
                {dissertation.title}
              </td>
              <td className="truncate overflow-hidden px-6 py-1 text-ellipsis whitespace-nowrap">
                {dissertation.supervisedBy}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
