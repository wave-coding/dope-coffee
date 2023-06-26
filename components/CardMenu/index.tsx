'use client';
import { FC } from 'react';
import Image from 'next/image';
import Frame from '../Frame';
import AddCard from '../AddCard';

interface CardMenuProps {
  name: string;
  // items: string;
  // frames: string[];
  price: number;
  quantity: number;
  // calorie: number;
  image: string;
}
const CardMenuImageBox: FC<Pick<CardMenuProps, 'image'>> = ({ image }) => {
  return (
    <Image
      className="mr-2"
      src={image}
      alt="here we are"
      width={129}
      height={129}
    />
  );
};

const CardMenuProductDetails: FC<Pick<CardMenuProps, 'name' | 'price'>> = ({
  price,
  name,
}) => {
  return (
    <div className="flex w-3/5">
      <div className="flex flex-col items-start">
        <h5 className="text-body-lg">
          <span className="text-color-neutral/70">$</span>
          {price}
        </h5>
      </div>
    </div>
  );
};

const CardMenu: FC<CardMenuProps> = ({
  // calorie,
  // frames,
  // items,
  price,
  quantity,
  name,
  image,
}) => (
  <div className="flex w-auto overflow-hidden rounded-md border-2 border-neutral-50 bg-white pr-2 text-color-neutral/90">
    <CardMenuImageBox image={image} />
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-col">
        <h2 className="mt-1 text-subtitle-lg">{name}</h2>
        <h4 className="ingredients mb-1 mt-1 text-label-sm">
          Shrimp, Parmesan, Olive, Bread
        </h4>
        <Frame
          macros={[
            {
              amount: 30,
              type: 'Protein',
            },
            {
              amount: 20,
              type: 'Fat',
            },
            {
              amount: 40,
              type: 'Carb',
            },
          ]}
        />
      </div>
      <div className="m-2 mr-0 flex flex-row items-center justify-between">
        <h5 className="text-body-lg">
          <span className="text-color-neutral/70">$</span>
          {price}
        </h5>
        <div className="w-1/3">
          <AddCard quantity={quantity} />
        </div>
      </div>
    </div>
  </div>
);

export default CardMenu;
