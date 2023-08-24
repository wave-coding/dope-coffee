'use client';
import { FC, HTMLAttributes } from 'react';
import Icons from '@/components/Icon';
import { Icon, IconNames, IconProps } from '@/components/Icon/icon.type';
import clsx from 'clsx';

export interface IconButtonProps extends HTMLAttributes<HTMLOrSVGElement> {
  iconName: IconNames;
  iconProps?: IconProps;
}

const IconButton: FC<IconButtonProps> = ({
  iconName,
  iconProps,
  className,
}) => {
  const Icon: Icon = Icons[iconName];
  return (
    <Icon
      viewBox="0 0 24 24"
      className={clsx('h-full w-10/12 fill-neutral-500', className)}
      {...iconProps}
    />
  );
};

export default IconButton;
