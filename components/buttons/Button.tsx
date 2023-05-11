import { Buttons } from './button.type';

const colorVariants = {
  Protein: 'bg-color-protein',
  Fat: 'bg-color-fat',
  Carb: 'bg-color-carb',
  Vegetarian: 'bg-color-vegetarian',
  Hug: 'bg-color-hug',
};

const Button = ({ type, key }: { type: Buttons; key: number }) => {
  return (
    <button
      key={key}
      className={`${colorVariants[type]} flex center rounded-md px-3`}
    >
      {type}
    </button>
  );
};

export default Button;
