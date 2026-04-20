import Link from 'next/link';

export const MainNav = () => {
  return (
    <nav
      role="navigation"
      aria-label="Navigation principale"
      className="hidden lg:block"
    >
      <ul className="flex gap-10 py-0.5 text-lg font-semibold">
        <li>
          <Link href="/formation" scroll={true}>
            formation
          </Link>
        </li>
        <li>
          <Link href="/equipes" scroll={true}>
            équipes
          </Link>
        </li>
        <li>
          <Link href="/travaux" scroll={true}>
            travaux
          </Link>
        </li>
        <li>
          <Link href="/actualites" scroll={true}>
            actualités
          </Link>
        </li>
        <li>
          <Link href="/contact" scroll={true}>
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
