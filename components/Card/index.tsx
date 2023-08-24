import Image from 'next/image';
import { FC, HTMLAttributes } from 'react';
import CardDetails from './components/CardDetails';
import clsx from 'clsx';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  image?: string;
}

const Card: FC<CardProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        'flex w-auto flex-col overflow-hidden rounded-md bg-color-six',
        className
      )}
    >
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
