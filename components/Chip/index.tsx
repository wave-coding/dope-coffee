import { FC } from 'react';
import { ChipFunc, ChipType, IntensityType, ChipRecords } from './Chip.type';
import { Icon } from '@/components/Icon/icon.type';
import Icons from '@/components/Icon';

export interface ChipProps {
  type: ChipType;
  intensity?: IntensityType;
}
const intensitySelector: ChipFunc = (intensity = null) => {
  if (!intensity) return null;

  return Icons[intensity];
};

export const Chips: ChipRecords = {
  Carb: intensitySelector,
  Fat: intensitySelector,
  Protein: intensitySelector,
  Hug: () => Icons['more'],
  Vegetarian: () => null,
};

const Chip: FC<ChipProps> = ({ type, intensity = null }) => {
  const Icon: Icon | null =
    typeof intensity === 'string' ? Chips[type](intensity) : null;

  return (
    <button
      className={` flex content-center items-center justify-center space-x-1.5 rounded-md px-1`}
    >
      {Icon && <Icon className="h-3 w-3" />}
    </button>
  );
};

export default Chip;
