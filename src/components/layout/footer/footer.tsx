'use client';

import { useRef, useState, useEffect } from 'react';
import { Heading } from './heading';
import { Institutions } from './institutions';
import { LegalNotices } from './legal-notices';
import { Logos } from './logos';
import { SocialLinks } from './social-links';

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
        className="fixed bottom-0 flex w-full flex-col gap-12 px-4 py-6 sm:px-6 sm:py-8 xl:px-12"
        style={{ height: wrapperHeight ? `${wrapperHeight}px` : undefined }}
      >
        <Heading />
        <div className="flex items-center justify-between gap-12 lg:grid lg:grid-cols-2 2xl:hidden">
          <SocialLinks />
          <Logos className="hidden md:block" />
        </div>
        <div className="grid 2xl:grid-cols-2">
          <div className="hidden flex-col gap-16 2xl:flex">
            <SocialLinks className="shrink-0" />
            <Logos />
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <Institutions />
            <LegalNotices className="hidden md:flex" />
          </div>
        </div>
        <Logos className="md:hidden" />
      </div>
    </footer>
  );
};
