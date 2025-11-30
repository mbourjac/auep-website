'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { EmailIcon } from '../icons/email-icon';
import { InstagramIcon } from '../icons/instagram-icon';

export const Footer = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [wrapperHeight, setWrapperHeight] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) return;

    setWrapperHeight(wrapper.getBoundingClientRect().height);
  }, []);

  return (
    <footer
      className="relative"
      style={{
        clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
        height: wrapperHeight ? `${wrapperHeight}px` : undefined,
      }}
    >
      <div
        ref={wrapperRef}
        className="fixed bottom-0 flex w-full justify-between gap-12 px-6 py-8 xl:px-12"
        style={{ height: wrapperHeight ? `${wrapperHeight}px` : undefined }}
      >
        <div className="flex flex-col justify-between gap-12">
          <h2 className="flex flex-col">
            <abbr className="text-2xl font-bold">auep</abbr>
            <span className="text-lg">
              Architecture, Urbanisme et Études Politiques
            </span>
          </h2>
          <ul className="flex gap-4">
            <li>
              <a
                href="mailto:marine.bourgeois@iepg.fr,manola.t@grenoble.archi.fr,ines.ramirez-cobo@univ-grenoble-alpes.fr"
                className="flex size-10 items-center justify-center rounded-full bg-black text-white"
              >
                <span className="sr-only">Email</span>
                <EmailIcon aria-hidden="true" className="size-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/a_u_e_p/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full bg-black text-white"
              >
                <span className="sr-only">Instagram</span>
                <InstagramIcon aria-hidden="true" className="size-6" />
              </a>
            </li>
          </ul>
          <div className="w-[40vw]">
            <Image src="/logos.png" width={3026} height={464} alt="" />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-between gap-4">
            <div>
              <h3>
                École Nationale Supérieure d&apos;Architecture de Grenoble
              </h3>
              <address>
                60 Av. de Constantine CS 12636
                <br />
                38036 Grenoble Cedex 2
              </address>
            </div>
            <div>
              <h3>Institut d’Urbanisme et de Géographie Alpine</h3>
              <address>
                14 et 14 Bis Avenue Marie Reynoard
                <br />
                38100 Grenoble
              </address>
            </div>
            <div>
              <h3>Sciences Po Grenoble</h3>
              <address>
                1030 Av. Centrale
                <br />
                38400 Saint-Martin-d&apos;Hères
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
