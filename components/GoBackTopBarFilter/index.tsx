import { FC } from 'react';
import GoBackTopBar from '@/components/GoBackTopBar';
import Button from '../Button';

interface GoBackTopBarFilterProps {
  href: string;
}
const GoBackTopBarFilter: FC<GoBackTopBarFilterProps> = ({ href }) => {
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

  const className = 'justify-end';

  return <GoBackTopBar className={className}>{children}</GoBackTopBar>;
};

export default GoBackTopBarFilter;
