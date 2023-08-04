import { FC } from 'react';
import GoBackTopBar from '@/components/GoBackTopBar';
import Button from '../Button';

interface GoBackTopBarFilterProps {
  href: string;
}
const GoBackTopBarFilter: FC<GoBackTopBarFilterProps> = ({ href }) => {
  console.log(href);
  const children = (
    <Button
      type="primary"
      iconProps={{ viewBox: '2 -2 16 24' }}
      iconName="filter"
      text="Filter"
      classNames="justify-evenly"
    />
  );

  const className = 'justify-end';

  return <GoBackTopBar className={className}>{children}</GoBackTopBar>;
};

export default GoBackTopBarFilter;
