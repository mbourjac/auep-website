import { DitherCanvas } from '@/components/dither-canvas';
import { Person } from '../people.types';

type PersonCardProps = Person;

export const PersonCard = ({ firstName, lastName, image }: PersonCardProps) => {
  return (
    <div className="relative text-3xl leading-none font-bold text-white">
      <div>
        <DitherCanvas
          src={`/images/people/staff/${image}`}
          height={360}
          fitMode="cover"
          className="w-full"
        />
      </div>
      <p className="bg-primary/60 absolute right-0 bottom-0 left-0">
        <span className="block border-t-4 border-white px-1 py-0.5">
          {firstName}
        </span>
        <span className="block border-t-4 border-white px-1 py-0.5">
          {lastName}
        </span>
      </p>
    </div>
  );
};
