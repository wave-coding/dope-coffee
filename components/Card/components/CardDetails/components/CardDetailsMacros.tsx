import { FC } from 'react';
import Chip, { ChipProps } from '@/components/Chip';

interface CardDetailsMacrosProps {
  macros: ChipProps[];
}

const CardDetailsMacros: FC<CardDetailsMacrosProps> = ({ macros }) => {
  return (
    <div className="flex gap-x-1 text-white">
      {macros.map((micro: ChipProps, index) => (
        <Chip {...micro} key={index} />
      ))}
    </div>
  );
};

export default CardDetailsMacros;
