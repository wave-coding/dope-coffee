import { FC, HTMLAttributes } from 'react';
import { COLOR_VARIANTS } from '@/shared';
import { MacroType } from '@/types';
import clsx from 'clsx';

interface LegendProps extends HTMLAttributes<HTMLDivElement> {
  type: MacroType;
  amount: number; // in grams
}

const LegendType: FC<Omit<LegendProps, 'amount'>> = ({ type }) => (
  <div className="flex w-3/5">
    <div className={`${COLOR_VARIANTS[type]} h-5 w-5`}></div>
    <span className="ml-1 text-body-md">{type}</span>
  </div>
);

const LegendAmount: FC<Omit<LegendProps, 'type'>> = ({ amount }) => (
  <div className="text-body-md">{amount} g</div>
);

const Legend: FC<LegendProps> = ({ amount, type, className }) => (
  <div
    className={clsx('flex justify-between text-color-neutral/90', className)}
  >
    <LegendType type={type} />
    <LegendAmount amount={amount} />
  </div>
);

export default Legend;
