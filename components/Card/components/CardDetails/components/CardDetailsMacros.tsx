import { FC } from 'react';
import { Button } from '@/components';
import Icons from '@/components/Icon/';
import { ButtonType } from '@/types';

interface CardDetailsMicrosProps {
  micros: ButtonType[];
}

const CardDetailsMicros: FC<CardDetailsMicrosProps> = ({ micros }) => {
  const Icon = Icons['more'];

  return (
    <div className="flex items-center space-x-1 text-label-sm text-white">
      {micros.map((micro: ButtonType, index) => (
        <Button key={index} type={micro}>
          <Icon className="h-3 w-3" />
        </Button>
      ))}
    </div>
  );
};

export default CardDetailsMicros;
