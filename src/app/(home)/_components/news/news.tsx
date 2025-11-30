import Link from 'next/link';
import { PlusIcon } from '../../../../components/icons/plus-icon';
import { NewsItem } from './news-item';
import { NEWS } from './news.constants';

export const News = () => {
  return (
    <section className="px-12">
      <div className="flex flex-col gap-4 border-b-2 py-24">
        <p className="text-4xl font-semibold">actualités</p>
        <div>
          {NEWS.slice(0, 5).map((item, index) => (
            <NewsItem key={index} {...item} />
          ))}
          <div className="flex justify-end border-t py-1">
            <div className="flex w-[200px] justify-center text-4xl font-bold">
              <Link href="/actualites" className="w-16">
                <span className="sr-only">Voir plus d&apos;actualités</span>
                <PlusIcon aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
