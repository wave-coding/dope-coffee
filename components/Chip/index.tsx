import { FC } from 'react';
import { clsx } from 'clsx';
import { ChipFunc, ChipType, IntensityType, ChipRecords } from './Chip.type';
import { Icon } from '@/components/Icon/icon.type';
import Icons from '@/components/Icon';
import { COLOR_VARIANTS } from '@/shared';

export interface ChipProps {
  type: ChipType;
  intensity?: IntensityType | null;
}
const intensitySelector: ChipFunc = (intensity = null) => {
  return intensity ? Icons[intensity] : null;
};

export const Chips: ChipRecords = {
  Carb: intensitySelector,
  Fat: intensitySelector,
  Protein: intensitySelector,
  Hug: () => Icons['more'],
  Vegetarian: () => null,
};

const getIconByChipType = ({
  type,
  intensity = null,
}: ChipProps): Icon | null => {
  return typeof intensity === 'string' ? Chips?.[type]?.(intensity) : null;
};

const Chip: FC<ChipProps> = ({ type, intensity = null }) => {
  const Icon: Icon | null = getIconByChipType({ type, intensity });

  const buttonClass = `${COLOR_VARIANTS[type]} inline-flex items-center rounded-md px-1 text-white`;
  const spanClass = `${clsx(type !== 'Vegetarian' && 'ml-1')}  text-label-sm`;

  return (
    <button className={buttonClass}>
      {Icon && <Icon fill="white" className="h-3 w-3 align-middle" />}
      {type === 'Hug' ? null : <span className={spanClass}>{type}</span>}
    </button>
  );
};

export default Chip;
