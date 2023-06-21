import { FC, useState } from 'react';
import Icons from '@/components/Icon';

type handlerType = () => void;

interface CardBasketQuantityItemsProps {
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

const AddCardContainer: FC<CardBasketQuantityItemsProps> = (props) => {
  return (
    <div className="flex w-1/5 items-center">
      <AddCardQuantityItems {...props} />
    </div>
  );
};

const AddCard: FC<Pick<CardBasketQuantityItemsProps, 'quantity'>> = ({
  quantity = 1,
}) => {
  const [quantityValue, setQuantityValue] = useState(quantity);

  const handleIncrease = () => {
    setQuantityValue(quantityValue + 1);
  };

  const handleDecrease = () => {
    if (quantityValue > 0) {
      setQuantityValue(quantityValue - 1);
    }
  };

  return (
    <AddCardContainer
      quantity={quantity}
      decreaseHandler={handleDecrease}
      increaseHandler={handleIncrease}
    />
  );
};

export default AddCard;
