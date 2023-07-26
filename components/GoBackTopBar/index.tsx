import Arrow from '@/components/Arrow';
import { FC } from 'react';

interface GoBackTopBarProps {
  title: string;
}

const ArrowSign: FC = () => {
  return (
    <div className="absolute left-0">
      <Arrow href="/" type="arrow-left" classNames="bg-white" />
    </div>
  );
};

const Title: FC<GoBackTopBarProps> = ({ title }) => {
  return <h1 className="text-headline-md">{title}</h1>;
};

const GoBackTopBar: FC<GoBackTopBarProps> = (props) => {
  return (
    <div className="relative mb-5 mt-2 flex items-center justify-center">
      <ArrowSign />
      <Title {...props} />
    </div>
  );
};

export default GoBackTopBar;
