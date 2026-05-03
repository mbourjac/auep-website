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
  index: number;
  date: {
    day: number;
    month: number;
    year: number;
  };
  title: ReactNode;
  subtitle?: ReactNode;
  summary?: ReactNode;
  description: ReactNode;
  image?: string;
};

export const NewsItem = ({
  index,
  date,
  title,
  subtitle,
  image,
  summary,
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

  const handleOpenModal = (isOpen: boolean) => {
    if (!isOpen && lenis?.isStopped) {
      lenis?.start();
    }

    setIsModalOpen(isOpen);
  };

  const getSvgShape = (index: number) => {
    const cycleIndex = (index - 1) % 5;

    switch (cycleIndex) {
      case 0:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 600 600"
            className="absolute h-30 scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-60"
          >
            <path
              d="M102.09423828125,392.670166015625C75.26177724202473,354.31937917073566,135.8638712565104,224.08377583821616,190.8376922607422,184.5549774169922C245.81151326497397,145.02617899576822,384.94763437906903,129.97381337483725,431.9371643066406,155.49737548828125C478.9266942342122,181.02093760172525,486.1256561279297,294.50262959798175,472.7748718261719,337.69635009765625C459.42408752441406,380.89007059733075,413.61256408691406,405.4973958333333,351.83245849609375,414.6596984863281C290.05235290527344,423.82200113932294,128.92669932047525,431.02095286051434,102.09423828125,392.670166015625C75.26177724202473,354.31937917073566,135.8638712565104,224.08377583821616,190.8376922607422,184.5549774169922"
              fill="hsl(10, 75%, 50%)"
            ></path>
          </svg>
        );
      case 1:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 600 600"
            className="absolute h-30 scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-60"
          >
            <path
              d="M467.2774963378906,363.6125793457031C467.670166015625,410.07854715983075,481.5445098876953,451.30890401204425,446.858642578125,472.7748718261719C412.1727752685547,494.2408396402995,321.5968475341797,509.6858723958333,259.16229248046875,492.40838623046875C196.7277374267578,475.1309000651042,84.94764455159505,426.04712931315106,72.25131225585938,369.1099548339844C59.554979960123696,312.1727803548177,135.60210164388022,193.58638763427734,182.9842987060547,150.78533935546875C230.36649576822916,107.98429107666016,312.9581069946289,105.10471089680989,356.54449462890625,112.30366516113281C400.1308822631836,119.50261942545573,426.047124226888,152.09424591064453,444.50262451171875,193.97906494140625C462.9581247965495,235.86388397216797,466.88482666015625,317.1466115315755,467.2774963378906,363.6125793457031C467.670166015625,410.07854715983075,481.5445098876953,451.30890401204425,446.858642578125,472.7748718261719"
              fill="hsl(50, 98%, 60%)"
            ></path>
          </svg>
        );
      case 2:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 600 600"
            className="absolute h-30 scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-60"
          >
            <path
              d="M528.5340576171875,318.8481750488281C525.7853647867838,366.36126200358075,408.1151885986328,414.52879333496094,349.4764404296875,429.5811462402344C290.8376922607422,444.6334991455078,215.8376948038737,425.52354939778644,176.70156860351562,409.16229248046875C137.56544240315756,392.80103556315106,117.4083735148112,375.52354939778644,114.65968322753906,331.4136047363281C111.91099294026692,287.3036600748698,118.3246078491211,175.65445454915366,160.2094268798828,144.50262451171875C202.09424591064453,113.35079447428386,304.5811589558919,115.44503275553386,365.9685974121094,144.50262451171875C427.35603586832684,173.56021626790366,531.2827504475912,271.3350880940755,528.5340576171875,318.8481750488281C525.7853647867838,366.36126200358075,408.1151885986328,414.52879333496094,349.4764404296875,429.5811462402344"
              fill="hsl(105, 69%, 40%)"
            ></path>
          </svg>
        );
      case 3:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 600 600"
            className="absolute h-30 scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-60"
          >
            <path
              d="M62.04188537597656,466.4921569824219C37.43455568949382,442.670171101888,32.59162521362305,428.01046498616535,51.832462310791016,380.8900451660156C71.07329940795898,333.7696253458659,125.26177533467612,216.62303924560547,177.48690795898438,183.76963806152344C229.71204058329263,150.9162368774414,313.6125793457031,167.53927357991537,365.1832580566406,183.76963806152344C416.7539367675781,200.0000025431315,514.5287831624349,224.476437886556,486.9109802246094,281.1518249511719C459.2931772867839,337.8272120157878,270.28795623779297,492.93190511067706,199.4764404296875,523.8219604492188C128.66492462158203,554.7120157877604,86.6492150624593,490.31414286295575,62.04188537597656,466.4921569824219C37.43455568949382,442.670171101888,32.59162521362305,428.01046498616535,51.832462310791016,380.8900451660156"
              fill="hsl(205, 69%, 60%)"
            ></path>
          </svg>
        );
      case 4:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 600 600"
            className="absolute h-30 scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-60"
          >
            <path
              d="M508.11517333984375,361.25653076171875C531.1518249511719,321.5968475341797,524.6073303222656,264.00523630777997,499.4764404296875,223.03665161132812C474.3455505371094,182.0680669148763,401.96334075927734,120.68062591552734,357.329833984375,115.44502258300781C312.69632720947266,110.20941925048828,271.5968640645345,159.42407989501953,231.67539978027344,191.62303161621094C191.75393549601236,223.82198333740234,112.6963399251302,267.40836334228516,117.8010482788086,308.63873291015625C122.90575663248698,349.86910247802734,221.72773615519205,413.6125793457031,262.30364990234375,439.0052490234375C302.8795636494954,464.3979187011719,320.28794352213544,473.95287068684894,361.25653076171875,460.9947509765625C402.22511800130206,448.03663126627606,485.0785217285156,400.9162139892578,508.11517333984375,361.25653076171875C531.1518249511719,321.5968475341797,524.6073303222656,264.00523630777997,499.4764404296875,223.03665161132812"
              fill="hsl(30, 100%, 50%)"
            ></path>
          </svg>
        );
    }
  };

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={handleOpenModal}>
      <Dialog.Trigger asChild>
        <div className="group relative">
          {getSvgShape(index)}
          <button className="relative z-10 flex w-full cursor-pointer gap-8 border-t py-1 text-left md:gap-16">
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
              <p className="line-clamp-3">{summary}</p>
            </div>
            <div className="h-[81px] min-w-[100px] overflow-hidden md:h-[104px] md:min-w-[200px]">
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
        </div>
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
