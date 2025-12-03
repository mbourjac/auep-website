import { Person } from './people.types';
import { PersonCard } from './person-card';

type PeopleSectionProps = {
  heading: string;
  people: Person[];
};

export const PeopleSection = ({ heading, people }: PeopleSectionProps) => {
  return (
    <section className="pt-24">
      <h2 className="border-b pb-4 text-4xl font-semibold">{heading}</h2>
      <ul className="grid grid-cols-6 gap-4 pt-6">
        {people.map((person, index) => (
          <li key={index}>
            <PersonCard {...person} />
          </li>
        ))}
      </ul>
    </section>
  );
};
