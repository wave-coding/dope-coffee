import { SVGProps } from 'react';

// Create interface extending SVGProps
export interface IconProps extends Partial<SVGProps<SVGSVGElement>> {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
}

export type Icon = (props: IconProps) => JSX.Element;

export type IconNames =
  | 'star'
  | 'bold-star'
  | 'search-normal'
  | 'close-circle'
  | 'home'
  | 'home-outline'
  | 'location'
  | 'location-outline'
  | 'shopping-card'
  | 'shopping-card-outline'
  | 'profile'
  | 'profile-outline'
  | 'high'
  | 'low'
  | 'more'
  | 'minus'
  | 'add'
  | 'filled-star';

export type IconRecords = Record<IconNames, Icon>;
