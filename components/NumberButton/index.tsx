import { FC } from 'react';

interface NumberButtonProps {
  count?: number;
}

const NumberButton: FC<NumberButtonProps> = ({ count = 0 }) => (
  <div className="two flex cursor-pointer items-center justify-center justify-items-center gap-3 rounded-md bg-color-three py-3 text-white transition-colors ease-in-out active:bg-color-two">
    <span className="text-body-lg">Go to basket</span>
    <div className="w-5">
      <div className="flex items-center justify-center rounded-full bg-white text-body-sm text-color-neutral/90">
        {count}
      </div>
    </div>
  </div>
);

export default NumberButton;
