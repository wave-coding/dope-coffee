import { SVGProps } from 'react';

// Create interface extending SVGProps
export interface IconProps extends Partial<SVGProps<SVGSVGElement>> {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
}

export type Icon = (props: IconProps) => JSX.Element;

export type iconNames =
  | 'star'
  | 'bold-star'
  | 'search-normal'
  | 'close-circle'
  | 'home'
  | 'location'
  | 'shopping-card'
  | 'profile'
  | 'high'
  | 'low'
  | 'more';

export type TIcons = Record<iconNames, Icon>;
