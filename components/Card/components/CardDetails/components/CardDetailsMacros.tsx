import { Button, Icon } from '@/components';
import { ButtonType } from '@/types';
import { FC } from 'react';

interface CardDetailsMicrosProps {
  micros: ButtonType[];
}

const CardDetailsMicros: FC<CardDetailsMicrosProps> = ({ micros }) => {
  return (
    <div className="flex items-center space-x-1 text-label-sm text-white">
      {micros.map((micro: ButtonType, index) => (
        <Button key={index} type={micro}>
          <Icon name="search-normal" color="black" size={15} />
        </Button>
      ))}
    </div>
  );
};

export default CardDetailsMicros;
