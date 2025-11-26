import { cn } from '../lib/utils';

type SquareWithDiagonalsProps = {
  strokeWidth?: number;
  className?: string;
  color?: string;
};

export const SquareWithDiagonals = ({
  strokeWidth = 1,
  className,
  color = '#0066FF',
}: SquareWithDiagonalsProps) => {
  return (
    <div
      style={{ color, borderColor: color }}
      className={cn('flex grow border', className)}
    >
      <div className="w-full grow">
        <svg
          className="inset-0 h-full w-full text-[currentColor]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="100%"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="butt"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1="0"
            y1="100%"
            x2="100%"
            y2="0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="butt"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  );
};
