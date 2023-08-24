import { FC, HTMLAttributes } from 'react';
import Icons from '@/components/Icon';
import { getStrokeAndFillColors } from '@/utils';
import clsx from 'clsx';

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  isActive: boolean;
  viewBox?: string;
}

const CardDeliverStar: FC<Pick<AccordionProps, 'isActive' | 'viewBox'>> = ({
  isActive,
  viewBox,
}) => {
  const Icon = Icons['filled-star'];
  const { fill, stroke } = getStrokeAndFillColors(isActive);
  return (
    <>
      <Icon
        stroke={stroke}
        fill={fill}
        strokeWidth={0.9}
        viewBox={viewBox}
        className="h-full"
      />
    </>
  );
};

const CardDeliverStarContainer: FC<
  Pick<AccordionProps, 'isActive' | 'viewBox'>
> = (props) => {
  return (
    <div className="star flex content-center items-center justify-center">
      <CardDeliverStar {...props} />
    </div>
  );
};

const AccordionDetails: FC<AccordionProps> = (props) => {
  return (
    <>
      <div className="flex w-1/6 flex-col justify-end">
        <CardDeliverStarContainer {...props} viewBox="-4 -3 24 24" />
      </div>
      <h1 className="text-left text-body-lg text-color-neutral/80">Name</h1>
    </>
  );
};

const AccordionDetailsContainer: FC<AccordionProps> = (props) => {
  return (
    <div className="flex w-full content-around items-center">
      <AccordionDetails {...props} />
    </div>
  );
};

const AccordionRightStarContainer: FC<AccordionProps> = (props) => {
  return (
    <div className="flex w-1/6 content-end items-center justify-end">
      <div className="w-3/5 justify-end">
        <CardDeliverStarContainer {...props} viewBox="-4 -4 24 24" />
      </div>
    </div>
  );
};
const Accordion: FC<AccordionProps> = ({ className, ...props }) => {
  return (
    <div
      className={clsx(
        'flex flex-row items-center justify-between rounded-md border px-2 py-0.5',
        className
      )}
    >
      <AccordionDetailsContainer {...props} />
      <AccordionRightStarContainer {...props} />
    </div>
  );
};

export default Accordion;
