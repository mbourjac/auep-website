import Link from 'next/link';

export const Nav = () => {
  return (
    <nav className="flex items-baseline justify-end border-b-8 px-12 pt-8">
      <ul className="flex items-center gap-4 text-lg">
        <li>
          <Link href="/formation" className="bg-black px-3 py-2 text-white">
            formation
          </Link>
        </li>
        <li>
          <Link href="/equipes" className="bg-black px-3 py-2 text-white">
            équipes
          </Link>
        </li>
        <li>
          <Link href="/travaux" className="bg-black px-3 py-2 text-white">
            travaux
          </Link>
        </li>
        <li>
          <Link href="/contact" className="bg-black px-3 py-2 text-white">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
