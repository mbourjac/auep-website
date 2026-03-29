'use client';

import { ReactNode, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useLenis } from 'lenis/react';
import { DitherCanvas } from '@/components/dither-canvas';
import { SquareWithDiagonals } from '@/components/square-with-diagonals';
import { padNumber } from '@/utils/numbers';
import { useMediaQuery } from '../../../../hooks/use-media-query';
import { BREAKPOINTS } from '../../../constants';
import { NewsModal } from './news-modal';

export type NewsItemProps = {
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
  const lenis = useLenis();
  const isLargeImage = useMediaQuery(BREAKPOINTS.md);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const isoDate = `${date.year}-${padNumber(date.month)}-${padNumber(date.day)}`;
  const newsDate = new Date(date.year, date.month - 1, date.day);

  const accessibleDate = new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(newsDate);

  const handleModalOpen = (isOpen: boolean) => {
    if (!isOpen && lenis?.isStopped) {
      lenis?.start();
    }

    setIsModalOpen(isOpen);
  };

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={handleModalOpen}>
      <Dialog.Trigger asChild>
        <button className="flex w-full cursor-pointer gap-8 border-t py-1 text-left md:gap-16">
          <div className="relative top-[0.475rem] min-w-16 [font-family:var(--font-azeret-mono)] md:min-w-31">
            <time dateTime={isoDate} className="sr-only">
              {accessibleDate}
            </time>
            <div aria-hidden="true">
              <span className="text-[1.5rem] font-bold md:text-[3rem]">
                {padNumber(date.day)}
              </span>
              <span className="[font-family:var(--default-font-family)] text-[2.5rem] leading-0 md:text-[5rem]">
                .
              </span>
              <span className="text-[1rem] font-bold md:text-[2rem]">
                {padNumber(date.month)}
              </span>
              <br />
              <span className="relative -top-[0.85rem] text-[1.2rem] font-light">
                {date.year}
              </span>
            </div>
          </div>
          <div className="min-w-[20vw] grow py-1 md:py-4 lg:max-w-[20vw]">
            <p className="line-clamp-1 font-bold">{title}</p>
            {subtitle && <p className="line-clamp-2 italic">{subtitle}</p>}
          </div>
          <div className="hidden grow py-4 lg:block">
            <p className="line-clamp-3">{description}</p>
          </div>
          <div className="h-[81px] min-w-[100px] md:h-[104px] md:min-w-[200px]">
            {image ? (
              <DitherCanvas
                src={image}
                height={isLargeImage ? 104 : 81}
                width={isLargeImage ? 200 : 100}
                method="floyd-steinberg"
                fitMode="cover"
              />
            ) : (
              <SquareWithDiagonals className="h-[81px] min-w-[100px] md:h-[104px] md:min-w-[200px]" />
            )}
          </div>
        </button>
      </Dialog.Trigger>
      <NewsModal
        date={date}
        title={title}
        subtitle={subtitle}
        image={image}
        description={description}
        isoDate={isoDate}
        accessibleDate={accessibleDate}
      />
    </Dialog.Root>
  );
};
