import { FC } from 'react';
import IconButton, { IconButtonProps } from '../IconButton';
import Link from 'next/link';

interface GoBackButtonProps extends IconButtonProps {
  classNames?: string;
  href: string;
}

const GoBackButton: FC<GoBackButtonProps> = ({
  iconName,
  href,
  classNames,
  iconProps,
}) => {
  const className = `flex w-2/12 h-full content-center items-center justify-center rounded-lg p-1 py-2 text-body-md ${classNames}`;
  return (
    <Link href={href} className={className}>
      <IconButton iconName={iconName} {...iconProps} />
    </Link>
  );
};

export default GoBackButton;
