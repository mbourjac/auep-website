import { Gallery } from './gallery';
import { Hero } from './hero';
import { News } from './news/news';

export const Home = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <News />
    </>
  );
};
