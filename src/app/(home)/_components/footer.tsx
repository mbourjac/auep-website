'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

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
        className="fixed bottom-0 flex w-full justify-between gap-12 px-12 py-8"
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
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="block size-10 rounded-full bg-black"
              ></a>
            </li>
            <li>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="block size-10 rounded-full bg-black"
              ></a>
            </li>
            <li>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="block size-10 rounded-full bg-black"
              ></a>
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
