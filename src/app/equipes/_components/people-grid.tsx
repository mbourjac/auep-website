import { Person } from '../people.types';
import { PersonCard } from './person-card';

type PeopleGridProps = {
  section: string;
  people: Person[];
};

export const PeopleGrid = ({ section, people }: PeopleGridProps) => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2">
      {people.map((person, index) => (
        <li key={index}>
          <PersonCard {...person} section={section} />
        </li>
      ))}
    </ul>
  );
};
