import { NewsItem } from '../../(home)/_components/news/news-item';
import { NEWS } from '../../(home)/home.constants';

export const News = () => {
  return (
    <div className="px-4 sm:px-6 xl:px-12">
      <div className="flex min-h-[calc(100dvh-64px)] flex-col gap-24 border-b-2 pb-32">
        <h1 className="mt-[-1.2vw] cursor-default border-b-20 pb-[2vw] text-[clamp(2rem,7.5vw,8.75rem)] leading-none font-extrabold md:border-b-28 lg:border-b-36">
          actualités
        </h1>
        <section>
          {NEWS.map((item, index) => (
            <NewsItem key={index} index={index + 1} {...item} />
          ))}
        </section>
      </div>
    </div>
  );
};
