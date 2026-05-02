import Link from 'next/link';

export const SeeMore = () => {
  return (
    <Link href="/actualites" className="group w-12 md:w-16">
      <span className="sr-only">Voir plus d&apos;actualités</span>
      <span className="relative flex h-14 items-center justify-center">
        <span className="block h-4 w-12 bg-black transition-transform duration-300 ease-out group-hover:scale-x-110"></span>
        <span className="absolute top-1/2 left-1/2 block h-12 w-4 -translate-x-1/2 -translate-y-1/2 bg-black transition-transform duration-300 ease-out group-hover:scale-y-110"></span>
      </span>
    </Link>
  );
};
