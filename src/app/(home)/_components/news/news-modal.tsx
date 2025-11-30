import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useLenis } from 'lenis/react';
import useMeasure from 'react-use-measure';
import { DitherCanvas } from '@/components/dither-canvas';
import { XMarkIcon } from '@/components/icons/x-mark-icon';
import { SquareWithDiagonals } from '@/components/square-with-diagonals';
import { useWindowDimensions } from '@/hooks/use-window-dimensions';
import { padNumber } from '@/utils/numbers';
import { NewsItemProps } from './news-item';

type NewsModalProps = NewsItemProps & {
  isoDate: string;
  accessibleDate: string;
};

export const NewsModal = ({
  date,
  title,
  subtitle,
  image,
  description,
  isoDate,
  accessibleDate,
}: NewsModalProps) => {
  const lenis = useLenis();

  const [descriptionRef, { height: descriptionHeight }] = useMeasure();
  const [titleRef, { height: titleHeight }] = useMeasure();

  const { height: windowHeight } = useWindowDimensions();

  const [isHovered, setIsHovered] = useState(false);

  const headerHeight = 76;
  const padding = 32;
  const border = 4;

  const contentHeight = descriptionHeight + titleHeight;
  const modalHeight = contentHeight + headerHeight;
  const isOverflow = modalHeight + padding * 2 > windowHeight;
  const imageHeight = isOverflow
    ? windowHeight - headerHeight - padding * 2 - border * 2
    : contentHeight;

  useEffect(() => {
    if (isHovered) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [isHovered, lenis]);

  return (
    <Dialog.Portal>
      <Dialog.Content
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="fixed top-4 left-8 z-50 w-5xl max-w-[min(64rem,calc(100vw-64px))] transform border-4 border-[#0066FF] bg-white"
      >
        <div className="flex justify-between border-b-4 border-[#0066FF]">
          <div>
            <time dateTime={isoDate} className="sr-only">
              {accessibleDate}
            </time>
            <div
              aria-hidden="true"
              className="px-4 [font-family:var(--font-azeret-mono)]"
            >
              <span className="text-[3rem] font-bold">
                {padNumber(date.day)}
              </span>
              <span className="[font-family:var(--default-font-family)] text-[5rem] leading-0">
                .
              </span>
              <span className="text-[2rem] font-bold">
                {padNumber(date.month)}
              </span>
              <span className="[font-family:var(--default-font-family)] text-[5rem] leading-0">
                .
              </span>
              <span className="relative text-[1.2rem] font-light">
                {date.year}
              </span>
            </div>
          </div>
          <Dialog.Close asChild>
            <button className="block cursor-pointer border-l-4 border-[#0066FF]">
              <span className="sr-only">Fermer la fenêtre</span>
              <XMarkIcon aria-hidden="true" className="size-16" />
            </button>
          </Dialog.Close>
        </div>
        <div
          className="flex"
          style={{ maxHeight: windowHeight - headerHeight - padding }}
        >
          <div>
            {image ? (
              <DitherCanvas
                src={image}
                fitMode="cover"
                height={imageHeight}
                className="w-[20vw]"
              />
            ) : (
              <SquareWithDiagonals
                className="h-full w-[200px] border-none"
                strokeWidth={4}
              />
            )}
          </div>
          <div
            className="flex flex-col border-l-4 border-[#0066FF]"
            data-lenis-prevent
          >
            <div className="border-b-4 border-[#0066FF] p-4" ref={titleRef}>
              <Dialog.Title className="font-bold">{title}</Dialog.Title>
              {subtitle && <p className="italic">{subtitle}</p>}
            </div>
            <Dialog.Description
              className="max-h-full overflow-y-scroll p-4"
              ref={descriptionRef}
            >
              {description}
            </Dialog.Description>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
