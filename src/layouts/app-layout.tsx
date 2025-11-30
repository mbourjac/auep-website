'use client';

import { ReactNode, useEffect, useRef } from 'react';
import ReactLenis, { LenisRef } from 'lenis/react';
import { frame, cancelFrame } from 'motion';

type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const update = (data: { timestamp: number }) => {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    };

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      {children}
    </>
  );
};
