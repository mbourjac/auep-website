import { Footer } from './footer';
import { Header } from './header';
import { Hero } from './hero';

export const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};
