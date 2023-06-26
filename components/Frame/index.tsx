import { FC } from 'react';
import { MacrosType } from '@/types';
import { COLOR_VARIANTS } from '@/shared';
import { calculateSumOfMacros, getWidthPercentageString } from '@/utils';

export interface FrameProps {
  macros: MacrosType[];
}

type makeFrameListInputType = MacrosType & { total: number; key: number };

const makeFrameList = ({
  amount,
  type,
  total,
  key,
}: makeFrameListInputType) => {
  const widthPercentage = getWidthPercentageString({ amount, total });
  return (
    <div
      className={`${COLOR_VARIANTS[type]} mr-0.5 flex h-2 first:rounded-l-md last:mr-0 last:rounded-r-md`}
      key={key}
      style={{
        width: widthPercentage,
      }}
    ></div>
  );
};

const Frame: FC<FrameProps> = ({ macros = [] }) => {
  const total = calculateSumOfMacros(macros);

  return (
    <div className="inline-flex w-full">
      {macros.map((macro, key) => makeFrameList({ ...macro, total, key }))}
    </div>
  );
};

export default Frame;
