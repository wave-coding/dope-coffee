'use client';
import Image from 'next/image';
import { FC } from 'react';
import AddCard from '@/components/AddCard';
import { Product } from '@/interfaces/share.interface';

interface CardBasketProps {
  product: Pick<Product, 'image' | 'name' | 'price'>;
  quantity: number;
}

const CardBasketImageBox: FC<Pick<CardBasketProps, 'product'>> = ({
  product: { image },
}) => {
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

const CardBasketProductDetails: FC<Pick<CardBasketProps, 'product'>> = ({
  product: { name, price },
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

const CardBasket: FC<CardBasketProps> = ({ product, quantity = 1 }) => {
  return (
    <div className="flex w-auto items-center justify-between overflow-hidden rounded-md bg-white pr-2 text-color-neutral/90">
      <CardBasketImageBox product={product} />
      <CardBasketProductDetails product={product} />
      <div className="w-1/4">
        <AddCard quantity={quantity} />
      </div>
    </div>
  );
};

export default CardBasket;
