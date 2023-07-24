'use client';
import { FC, useState } from 'react';
import { clsx } from 'clsx';
import { Icons } from '@/components/';
import { NavigationState } from './NavigationBottom.type';
import {
  GetNavItemHandlersInput,
  MenuItemsMapperProps,
  NavIconProps,
  NavItemContentProps,
  NavItemProps,
  NavItemTitleProps,
  NavigationItem,
} from './NavigationBottom.interface';

import Link from 'next/link';

const menuItems: NavigationItem[] = [
  {
    icon: 'home-outline',
    activeIcon: 'home',
    title: 'Home',
    href: '/home',
  },
  {
    icon: 'location-outline',
    activeIcon: 'location',
    title: 'Location',
    href: '/location',
  },
  {
    icon: 'shopping-card-outline',
    activeIcon: 'shopping-card',
    title: 'Basket',
    href: '/basket',
  },
  {
    icon: 'profile-outline',
    activeIcon: 'profile',
    title: 'Profile',
    href: '/profile',
  },
];

const getNavItemHandlers = ({
  item,
  state,
  stateHandler,
}: GetNavItemHandlersInput) => {
  return {
    onClick: () => stateHandler({ ...state, active: item }),
    onMouseEnter: () => stateHandler({ ...state, hover: item }),
    onMouseLeave: () => stateHandler({ ...state, hover: null }),
  };
};

const NavIcon: FC<NavIconProps> = ({ activeIcon, icon, isActive }) => {
  const Icon = isActive ? Icons[activeIcon] : Icons[icon];

  return (
    <Icon
      className={`svg mb-1 h-1/2 w-1/2 fill-color-neutral/50 transition-all ease-linear hover:transition-all group-hover:fill-color-three ${clsx(
        isActive && 'fill-color-three'
      )} `}
    />
  );
};

const NavItemTitle: FC<NavItemTitleProps> = ({
  title,
  isCurrentItemActive,
}) => {
  return (
    <span
      className={clsx({
        'text-body-lg text-color-neutral/50 transition-all ease-linear hover:transition-all group-hover:text-color-neutral/90':
          true,
        'text-color-neutral/90': isCurrentItemActive,
      })}
    >
      {title}
    </span>
  );
};

const NavItemContent: FC<NavItemContentProps> = ({
  item,
  isCurrentItemHover,
  isCurrentItemActive,
}) => {
  const { title } = item;

  return (
    <>
      <NavIcon isActive={isCurrentItemActive || isCurrentItemHover} {...item} />
      <NavItemTitle {...{ title, isCurrentItemActive }} />
    </>
  );
};

const NavItemContentContainer: FC<NavItemContentProps> = (props) => {
  return (
    <>
      <NavItemContent {...props} />
    </>
  );
};

const NavItem: FC<NavItemProps> = ({
  isCurrentItemActive,
  isCurrentItemHover,
  setState,
  item,
  state,
}) => {
  const handlers = getNavItemHandlers({ item, state, stateHandler: setState });
  return (
    <Link
      className="group inline-flex flex-col items-center justify-center hover:cursor-pointer"
      {...handlers}
      href={item.href}
    >
      <NavItemContentContainer
        {...{ item, isCurrentItemActive, isCurrentItemHover }}
      />
    </Link>
  );
};

const getNavigationBottomState = ({
  item,
  state,
}: {
  item: NavigationItem;
  state: NavigationState;
}) => {
  const isCurrentItemActive = item === state?.active;
  const isCurrentItemHover = Boolean(state?.hover) && item === state?.hover;

  return {
    isCurrentItemActive,
    isCurrentItemHover,
  };
};

const menuItemsMapper: FC<MenuItemsMapperProps> = ({
  item,
  index,
  state,
  setState,
}) => {
  const navigationState = getNavigationBottomState({ item, state });
  return (
    <NavItem
      key={index}
      {...{
        ...navigationState,
        setState,
        state,
        item,
      }}
    />
  );
};

const NavigationBottom: FC = () => {
  const [state, setState] = useState<NavigationState>({
    active: null,
    hover: null,
  });

  return (
    <nav className="grid w-full max-w-2xl grid-cols-4">
      {menuItems.map((item, index) =>
        menuItemsMapper({ item, index, state, setState })
      )}
    </nav>
  );
};

export default NavigationBottom;
