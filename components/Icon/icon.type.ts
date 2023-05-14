interface Circle {
  cx: number;
  cy: number;
  r: number;
}

export interface SVG {
  d: string;
  viewBox?: string;
  fill?: string;
  stroke?: string;
  transform?: string;
  circle?: Circle;
  fillRule?: 'evenodd' | 'inherit' | 'nonzero' | undefined;
  clipRule?: 'evenodd' | 'inherit' | 'nonzero' | undefined;
  strokeLinejoin?: 'round';
  strokeLinecap?: 'round' | 'square';
  strokeWidth?: string;
  strokeMiterlimit?: string;
}

export interface SVGOption {
  viewBox?: string;
}

export interface SVGIcon {
  path: SVG[];
  options?: SVGOption;
}

export type iconNames = 'star' | 'bold-star' | 'search-normal';

export type TIcons = Record<iconNames, SVGIcon>;
