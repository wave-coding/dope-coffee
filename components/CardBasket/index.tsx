'use client';
import Image from 'next/image';
import { FC, useState } from 'react';
import Icons from '@/components/Icon';

interface CardBasketProps {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CardBasketQuantityOperationProps {
  handler: () => void;
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

const CardBasketQuantityAdd: FC<CardBasketQuantityOperationProps> = ({
  handler,
}) => {
  return (
    <div
      onClick={handler}
      className="flex w-1/3  items-center justify-center fill-color-neutral/50"
    >
      <Icons.add width={24} height={24} />
    </div>
  );
};
const CardBasketQuantityMinus: FC<CardBasketQuantityOperationProps> = ({
  handler,
}) => {
  return (
    <div
      className="flex w-1/3 items-center justify-center fill-color-neutral/50"
      onClick={handler}
    >
      <Icons.minus width={24} height={24} />
    </div>
  );
};

const CardBasketQuantity: FC<Pick<CardBasketProps, 'quantity'>> = ({
  quantity,
}) => {
  return (
    <div className="flex w-1/3 cursor-default items-center justify-center">
      {quantity}
    </div>
  );
};

const CardBasketQuantityContainer: FC<Pick<CardBasketProps, 'quantity'>> = (
  props
) => {
  const [quantity, setQuantity] = useState(props?.quantity || 1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex w-1/5 items-center">
      <div className="flex w-full cursor-pointer justify-between rounded-md border border-color-neutral/10 bg-color-neutral/0  py-1">
        <CardBasketQuantityMinus handler={handleDecrease} />
        <CardBasketQuantity quantity={quantity} />
        <CardBasketQuantityAdd handler={handleIncrease} />
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
      <CardBasketQuantityContainer quantity={quantity} />
    </div>
  );
};

export default CardBasket;
