import { FC, HTMLAttributes } from 'react';
import GoBackTopBar from '@/components/GoBackTopBar';
import clsx from 'clsx';

interface GoBackTopBarTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}
const Title: FC<GoBackTopBarTitleProps> = ({ title }) => {
  return <h1 className="text-headline-md">{title}</h1>;
};

const GoBackTopBarTitle: FC<GoBackTopBarTitleProps> = ({
  className,
  ...props
}) => {
  const children = <Title {...props} />;

  return (
    <GoBackTopBar className={clsx('justify-center', className)}>
      {children}
    </GoBackTopBar>
  );
};

export default GoBackTopBarTitle;
