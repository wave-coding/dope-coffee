'use client';
import Image from 'next/image';
import { FC } from 'react';
import AddCard from '@/components/AddCard';

interface CardBasketProps {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const CardBasketImageBox: FC<Pick<CardBasketProps, 'image'>> = ({ image }) => {
  return (
    <Image
      className="mr-2"
      src={image}
      alt="here we are"
      width={69}
      height={74}
    />
  );
};

const CardBasketProductDetails: FC<Pick<CardBasketProps, 'name' | 'price'>> = ({
  price,
  name,
}) => {
  return (
    <div className="flex w-3/5">
      <div className="flex flex-col items-start">
        <h4 className="text-body-lg">{name}</h4>
        <h5 className="text-body-lg">
          <span className="text-color-neutral/70">$</span>
          {price}
        </h5>
      </div>
    </div>
  );
};

const CardBasket: FC<CardBasketProps> = ({
  name,
  image,
  price,
  quantity = 1,
}) => {
  return (
    <div className="flex w-auto justify-between overflow-hidden rounded-md bg-white pr-2 text-color-neutral/90">
      <CardBasketImageBox image={image} />
      <CardBasketProductDetails name={name} price={price} />
      <AddCard quantity={quantity} />
    </div>
  );
};

export default CardBasket;
