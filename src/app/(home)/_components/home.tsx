import { Footer } from './footer';
import { Gallery } from './gallery';
import { Header } from './header';
import { Hero } from './hero';

export const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};
