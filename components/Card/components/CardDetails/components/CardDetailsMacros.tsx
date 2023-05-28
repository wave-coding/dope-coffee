import { FC } from 'react';
import Chip, { ChipProps } from '@/components/Chip';

interface CardDetailsMicrosProps {
  micros: ChipProps[];
}

const CardDetailsMicros: FC<CardDetailsMicrosProps> = ({ micros }) => {
  return (
    <div className="flex gap-x-1 text-white">
      {micros.map((micro: ChipProps, index) => (
        <Chip {...micro} key={index} />
      ))}
    </div>
  );
};

export default CardDetailsMicros;
