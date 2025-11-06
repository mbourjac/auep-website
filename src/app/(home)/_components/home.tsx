import { Header } from './header';
import { Main } from './main/main';

export const Home = () => {
  return (
    <div className="flex min-h-dvh flex-col gap-4 p-4 text-blue-500">
      <Header />
      <Main />
    </div>
  );
};
