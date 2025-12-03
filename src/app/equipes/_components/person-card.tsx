import { DitherCanvas } from '@/components/dither-canvas';
import { Person } from './people.types';

type PersonCardProps = Person;

export const PersonCard = ({ firstName, lastName, image }: PersonCardProps) => {
  return (
    <div className="text-[1.725vw] leading-none font-bold">
      <div>
        <DitherCanvas
          src={`/images/people/${image}`}
          height={300}
          fitMode="cover"
          className="w-full"
        />
      </div>
      <p>
        <span className="block border-x-4 border-t-4 border-[#0066FF] px-1 py-0.5">
          {firstName}
        </span>
        <span className="block border-4 border-[#0066FF] px-1 py-0.5">
          {lastName}
        </span>
      </p>
    </div>
  );
};
