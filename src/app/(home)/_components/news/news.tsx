import { NEWS } from '../../home.constants';
import { NewsItem } from './news-item';
import { SeeMore } from './see-more';

export const News = () => {
  return (
    <section className="px-4 sm:px-6 xl:px-12">
      <div className="flex flex-col gap-2.5 border-b-2 py-20 sm:gap-4 md:py-24">
        <p className="text-3xl font-semibold sm:text-4xl">actualités</p>
        <div>
          {NEWS.slice(0, 5).map((item, index) => (
            <NewsItem key={index} {...item} />
          ))}
          <div className="flex justify-end border-t py-1">
            <div className="flex w-[100px] justify-center text-4xl font-bold md:w-[200px]">
              <SeeMore />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
