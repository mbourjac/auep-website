import Link from 'next/link';

export const Header = () => {
  const heading = 'AUEP';

  return (
    <header className="border border-blue-500">
      <Link href="/" className="block text-4xl font-bold">
        <span className="sr-only">{heading}</span>
        {heading.split('').map((character, index) => (
          <span
            key={index}
            aria-hidden
            className="border-r border-blue-500 p-2"
          >
            {character}
          </span>
        ))}
      </Link>
    </header>
  );
};
