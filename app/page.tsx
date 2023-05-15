import { Card } from '@/components';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-color-five p-24 font-roboto text-color-three">
      <Card />
    </main>
  );
};

export default Home;
