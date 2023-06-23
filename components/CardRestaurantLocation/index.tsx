import { FC } from 'react';
import { ChipMicroType } from '@/types';
import CardDetailsMacros from '@/components/Card/components/CardDetails/components/CardDetailsMacros';
import Icons from '../Icon';

interface CardRestaurantLocationProps {
  name: string;
  type: string; // asian, european, american, ...
  score: number;
  macros: ChipMicroType[];
  reviewsCount: string;
}

interface StarsProps {
  count?: number;
  score: number;
}

const Stars: FC<StarsProps> = ({ count = 5, score }) => {
  const Icon = Icons['filled-star'];
  return (
    <div className="stars flex">
      {Array.from({ length: count }, (_, index) => (
        <Icon key={index} fill="#FFAE5F" width={24} height={24} />
      ))}
    </div>
  );
};

const CardRestaurantLocation: FC<CardRestaurantLocationProps> = ({
  name,
  type,
  score,
  macros,
  reviewsCount,
}) => {
  return (
    <div className="flex w-auto flex-col overflow-hidden rounded-md bg-color-three p-2 pl-3 text-white">
      <h2 className="mb-1 mt-1 text-headline-lg">{name}</h2>
      <h3 className="mb-1 mt-1 text-headline-md">{type}</h3>
      <div className="flex">
        <Stars score={score} />
        <div>
          {score} ({reviewsCount} Reviews)
        </div>
      </div>
      <div>
        <CardDetailsMacros macros={macros} />
      </div>
    </div>
  );
};

export default CardRestaurantLocation;
