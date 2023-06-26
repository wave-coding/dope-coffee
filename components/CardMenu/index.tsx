'use client';
import { FC } from 'react';
import Image from 'next/image';
import { Frame, AddCard } from '@/components';
import { Product } from '@/interfaces/share.interface';
import { calculateSumOfMacros, getWidthPercentageString } from '@/utils';
import { MacrosType } from '@/types';
import { COLOR_VARIANTS } from '@/shared';

interface CardMenuProps {
  product: Product;
  quantity: number;
}

type makeBulletListInputType = MacrosType & { total: number; key: number };

const CardMenuImageBoxContainer: FC<Pick<Product, 'image' | 'calories'>> = ({
  calories,
  image,
}) => {
  return (
    <div className="relative mr-1">
      <CardMenuImageBox image={image} />
      <CardMenuImageBoxCalorie calories={calories} />
    </div>
  );
};

const CardMenuImageBoxCalorie: FC<Pick<Product, 'calories'>> = ({
  calories,
}) => {
  return (
    <div className="absolute bottom-1 left-1 rounded-lg bg-color-three p-0 px-2 text-body-md text-color-neutral/80">
      {calories} <span className="text-white">Kcal</span>
    </div>
  );
};

const CardMenuImageBox: FC<Pick<Product, 'image'>> = ({ image }) => {
  return (
    <div className="h-full w-full">
      <Image
        className="h-full w-full object-cover"
        src={image}
        alt="here we are"
        width={129}
        height={129}
      />
    </div>
  );
};

const MacroBullets: FC<Pick<Product, 'macros'>> = ({ macros }) => {
  const total = calculateSumOfMacros(macros);

  return (
    <div className="mt-1 flex">
      {macros.map((macro, key) =>
        makeMacroBulletList({ ...macro, total, key })
      )}
    </div>
  );
};

const makeMacroBulletList = ({
  amount,
  type,
  total,
  key,
}: makeBulletListInputType) => {
  const macroPercentage = getWidthPercentageString({ amount, total });

  return (
    <div className="mr-1 flex items-center last:mr-0" key={key}>
      <div
        className={`mr-0.5 h-3 w-3 rounded-full ${COLOR_VARIANTS[type]}`}
      ></div>
      <span className="text-caption">
        {type} {macroPercentage}
      </span>
    </div>
  );
};

const CardMenuDetailsHeadline: FC<Pick<Product, 'ingredients' | 'name'>> = ({
  ingredients,
  name,
}) => {
  return (
    <div className="flex w-full flex-col">
      <h2 className="mt-1 text-subtitle-lg">{name}</h2>
      <h4 className="ingredients mb-1 mt-1 text-label-sm">
        {ingredients?.join(', ')}
      </h4>
    </div>
  );
};

const CardMenuProductDetailsItems: FC<
  Pick<Product, 'macros' | 'ingredients' | 'name'>
> = ({ macros, ingredients, name }) => {
  return (
    <>
      <CardMenuDetailsHeadline {...{ ingredients, name }} />
      <Frame macros={macros} />
      <MacroBullets macros={macros} />
    </>
  );
};

const CardMenuProductDetailsContainer: FC<
  Pick<Product, 'macros' | 'ingredients' | 'name'>
> = ({ macros, ingredients, name }) => {
  return (
    <div className="flex w-full flex-col">
      <CardMenuProductDetailsItems {...{ macros, name, ingredients }} />
    </div>
  );
};

const CardMenuProductPrice: FC<Pick<Product, 'price'>> = ({ price }) => {
  return (
    <h5 className="text-body-lg">
      <span className="text-color-neutral/70">$</span>
      {price}
    </h5>
  );
};

const CardMenuProductQuantity: FC<Pick<CardMenuProps, 'quantity'>> = ({
  quantity,
}) => {
  return (
    <div className="w-1/3">
      <AddCard quantity={quantity} />
    </div>
  );
};

const CardMenuProductPriceAndQuantity: FC<CardMenuProps> = ({
  product,
  quantity,
}) => {
  return (
    <>
      <CardMenuProductPrice {...product} />
      <CardMenuProductQuantity quantity={quantity} />
    </>
  );
};

const CardMenuProductPriceAndQuantityContainer: FC<CardMenuProps> = (props) => {
  return (
    <div className="m-2 mr-0 flex flex-row items-center justify-between">
      <CardMenuProductPriceAndQuantity {...props} />
    </div>
  );
};

const CardMenuDetails: FC<CardMenuProps> = ({ product, quantity }) => {
  return (
    <>
      <CardMenuProductDetailsContainer {...product} />
      <CardMenuProductPriceAndQuantityContainer
        product={product}
        quantity={quantity}
      />
    </>
  );
};

const CardMenuDetailsContainer: FC<CardMenuProps> = (props) => {
  return (
    <div className="flex w-full flex-col">
      <CardMenuDetails {...props} />
    </div>
  );
};

const CardMenu: FC<CardMenuProps> = (props) => (
  <div className="flex w-auto overflow-hidden rounded-md border border-color-border bg-white pr-2 text-color-neutral/90">
    <CardMenuImageBoxContainer {...props?.product} />
    <CardMenuDetailsContainer {...props} />
  </div>
);

export default CardMenu;
