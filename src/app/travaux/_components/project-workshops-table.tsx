import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { cn } from '../../../lib/tailwind';
import { ProjectWorkshopsYear } from '../works.types';

type ProjectWorkshopsTableProps = Pick<
  ProjectWorkshopsYear,
  'projectWorkshops'
> & {
  setSelectedProjectWorkshopId: (id: string | null) => void;
};

export const ProjectWorkshopsTable = ({
  projectWorkshops,
  setSelectedProjectWorkshopId,
}: ProjectWorkshopsTableProps) => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <table className="w-full table-fixed">
      <colgroup>
        <col className="w-full lg:w-[460px]" />
        <col className="w-full" />
      </colgroup>
      <thead>
        <tr className="text-white">
          <th className="pr-6 text-left font-normal">
            <span className="bg-primary block px-2 py-1">Étudiant·es</span>
          </th>
          <th className="text-left font-normal">
            <span className="bg-primary block px-2 py-1">Titre</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {projectWorkshops.map((projectWorkshop, index) => (
          <Dialog.Trigger key={index} asChild>
            <tr
              className={cn(
                'text-primary cursor-pointer align-top transition-opacity',
                index !== projectWorkshops.length - 1 &&
                  'border-primary border-b',
                hoveredRow !== null && hoveredRow !== index && 'opacity-60'
              )}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
              onClick={() => setSelectedProjectWorkshopId(projectWorkshop.id)}
            >
              <td className="pr-6">
                <span className="block h-8 truncate overflow-hidden px-2 py-1 text-ellipsis whitespace-nowrap">
                  {projectWorkshop.students.join(' - ')}
                </span>
              </td>
              <td>
                <span className="block h-8 truncate overflow-hidden px-2 py-1 text-ellipsis whitespace-nowrap">
                  {projectWorkshop.title}
                </span>
              </td>
            </tr>
          </Dialog.Trigger>
        ))}
      </tbody>
    </table>
  );
};
