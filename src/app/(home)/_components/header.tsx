import Link from 'next/link';

export const Header = () => {
  const heading = 'AUEP';

  return (
    <header className="border border-blue-500">
      <Link href="/" className="flex text-4xl font-bold">
        <span className="sr-only">{heading}</span>
        {heading.split('').map((character, index) => (
          <span
            key={index}
            aria-hidden
            className="flex h-12 w-[42px] items-center justify-center border-r border-blue-500"
          >
            {character}
          </span>
        ))}
      </Link>
    </header>
  );
};
