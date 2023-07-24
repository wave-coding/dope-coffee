import { NavigationItem } from './NavigationBottom.interface';

export type NavigationState = {
  active: NavigationItem | null;
  hover: NavigationItem | null;
};
