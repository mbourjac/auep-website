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

export type Dissertation = {
  student: string;
  title: ReactNode;
  description: ReactNode | null;
  supervisedBy: string;
};

export type DissertationsYear = {
  id: string;
  label: string;
  dissertations: Dissertation[];
};

export type ProjectWorkshop = {
  students: string[];
  title: ReactNode | null;
  description: ReactNode | null;
  pictures: string[];
};

export type ProjectWorkshopsYear = {
  label: string;
  mentoring: string[];
  projectWorkshops: ProjectWorkshop[];
};

export type ProjectWorkshopsSemester = {
  id: string;
  label: string;
  title: string;
  description: ReactNode | null;
  areas: string[];
  years: ProjectWorkshopsYear[];
};

export type GraduationProjectsYear = {
  id: string;
  label: string;
  mentoring: string[];
  graduationProjects: GraduationProject[];
};

export type GraduationProject = {
  students: string[];
  title: ReactNode | null;
  supervisedBy: string | null;
  description: ReactNode | null;
};
