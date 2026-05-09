import { ReactNode } from 'react';
import Link from 'next/link';

type HighlightLinkProps = {
  href: string;
  svgPath: {
    d: string;
    strokeWidth: string;
    transform: string;
  };
  children: ReactNode;
};

export const HighlightLink = ({
  href,
  svgPath,
  children,
}: HighlightLinkProps) => {
  return (
    <Link
      href={href}
      scroll
      className="group relative inline-block leading-none"
    >
      <span className="relative z-10 block py-1">{children}</span>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 h-20 w-full -translate-y-1/2"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d={svgPath.d}
          fill="none"
          stroke="currentColor"
          strokeWidth={svgPath.strokeWidth}
          strokeLinecap="round"
          transform={svgPath.transform}
          pathLength="1"
          className="origin-left text-[#6daaff] opacity-40 transition-[stroke-dashoffset] duration-500 ease-out [stroke-dasharray:1] [stroke-dashoffset:1] group-hover:[stroke-dashoffset:0]"
        />
      </svg>
    </Link>
  );
};
