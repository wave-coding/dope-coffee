'use client';
import { FC, useState } from 'react';
import { Icons } from '@/components/';
import { IconNames } from '../Icon/icon.type';
import { clsx } from 'clsx';
import { SetStateAction } from 'react';
import { Dispatch } from 'react';

interface NavigationItem {
  icon: IconNames;
  activeIcon: IconNames;
  title: string;
}

type NavigationState = {
  active: NavigationItem | null;
  hover: NavigationItem | null;
};

const menuItems: NavigationItem[] = [
  {
    icon: 'home-outline',
    activeIcon: 'home',
    title: 'Home',
  },
  {
    icon: 'location-outline',
    activeIcon: 'location',
    title: 'Location',
  },
  {
    icon: 'shopping-card-outline',
    activeIcon: 'shopping-card',
    title: 'Basket',
  },
  {
    icon: 'profile-outline',
    activeIcon: 'profile',
    title: 'Profile',
  },
];

interface NavIconProps {
  activeIcon: IconNames;
  icon: IconNames;
  isActive: boolean;
}

const NavIcon: FC<NavIconProps> = ({ activeIcon, icon, isActive }) => {
  const Icon = isActive ? Icons[activeIcon] : Icons[icon];

  return (
    <Icon
      className={`svg mb-1 fill-color-neutral/50 transition-all ease-linear hover:transition-all group-hover:fill-color-three ${clsx(
        isActive && 'fill-color-three'
      )} `}
    />
  );
};

interface GetNavItemHandlersInput {
  item: NavigationItem;
  state: NavigationState;
  stateHandler: Dispatch<SetStateAction<NavigationState>>;
}

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

interface NavItemProps {
  isCurrentItemActive: boolean;
  isCurrentItemHover: boolean;
  setState: Dispatch<SetStateAction<NavigationState>>;
  item: NavigationItem;
  state: NavigationState;
}

interface NavItemTitleProps {
  isCurrentItemActive: boolean;
  title: string;
}

const NavItemTitle: FC<NavItemTitleProps> = ({
  title,
  isCurrentItemActive,
}) => {
  return (
    <span
      className={clsx({
        'text-label-md text-color-neutral/50 transition-all ease-linear hover:transition-all group-hover:text-color-neutral/90':
          true,
        'text-color-neutral/90': isCurrentItemActive,
      })}
    >
      {title}
    </span>
  );
};

interface NavItemContentProps {
  isCurrentItemActive: boolean;
  isCurrentItemHover: boolean;
  item: NavigationItem;
}

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
    <div className="flex w-2/5 flex-col items-center">
      <NavItemContent {...props} />
    </div>
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
    <div
      className="group flex w-full flex-col items-center hover:cursor-pointer"
      {...handlers}
    >
      <NavItemContentContainer
        {...{ item, isCurrentItemActive, isCurrentItemHover }}
      />
    </div>
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

interface MenuItemsMapperProps {
  item: NavigationItem;
  index: number;
  state: NavigationState;
  setState: Dispatch<SetStateAction<NavigationState>>;
}

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
    <nav className="flex items-baseline justify-around bg-white py-1">
      {menuItems.map((item, index) =>
        menuItemsMapper({ item, index, state, setState })
      )}
    </nav>
  );
};

export default NavigationBottom;
