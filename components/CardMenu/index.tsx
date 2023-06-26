'use client';
import { FC } from 'react';
import Image from 'next/image';
import Frame from '../Frame';
import AddCard from '../AddCard';
import { Product } from '@/interfaces/share.interface';
import { calculateSumOfMacros, getWidthPercentageString } from '@/utils';
import { MacrosType } from '@/types';
import { COLOR_VARIANTS } from '@/shared';

interface CardMenuProps {
  product: Product;
  quantity: number;
}

type makeBulletListInputType = MacrosType & { total: number; key: number };

const CardMenuImageBoxContainer: FC<Pick<CardMenuProps, 'product'>> = ({
  product,
}) => {
  return (
    <div className="relative mr-1">
      <CardMenuImageBox product={product} />
      <CardMenuImageBoxCalorie product={product} />
    </div>
  );
};

const CardMenuImageBoxCalorie: FC<Pick<CardMenuProps, 'product'>> = ({
  product: { calories },
}) => {
  return (
    <div className="absolute bottom-1 left-1 rounded-lg bg-color-three p-0 px-2 text-body-md text-color-neutral/80">
      {calories} <span className="text-white">Kcal</span>
    </div>
  );
};

const CardMenuImageBox: FC<Pick<CardMenuProps, 'product'>> = ({
  product: { image },
}) => {
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

const MacroBullets: FC<Pick<CardMenuProps, 'product'>> = ({
  product: { macros },
}) => {
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

const CardMenuDetailsHeadline: FC<Pick<CardMenuProps, 'product'>> = ({
  product,
}) => {
  return (
    <div className="flex w-full flex-col">
      <h2 className="mt-1 text-subtitle-lg">{product?.name}</h2>
      <h4 className="ingredients mb-1 mt-1 text-label-sm">
        {product.ingredients.join(', ')}
      </h4>
    </div>
  );
};

const CardMenuProductDetailsItems: FC<Pick<CardMenuProps, 'product'>> = ({
  product,
}) => {
  return (
    <>
      <CardMenuDetailsHeadline product={product} />
      <Frame macros={product?.macros} />
      <MacroBullets product={product} />
    </>
  );
};

const CardMenuProductDetailsContainer: FC<Pick<CardMenuProps, 'product'>> = ({
  product,
}) => {
  return (
    <div className="flex w-full flex-col">
      <CardMenuProductDetailsItems product={product} />
    </div>
  );
};

const CardMenuProductPrice: FC<Pick<CardMenuProps, 'product'>> = ({
  product,
}) => {
  return (
    <h5 className="text-body-lg">
      <span className="text-color-neutral/70">$</span>
      {product?.price}
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
      <CardMenuProductPrice product={product} />
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
      <CardMenuProductDetailsContainer product={product} />
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
    <CardMenuImageBoxContainer {...props} />
    <CardMenuDetailsContainer {...props} />
  </div>
);

export default CardMenu;
