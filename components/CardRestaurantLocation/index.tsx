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
      {Array.from({ length: count }, (_, index) => {
        const scoreMinusIndex = score - index;
        if (scoreMinusIndex > 0 && scoreMinusIndex < 1) {
          return (
            <Icon
              className="fill-color-star stroke-color-star"
              key={index}
              strokeWidth={1}
              width={24}
              height={24}
              endPercentage={scoreMinusIndex * 100}
              linearGradientStopColor="#FFAE5F"
              linearGradientLastStopColor="transparent"
            />
          );
        } else {
          return (
            <Icon
              key={index}
              fill="#FFAE5F"
              stroke="#FFAE5F"
              strokeWidth={1.3}
              width={24}
              height={24}
            />
          );
        }
      })}
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
  const Icon = Icons['filled-star'];
  return (
    <div className="flex w-auto flex-col overflow-hidden rounded-md bg-color-three p-2 pl-3 text-white">
      <div className="title flex">
        <h2 className="mb-1 mt-1 text-headline-lg">{name}</h2>
        <div className="flex w-1/6 flex-row items-center">
          <Icon fill="transparent" className="flex stroke-white" />
        </div>
      </div>
      <h3 className="mb-1 mt-1 text-headline-md">{type}</h3>
      <div className="flex items-center">
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
