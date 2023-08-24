import { FC, HTMLAttributes } from 'react';
import { ChipMicroType } from '@/types';
import CardDetailsMacros from '@/components/Card/components/CardDetails/components/CardDetailsMacros';
import Icons from '../Icon';
import clsx from 'clsx';

interface CardRestaurantLocationProps extends HTMLAttributes<HTMLDivElement> {
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
    <div className="flex w-full items-center">
      {Array.from({ length: count }, (_, index) => {
        const scoreMinusIndex = score - index;
        if (scoreMinusIndex > 0 && scoreMinusIndex < 1) {
          return (
            <Icon
              className="fill-color-star stroke-color-star"
              key={index}
              strokeWidth={1}
              viewBox="-4 -2 24 24"
              end-percentage={scoreMinusIndex * 100}
              stopColor="#FFAE5F"
              linear-gradient-last-stop-color="transparent"
              linear-gradient-stop-color="#FFAE5F"
            />
          );
        } else {
          return (
            <Icon
              viewBox="-4 -2 24 24"
              key={index}
              fill="#FFAE5F"
              stroke="#FFAE5F"
              strokeWidth={1.3}
            />
          );
        }
      })}
    </div>
  );
};

const CardRestaurantLocationHeadline: FC<
  Pick<CardRestaurantLocationProps, 'name'>
> = ({ name }) => {
  const Icon = Icons['filled-star'];
  return (
    <div className="title flex items-center justify-between">
      <h2 className="mb-1 mt-1 text-headline-lg">{name}</h2>
      <div className="flex w-1/6">
        <Icon
          viewBox="-4 -4 24 24"
          fill="transparent"
          className="stroke-white"
        />
      </div>
    </div>
  );
};

const CardRestaurantLocationType: FC<
  Pick<CardRestaurantLocationProps, 'type'>
> = ({ type }) => {
  return <h3 className="mb-1 mt-1 text-headline-md">{type}</h3>;
};

const CardRestaurantLocationReview: FC<
  Pick<CardRestaurantLocationProps, 'reviewsCount' | 'score'>
> = ({ reviewsCount, score }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="stars w-1/3">
        <Stars score={score} />
      </div>
      <div className="w-2/3">
        <Scores {...{ reviewsCount, score }} />
      </div>
    </div>
  );
};

const Scores: FC<
  Pick<CardRestaurantLocationProps, 'score' | 'reviewsCount'>
> = ({ score, reviewsCount }) => {
  return (
    <>
      {score} ({reviewsCount} Reviews){' '}
    </>
  );
};

const CardRestaurantLocationDetails: FC<CardRestaurantLocationProps> = ({
  name,
  type,
  score,
  macros,
  reviewsCount,
}) => {
  return (
    <>
      <CardRestaurantLocationHeadline name={name} />
      <CardRestaurantLocationType type={type} />
      <CardRestaurantLocationReview {...{ score, reviewsCount }} />
      <>
        <CardDetailsMacros macros={macros} />
      </>
    </>
  );
};

const CardRestaurantLocation: FC<CardRestaurantLocationProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'flex w-auto flex-col overflow-hidden rounded-md bg-color-three p-2 pl-3 text-white shadow-sm shadow-color-neutral/20',
        className
      )}
    >
      <CardRestaurantLocationDetails {...props} />
    </div>
  );
};

export default CardRestaurantLocation;
