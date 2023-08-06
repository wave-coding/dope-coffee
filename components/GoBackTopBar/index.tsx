import { FC, ReactNode } from 'react';
import Arrow from '@/components/Arrow';

interface GoBackTopBarProps {
  children: ReactNode;
  className: string;
}

const ArrowSign: FC = () => {
  return (
    <div className="absolute left-0">
      <Arrow href="/" type="arrow-left" classNames="bg-white" />
    </div>
  );
};

const GoBackTopBar: FC<GoBackTopBarProps> = ({ children, className }) => {
  const classNames = `relative flex items-center ${className}`;

  return (
    <div className={classNames}>
      <ArrowSign />
      {children}
    </div>
  );
};

export default GoBackTopBar;
