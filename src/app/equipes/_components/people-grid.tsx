import { Person } from '../people.types';
import { PersonCard } from './person-card';

type PeopleGridProps = {
  section: string;
  people: Person[];
};

export const PeopleGrid = ({ section, people }: PeopleGridProps) => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4 border-l-2 pt-8 pl-4">
      {people.map((person, index) => (
        <li key={index}>
          <PersonCard {...person} section={section} />
        </li>
      ))}
    </ul>
  );
};
