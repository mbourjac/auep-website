import { Person } from '../people.types';
import { PersonCard } from './person-card';

type PeopleGridProps = {
  people: Person[];
};

export const PeopleGrid = ({ people }: PeopleGridProps) => {
  return (
    <ul className="grid grid-cols-6 gap-4 border-l-2 p-4 pt-6 pb-0">
      {people.map((person, index) => (
        <li key={index}>
          <PersonCard {...person} />
        </li>
      ))}
    </ul>
  );
};
