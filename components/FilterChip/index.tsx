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

const FilterChipContainer: FC<ChipMicroType> = (props) => {
  const [enabled, setEnabled] = useState(false);
  const className = clsx(
    'mr-1',
    'cursor-pointer',
    'justify-center',
    'rounded-lg',
    'border',
    'border-color-neutral/5',
    'p-2',
    'text-neutral-800',
    {
      'border-color-three': enabled,
      'bg-white': enabled,
    }
  );

  return (
    <div
      onClick={() => {
        setEnabled(!enabled);
      }}
      className={className}
    >
      <FilterChipText {...props} />
    </div>
  );
};

const FilterChip: FC<ChipMicroType> = (props) => {
  return <FilterChipContainer {...props} />;
};

export default FilterChip;
