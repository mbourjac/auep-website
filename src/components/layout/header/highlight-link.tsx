import { ReactNode } from 'react';
import Link from 'next/link';

type HighlightLinkProps = {
  href: string;
  svg?: ReactNode;
  children: ReactNode;
};

export const HighlightLink = ({ href, svg, children }: HighlightLinkProps) => {
  return (
    <Link
      href={href}
      scroll
      className="group relative inline-block leading-none"
    >
      <span className="relative z-10 block py-1">{children}</span>
      {svg ? (
        svg
      ) : (
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-0 h-20 w-full -translate-y-1/2"
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M34.080718994140625,208.96861267089844C49.77578481038412,201.64424641927084,111.95814005533855,158.74438985188803,128.25111389160156,165.0224151611328C144.5440877278646,171.3004404703776,104.4843012491862,250.0747299194336,131.83856201171875,246.6367645263672C159.1928227742513,243.19879913330078,260.3886362711589,148.28101857503256,292.3766784667969,144.39462280273438C324.3647206624349,140.5082270304362,295.51569112141925,219.73094685872397,323.7668151855469,223.31838989257812C352.0179392496745,226.90583292643228,436.4723612467448,158.74439493815103,461.8834228515625,165.91928100585938C487.2944844563802,173.09416707356772,447.085205078125,274.14050165812176,476.2331848144531,266.3677062988281C505.38116455078125,258.5949109395345,610.3138987223307,126.60687255859375,636.7713012695312,119.28250885009766C663.2287038167318,111.95814514160156,623.0194498697916,209.71599197387695,634.9776000976562,222.42152404785156C646.9357503255209,235.12705612182617,696.2631022135416,200.00000508626303,708.5202026367188,195.5157012939453"
            fill="none"
            stroke="currentColor"
            strokeWidth="43"
            strokeLinecap="round"
            transform="matrix(1.05,0,0,1.05,10.13,-2.48)"
            pathLength="1"
            className="origin-left text-[#6daaff] opacity-40 transition-[stroke-dashoffset] duration-500 ease-out [stroke-dasharray:1] [stroke-dashoffset:1] group-hover:[stroke-dashoffset:0]"
          />
        </svg>
      )}
    </Link>
  );
};
