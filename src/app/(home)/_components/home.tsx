import { Footer } from './footer';
import { Header } from './header';
import { Nav } from './nav';

export const Home = () => {
  return (
    <div>
      <div className="flex min-h-[calc(100dvh-2rem)] flex-col">
        <Header />
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
            l’Institut d’Urbanisme et de Géographie Alpine (<abbr>IUGA</abbr>)
            et Sciences Po Grenoble-UGA.
          </p>
        </main>
        <Nav />
      </div>
      <Footer />
    </div>
  );
};
