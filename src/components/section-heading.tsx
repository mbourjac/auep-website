import { ReactNode } from 'react';

type SectionHeadingProps = {
  children: ReactNode;
};

export const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="w-fit border-x-2 border-t-2 px-4 pt-1 text-2xl font-bold">
      {children}
    </h2>
  );
};
