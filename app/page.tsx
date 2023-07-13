import Link from 'next/link';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <main className="flex flex-col items-center justify-between bg-color-two p-0 font-roboto">
      <ul className="m-auto flex w-1/2 gap-x-3 text-white">
        <Link href={'/home'}>Home</Link>
        <Link href={'/components'}>Components</Link>
      </ul>
    </main>
  );
};

export default Home;
