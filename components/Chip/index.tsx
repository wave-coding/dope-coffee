import { FC } from 'react';
import { clsx } from 'clsx';
import { ChipFunc, ChipRecords } from './Chip.type';
import { Icon } from '@/components/Icon/icon.type';
import Icons from '@/components/Icon';
import { COLOR_VARIANTS } from '@/shared';
import { IntensityType, MacroType } from '@/types';

export interface ChipProps {
  type: MacroType;
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

const ChipContentText: FC<ChipProps> = ({ type }) => {
  const spanClass = clsx({
    'ml-1': type !== 'Vegetarian',
    'text-label-sm': true,
  });

  return (
    <>{type === 'Hug' ? null : <span className={spanClass}>{type}</span>}</>
  );
};

const ChipContentIcon: FC<ChipProps> = ({ type, intensity }) => {
  const Icon: Icon | null = getIconByChipType({ type, intensity });
  return <>{Icon && <Icon fill="white" className="h-5 w-5 align-middle" />}</>;
};

const ChipContent: FC<ChipProps> = (props) => {
  return (
    <>
      <ChipContentIcon {...props} />
      <ChipContentText {...props} />
    </>
  );
};

const ChipContainer: FC<ChipProps> = ({ type, intensity }) => {
  const buttonClass = `${COLOR_VARIANTS[type]} py-0.5 inline-flex items-center rounded-md px-2 text-white`;

  return (
    <button className={buttonClass}>
      <ChipContent {...{ intensity, type }} />
    </button>
  );
};

const Chip: FC<ChipProps> = (props) => {
  return <ChipContainer {...props} />;
};

export default Chip;
