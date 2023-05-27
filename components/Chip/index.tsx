import { FC } from 'react';
import { ChipFunc, ChipType, IntensityType, TChips } from './Chip.type';
import { Icon } from '@/components/Icon/icon.type';
import Icons from '@/components//Icon';

export interface ChipProps {
  type: ChipType;
  intensity?: IntensityType;
}
const intensitySelector: ChipFunc = (intensity) => {
  if (!intensity) return null;

  return Icons[intensity];
};

export const Chips: TChips = {
  Carb: intensitySelector,
  Fat: intensitySelector,
  Protein: intensitySelector,
  Hug: () => Icons['more'],
  Vegetarian: () => null,
};

const Chip: FC<ChipProps> = (props) => {
  const Icon: Icon | null = Chips[props.type](props.intensity);

  return (
    <button
      className={` flex content-center items-center justify-center space-x-1.5 rounded-md px-1`}
    >
      {Icon && <Icon className="h-3 w-3" />}
    </button>
  );
};

export default Chip;
