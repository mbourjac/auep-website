import { ReactNode } from 'react';

export type SeminarsSection = {
  label: string;
  picture: string;
  semesters: SeminarsSemester[];
};

export type Seminar = {
  id: string;
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

export type DissertationsSection = {
  label: string;
  description: ReactNode;
  picture: string;
  years: DissertationsYear[];
};

export type Dissertation = {
  id: string;
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

export type ProjectWorkshopSection = {
  label: string;
  picture: string;
  semesters: ProjectWorkshopsSemester[];
};

export type ProjectWorkshop = {
  id: string;
  students: string[];
  title: ReactNode | null;
  description: ReactNode | null;
  pictures: string[];
};

export type ProjectWorkshopsYear = {
  label: string;
  description: ReactNode | null;
  picture: {
    src: string;
    ratio: string;
  } | null;
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

export type GraduationProjectsSection = {
  label: string;
  description: ReactNode;
  picture: string;
  years: GraduationProjectsYear[];
};

export type GraduationProjectsYear = {
  id: string;
  label: string;
  mentoring: string[];
  graduationProjects: GraduationProject[];
};

export type GraduationProject = {
  id: string;
  students: string[];
  title: ReactNode | null;
  supervisedBy: string | null;
  description: ReactNode | null;
};
