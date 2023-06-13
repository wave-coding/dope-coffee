import { FC } from 'react';

interface CaloriePriceProps {
  price: number;
  calorie: number;
}

const CaloriePrice: FC<CaloriePriceProps> = ({ price, calorie }) => (
  <div className="text-sm flex justify-between text-body-md text-color-neutral">
    <h5>
      {calorie} <span className="text-color-neutral/70">Kcal</span>
    </h5>
    <h5>
      <span className="text-color-neutral/70">$</span>
      {price}
    </h5>
  </div>
);

export default CaloriePrice;
