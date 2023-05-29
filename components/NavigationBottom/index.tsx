import { FC } from 'react';
import { Icons } from '@/components/';

export const NavigationBottom: FC = () => {
  return (
    <nav className="flex w-full justify-around bg-white">
      <div className="">
        <Icons.home className="fill-color-neutral/50" />
        <span className="text-label-md">Home</span>
      </div>
      <div className="fill-color-neutral/50">
        <Icons.home className="fill-color-neutral/50" />
        <span className="text-label-md">Home</span>
      </div>
      <div className="fill-color-neutral/50">
        <Icons.home className="fill-color-neutral/50" />
        <span className="text-label-md">Home</span>
      </div>
      <div className="fill-color-neutral/50">
        <Icons.home className="fill-color-neutral/50" />
        <span className="text-label-md">Home</span>
      </div>
    </nav>
  );
};
