import { FC } from 'react';
import { Buttons } from './button.type';

const colorVariants = {
  Protein: 'bg-color-protein',
  Fat: 'bg-color-fat',
  Carb: 'bg-color-carb',
  Vegetarian: 'bg-color-vegetarian',
  Hug: 'bg-color-hug',
};

interface ButtonProps {
  type: Buttons;
  key: number;
}

const Button: FC<ButtonProps> = ({ type, key }) => {
  return (
    <button
      key={key}
      className={`${colorVariants[type]} center flex rounded-md px-3`}
    >
      {type}
    </button>
  );
};

export default Button;
