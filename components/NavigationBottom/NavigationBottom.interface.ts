import { SetStateAction, Dispatch } from 'react';
import { IconNames } from '@/components/Icon/icon.type';
import { NavigationState } from './NavigationBottom.type';

export interface NavigationItem {
  icon: IconNames;
  activeIcon: IconNames;
  title: string;
  href: string;
}

export interface NavIconProps {
  activeIcon: IconNames;
  icon: IconNames;
  isActive: boolean;
}

export interface GetNavItemHandlersInput {
  item: NavigationItem;
  state: NavigationState;
  stateHandler: Dispatch<SetStateAction<NavigationState>>;
}

export interface NavItemProps {
  isCurrentItemActive: boolean;
  isCurrentItemHover: boolean;
  setState: Dispatch<SetStateAction<NavigationState>>;
  item: NavigationItem;
  state: NavigationState;
}

export interface NavItemTitleProps {
  isCurrentItemActive: boolean;
  title: string;
}

export interface NavItemContentProps {
  isCurrentItemActive: boolean;
  isCurrentItemHover: boolean;
  item: NavigationItem;
}

export interface MenuItemsMapperProps {
  item: NavigationItem;
  index: number;
  state: NavigationState;
  setState: Dispatch<SetStateAction<NavigationState>>;
}
