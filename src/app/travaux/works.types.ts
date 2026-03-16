import { ReactNode } from 'react';

export type Seminar = {
  year: string;
  mentoring: string[];
  guests: string[];
  pictures: string[];
};

export type SeminarsSemester = {
  id: string;
  label: string;
  title: string;
  description: ReactNode | null;
  seminars: Seminar[];
};
