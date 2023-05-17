import { ButtonType } from '@/types';
import { FC, ReactNode } from 'react';

const colorVariants = {
  Protein: 'bg-color-protein',
  Fat: 'bg-color-fat',
  Carb: 'bg-color-carb',
  Vegetarian: 'bg-color-vegetarian',
  Hug: 'bg-color-hug',
};

interface ButtonProps {
  type: ButtonType;
  key: number;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ type, key, children }) => {
  return (
    <button
      key={key}
      className={`${colorVariants[type]} flex content-center items-center justify-center space-x-1.5 rounded-md px-1`}
    >
      {children}
      {type !== 'Hug' ? <p className="flex">{type}</p> : null}
    </button>
  );
};

export default Button;
