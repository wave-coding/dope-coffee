import { FC, HTMLAttributes } from 'react';
import GoBackTopBar from '@/components/GoBackTopBar';
import Button from '../Button';
import clsx from 'clsx';

interface GoBackTopBarFilterProps extends HTMLAttributes<HTMLDivElement> {
  href: string;
}
const GoBackTopBarFilter: FC<GoBackTopBarFilterProps> = ({
  className,
  href,
}) => {
  const children = (
    <div className="z-10 flex h-max w-1/5">
      <Button
        type="primary"
        iconProps={{ viewBox: '2 -2 16 24' }}
        iconName="filter"
        text="Filter"
        classNames="justify-evenly py-3"
      />
    </div>
  );

  return (
    <GoBackTopBar className={clsx('justify-end', className)}>
      {children}
    </GoBackTopBar>
  );
};

export default GoBackTopBarFilter;
