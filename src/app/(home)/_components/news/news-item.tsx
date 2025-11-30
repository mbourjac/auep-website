import { ReactNode } from 'react';
import { DitherCanvas } from '@/components/dither-canvas';
import { SquareWithDiagonals } from '@/components/square-with-diagonals';

type NewsItemProps = {
  date: {
    day: number;
    month: number;
    year: number;
  };
  title: ReactNode;
  subtitle?: ReactNode;
  description: ReactNode;
  image?: string;
};

export const NewsItem = ({
  date,
  title,
  subtitle,
  image,
  description,
}: NewsItemProps) => {
  const padTwoDigits = (number: number) => String(number).padStart(2, '0');

  const isoDate = `${date.year}-${padTwoDigits(date.month)}-${padTwoDigits(date.day)}`;
  const newsDate = new Date(date.year, date.month - 1, date.day);

  const accessibleDate = new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(newsDate);

  return (
    <div className="flex gap-16 border-t py-1">
      <div className="relative top-[0.475rem] min-w-31 [font-family:var(--font-azeret-mono)] text-xl">
        <time dateTime={isoDate} className="sr-only">
          {accessibleDate}
        </time>
        <div aria-hidden="true">
          <span className="text-[3rem] font-bold">
            {padTwoDigits(date.day)}
          </span>
          <span className="[font-family:var(--default-font-family)] text-[5rem] leading-0">
            .
          </span>
          <span className="text-[2rem] font-bold">
            {padTwoDigits(date.month)}
          </span>
          <br />
          <span className="relative -top-[0.85rem] text-[1.2rem] font-light">
            {date.year}
          </span>
        </div>
      </div>
      <div className="max-w-[20vw] min-w-[20vw] py-4">
        <p className="line-clamp-1 font-bold">{title}</p>
        {subtitle && <p className="line-clamp-2 italic">{subtitle}</p>}
      </div>
      <div className="grow py-4">
        <p className="line-clamp-3">{description}</p>
      </div>
      <div className="h-[104px] min-w-[200px]">
        {image ? (
          <DitherCanvas
            src={image}
            height={104}
            width={200}
            method="floyd-steinberg"
            fitMode="cover"
          />
        ) : (
          <SquareWithDiagonals className="h-[104px] min-w-[200px]" />
        )}
      </div>
    </div>
  );
};
