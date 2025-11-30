import { SVGProps } from 'react';

type XMarkIconProps = SVGProps<SVGSVGElement>;

export const XMarkIcon = ({ ...props }: XMarkIconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <path d="M13,4.66667,9.66667,7.99917,13,11.33333,11.33333,13,8,9.66667,4.66667,13,3,11.33333,6.33333,7.99917,3,4.66667,4.66667,3,8,6.33333,11.33333,3Z"></path>
      </g>
    </svg>
  );
};
