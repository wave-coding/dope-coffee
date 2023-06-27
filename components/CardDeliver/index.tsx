import { FC } from 'react';
import Icons from '../Icon';
import { getStrokeAndFillColors } from '@/utils';

interface CardDeliverProps {
  fullName: string;
  phone: string;
  address: string;
  isActive?: boolean;
}

const CardDeliverUserDetails: FC<Omit<CardDeliverProps, 'isActive'>> = ({
  address,
  fullName,
  phone,
}) => {
  return (
    <>
      <h3>{fullName}</h3>
      <h4>{phone}</h4>
      <h5 className="mt-1">{address}</h5>
    </>
  );
};

const CardDeliverDetails: FC<Omit<CardDeliverProps, 'isActive'>> = (props) => {
  return (
    <>
      <h2 className="mb-1 text-body-lg text-neutral-900">Deliver to</h2>
      <CardDeliverUserDetails {...props} />
    </>
  );
};

const CardDeliverDetailsContainer: FC<Omit<CardDeliverProps, 'isActive'>> = (
  props
) => {
  return (
    <div className="text-label-sm text-neutral-500">
      <CardDeliverDetails {...props} />
    </div>
  );
};

const CardDeliverStar: FC<Pick<CardDeliverProps, 'isActive'>> = ({
  isActive,
}) => {
  const Icon = Icons['filled-star'];
  const { fill, stroke } = getStrokeAndFillColors(isActive);
  return (
    <>
      <Icon
        stroke={stroke}
        fill={fill}
        strokeWidth={0.9}
        viewBox="-2 -4 24 24"
        className="h-full w-1/2"
      />
    </>
  );
};

const CardDeliverStarContainer: FC<Pick<CardDeliverProps, 'isActive'>> = (
  props
) => {
  return (
    <div className="star flex w-1/5 content-center items-center justify-center">
      <CardDeliverStar {...props} />
    </div>
  );
};

const CardDeliver: FC<CardDeliverProps> = (props) => {
  return (
    <div className="flex flex-row rounded-md  py-3 shadow-sm shadow-color-neutral/20">
      <CardDeliverStarContainer {...props} />
      <CardDeliverDetailsContainer {...props} />
    </div>
  );
};

export default CardDeliver;
