import Link from 'next/link';

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white px-6 pt-4 xl:px-12">
      <div className="flex items-center justify-between gap-10 border-b-2">
        <Link href="/" className="text-4xl font-bold">
          <abbr>auep</abbr>
          <span className="sr-only">
            Architecture, Urbanisme et Études Politiques
          </span>
        </Link>
        <nav>
          <ul className="flex gap-10 py-0.5 text-lg font-semibold">
            <li>
              <Link href="/formation">formation</Link>
            </li>
            <li>
              <Link href="/equipes">équipes</Link>
            </li>
            <li>
              <Link href="/travaux">travaux</Link>
            </li>
            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
