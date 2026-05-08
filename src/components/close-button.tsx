import { ComponentPropsWithoutRef, forwardRef } from 'react';

export const CloseButton = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<'button'>
>((props, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className="group border-primary block size-18 cursor-pointer border-l-4"
    >
      <span className="sr-only">Fermer la fenêtre</span>
      <span className="relative flex h-14 rotate-45 items-center justify-center">
        <span className="block h-4 w-12 bg-black transition-transform duration-300 ease-out group-hover:scale-x-110" />
        <span className="absolute top-1/2 left-1/2 block h-12 w-4 -translate-x-1/2 -translate-y-1/2 bg-black transition-transform duration-300 ease-out group-hover:scale-y-110" />
      </span>
    </button>
  );
});

CloseButton.displayName = 'CloseButton';
