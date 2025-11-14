import Link from 'next/link';

export const Home = () => {
  return (
    <div className="flex min-h-dvh flex-col pb-8">
      <header className="flex max-h-[33vw] max-w-screen justify-center overflow-hidden">
        <h1 className="mt-[-20%] cursor-default text-[50vw] leading-none font-black">
          <abbr>auep</abbr>
          <span className="sr-only">
            Architecture, Urbanisme et Études Politiques
          </span>
        </h1>
      </header>
      <main className="flex grow items-center px-12">
        <p className="text-lg font-semibold tracking-wide">
          <strong className="font-black">
            Architecture, Urbanisme et Études Politiques
          </strong>{' '}
          (<abbr>AUEP</abbr>) est une formation tri-diplômante
          <br />
          portée conjointement par trois établissements composantes de
          l’Université Grenoble Alpes :
          <br />
          l’École Nationale Supérieure d’Architecture de Grenoble (
          <abbr>ENSAG-UGA</abbr>),
          <br />
          l’Institut d’Urbanisme et de Géographie Alpine (<abbr>IUGA</abbr>) et
          Sciences Po Grenoble-UGA.
        </p>
      </main>
      <nav className="flex items-baseline justify-end border-b-8 px-12 pt-8">
        <ul className="flex items-center gap-4 pb-1 text-lg tracking-widest">
          <li className="after:ml-4 after:content-['—']">
            <Link href="/formation">formation</Link>
          </li>
          <li className="after:ml-4 after:content-['—']">
            <Link href="/equipes">équipes</Link>
          </li>
          <li className="after:ml-4 after:content-['—']">
            <Link href="/travaux">travaux</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
