'use client';
import { FC, HTMLAttributes, useState } from 'react';
import { handlerType } from '@/types';
import Icons from '@/components/Icon';
import clsx from 'clsx';

type UseQuantityType = (initialValue: number) => {
  quantityValue: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
};
interface CardBasketQuantityItemsProps extends HTMLAttributes<HTMLDivElement> {
  increaseHandler: handlerType;
  decreaseHandler: handlerType;
  quantity: number;
}

interface CardBasketQuantityOperationProps {
  handler: handlerType;
}
const AddCardQuantityAdd: FC<CardBasketQuantityOperationProps> = ({
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
const AddCardQuantityMinus: FC<CardBasketQuantityOperationProps> = ({
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

const AddCardQuantity: FC<Pick<CardBasketQuantityItemsProps, 'quantity'>> = ({
  quantity,
}) => {
  return (
    <div className="flex w-1/3 cursor-default items-center justify-center">
      {quantity}
    </div>
  );
};

const AddCardQuantityItems: FC<CardBasketQuantityItemsProps> = ({
  increaseHandler,
  decreaseHandler,
  quantity,
}) => {
  return (
    <div className="flex w-full cursor-pointer justify-between rounded-md border border-color-neutral/10 bg-color-neutral/0  py-1">
      <AddCardQuantityMinus handler={decreaseHandler} />
      <AddCardQuantity quantity={quantity} />
      <AddCardQuantityAdd handler={increaseHandler} />
    </div>
  );
};

const AddCardContainer: FC<CardBasketQuantityItemsProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={clsx('flex w-full items-center', className && className)}>
      <AddCardQuantityItems {...props} />
    </div>
  );
};

const useQuantity: UseQuantityType = (initialValue: number) => {
  const [quantityValue, setQuantityValue] = useState(initialValue);

  const handleIncrease = () => {
    setQuantityValue(quantityValue + 1);
  };

  const handleDecrease = () => {
    if (quantityValue > 0) {
      setQuantityValue(quantityValue - 1);
    }
  };

  return {
    quantityValue,
    handleIncrease,
    handleDecrease,
  };
};

const AddCard: FC<
  Pick<CardBasketQuantityItemsProps, 'quantity' | 'className'>
> = ({ quantity = 1, className }) => {
  const { quantityValue, handleDecrease, handleIncrease } =
    useQuantity(quantity);

  return (
    <AddCardContainer
      quantity={quantityValue}
      decreaseHandler={handleDecrease}
      increaseHandler={handleIncrease}
      className={clsx(className)}
    />
  );
};

export default AddCard;
