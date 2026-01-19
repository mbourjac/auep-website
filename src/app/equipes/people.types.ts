import { ReactNode } from 'react';

export type Person = {
  firstName: string;
  lastName: string;
  image: string;
  description: ReactNode;
};
