import { Footer } from './footer';
import { Gallery } from './gallery';
import { Header } from './header';
import { Hero } from './hero';
import { News } from './news/news';

export const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <News />
      </main>
      <Footer />
    </div>
  );
};
