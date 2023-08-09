'use client';
import { FC } from 'react';
import Icons from '@/components/Icon';
import { Icon, IconNames, IconProps } from '@/components/Icon/icon.type';

export interface IconButtonProps {
  iconName: IconNames;
  iconProps?: IconProps;
}

const IconButton: FC<IconButtonProps> = ({ iconName, iconProps }) => {
  const Icon: Icon = Icons[iconName];
  return (
    <Icon
      viewBox="0 0 24 24"
      className="h-full w-10/12 fill-neutral-500"
      {...iconProps}
    />
  );
};

export default IconButton;
