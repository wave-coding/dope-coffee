import Icon from '@/components/Icon/Icon';
import Image from 'next/image';
import { FC } from 'react';
import CardDetails from './CardDetails';

const Card: FC = () => {
  return (
    <div className="flex w-auto flex-col overflow-hidden rounded-md bg-color-six">
      <Image
        className="w-auto"
        src="https://cdn.pixabay.com/photo/2021/07/19/16/04/pizza-6478478_1280.jpg"
        alt="here we are"
        width={148}
        height={96}
      />
      <CardDetails />
    </div>
  );
};

export default Card;
