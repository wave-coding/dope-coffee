import { FC } from 'react';
import GoBackTopBar from '@/components/GoBackTopBar';

interface GoBackTopBarTitleProps {
  title: string;
}
const Title: FC<GoBackTopBarTitleProps> = ({ title }) => {
  return <h1 className="text-headline-md">{title}</h1>;
};

const GoBackTopBarTitle: FC<GoBackTopBarTitleProps> = (props) => {
  const children = <Title {...props} />;
  const className = 'justify-center';

  return <GoBackTopBar className={className}>{children}</GoBackTopBar>;
};

export default GoBackTopBarTitle;
