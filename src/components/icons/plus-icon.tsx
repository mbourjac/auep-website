import { SVGProps } from 'react';

type PlusIconProps = SVGProps<SVGSVGElement>;

export const PlusIcon = ({ ...props }: PlusIconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path
          d="M10 1H6V6L1 6V10H6V15H10V10H15V6L10 6V1Z"
          fill="#000000"
        ></path>
      </g>
    </svg>
  );
};
