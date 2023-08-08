'use client';
import { FC } from 'react';
import Icons from '@/components/Icon';
import { Icon, IconNames, IconProps } from '@/components/Icon/icon.type';
import Link from 'next/link';

interface IconButtonProps {
  iconName: IconNames;
  iconProps?: IconProps;
  classNames?: string;
  href: string;
}

const IconButton: FC<IconButtonProps> = ({
  iconName,
  href,
  classNames,
  iconProps,
}) => {
  const className = `flex w-2/12 h-full content-center items-center justify-center rounded-lg p-1 py-2 text-body-md ${classNames}`;
  const Icon: Icon = Icons[iconName];
  return (
    <Link href={href} className={className}>
      <Icon
        viewBox="0 0 24 24"
        className="h-full w-10/12 fill-neutral-500"
        {...iconProps}
      />
    </Link>
  );
};

export default IconButton;
