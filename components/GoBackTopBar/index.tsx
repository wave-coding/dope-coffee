import { FC, ReactNode } from 'react';
import { GoBackButton } from '@/components';

interface GoBackTopBarProps {
  children: ReactNode;
  className: string;
}

const IconSign: FC = () => {
  return (
    <div className="absolute left-0">
      <GoBackButton href="/" iconName="arrow-left" className="bg-white" />
    </div>
  );
};

const GoBackTopBar: FC<GoBackTopBarProps> = ({ children, className }) => {
  const classNames = `relative flex items-center ${className}`;

  return (
    <div className={classNames}>
      <IconSign />
      {children}
    </div>
  );
};

export default GoBackTopBar;
