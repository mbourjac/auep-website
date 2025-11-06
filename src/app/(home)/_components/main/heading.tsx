import { cn } from '@/lib/utils';

export const Heading = () => {
  const stylizedHeadingItems = [
    { label: 'RCHITECTURE', spacingTop: 'h-[150px]' },
    { label: 'RBANISME', spacingTop: 'h-[50px]' },
    { label: 'TUDES', spacingTop: 'h-[200px]' },
    { label: 'OLITIQUES', spacingTop: 'h-[200px]' },
  ];

  return (
    <div className="w-fit">
      <h1 className="sr-only">Architecture, urbanisme, études politiques</h1>
      <div aria-hidden className="flex">
        {stylizedHeadingItems.map(({ label, spacingTop }) => (
          <div key={label}>
            <div className={cn('flex justify-center', spacingTop)}>
              <div className={cn('w-px bg-white', spacingTop)}></div>
            </div>
            <p className="flex w-[42px] items-center text-2xl font-bold text-white [text-orientation:upright] [writing-mode:vertical-rl]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
