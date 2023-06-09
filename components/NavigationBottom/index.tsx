'use client';
import { FC, useState } from 'react';
import { Icons } from '@/components/';
import { IconNames } from '../Icon/icon.type';

interface NavigationItem {
  icon: IconNames;
  activeIcon: IconNames;
  title: string;
}

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
      className={`svg mb-1 fill-color-neutral/50 transition-all ease-linear hover:transition-all group-hover:fill-color-three ${
        isActive ? 'fill-color-three' : ''
      } `}
    />
  );
};

const NavigationBottom: FC = () => {
  const [active, setActive] = useState<null | NavigationItem>(null);
  const [hover, setHover] = useState<null | NavigationItem>(null);

  return (
    <nav className="flex items-baseline justify-around bg-white py-1">
      {menuItems.map((item, index) => {
        const { activeIcon, icon, title } = item;
        const isCurrentItemActive = item === active;
        const isCurrentItemHover = Boolean(hover) && item === hover;

        return (
          <div
            className=" group flex w-full flex-col items-center hover:cursor-pointer"
            key={index}
            onClick={() => setActive(item)}
            onMouseEnter={() => setHover(item)}
            onMouseLeave={() => setHover(null)}
          >
            <div className="flex w-2/5 flex-col items-center">
              <NavIcon
                isActive={isCurrentItemActive || isCurrentItemHover}
                activeIcon={activeIcon}
                icon={icon}
              />
              <span
                className={`text-label-md text-color-neutral/50 transition-all ease-linear hover:transition-all group-hover:text-color-neutral/90  ${
                  isCurrentItemActive ? 'text-color-neutral/90' : ''
                }`}
              >
                {title}
              </span>
            </div>
          </div>
        );
      })}
    </nav>
  );
};

export default NavigationBottom;
