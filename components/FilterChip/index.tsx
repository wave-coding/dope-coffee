'use client';
import { FC, useState } from 'react';
import { clsx } from 'clsx';
import { capitalizeFirstLetter } from '@/utils';
import { ChipMicroType } from '@/types';

const FilterChipText: FC<ChipMicroType> = ({ type, intensity }) => {
  const combinedText = `${intensity ?? ''} ${type}`;
  const text = capitalizeFirstLetter(combinedText);

  return <h3 className="body-lg">{text}</h3>;
};

type UseEnableType = (defaultValue: boolean) => {
  enabled: boolean;
  toggleEnabled: () => void;
};

const useEnable: UseEnableType = (defaultValue: boolean) => {
  const [enabled, setEnabled] = useState(defaultValue);

  const toggleEnabled = () => {
    setEnabled(!enabled);
  };

  return {
    enabled,
    toggleEnabled,
  };
};

const FilterChipContainer: FC<ChipMicroType> = ({ className, ...props }) => {
  const { enabled, toggleEnabled } = useEnable(false);
  const classNames = clsx(
    'mr-1',
    'cursor-pointer',
    'justify-center',
    'rounded-lg',
    'border',
    'border-color-neutral/5',
    'p-2',
    'text-neutral-800',
    enabled && 'border-color-three bg-white',
    className
  );

  return (
    <div onClick={toggleEnabled} className={classNames}>
      <FilterChipText {...props} />
    </div>
  );
};

const FilterChip: FC<ChipMicroType> = (props) => {
  return <FilterChipContainer {...props} />;
};

export default FilterChip;
