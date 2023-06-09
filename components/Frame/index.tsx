import { FC } from 'react';
import { MacroType } from '@/types';
import { COLOR_VARIANTS } from '@/shared';

export type MacrosType = {
  type: MacroType;
  amount: number;
};

export interface FrameProps {
  macros: MacrosType[];
}

type makeFrameListInputType = MacrosType & { total: number };

const calcSumOfMacros = (macros: MacrosType[]) => {
  return macros.reduce((sum, macro) => sum + macro.amount, 0);
};

const makeFrameList = ({ amount, type, total }: makeFrameListInputType) => {
  const widthPercentage = `${(amount / total) * 100}%`;
  return (
    <div
      className={`${COLOR_VARIANTS[type]} mr-0.5 flex h-2 first:rounded-l-md last:mr-0 last:rounded-r-md`}
      style={{
        width: widthPercentage,
      }}
    ></div>
  );
};

const Frame: FC<FrameProps> = ({ macros = [] }) => {
  const total = calcSumOfMacros(macros);

  return (
    <div className="inline-flex w-full">
      {macros.map((macro) => makeFrameList({ ...macro, total }))}
    </div>
  );
};

export default Frame;
