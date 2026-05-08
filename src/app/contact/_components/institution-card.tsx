import { DitherCanvas } from '../../../components/dither-canvas';
import { Institution } from '../contact.types';

type InstitutionCardProps = Institution;

export const InstitutionCard = ({
  address,
  city,
  link,
  name,
  picture,
}: InstitutionCardProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <p className="absolute px-2 py-1">
        <span className="bg-primary box-decoration-clone px-2 text-xl font-bold text-white sm:text-2xl">
          {name}
        </span>
      </p>
      <DitherCanvas
        src={picture}
        height={240}
        fitMode="cover"
        className="w-full"
      />
      <address className="absolute bottom-0 px-2 py-1">
        <span className="bg-primary px-2 text-xl font-bold text-white">
          {address}
        </span>
        <br />
        <span className="bg-primary px-2 text-xl font-bold text-white">
          {city}
        </span>
      </address>
    </a>
  );
};
