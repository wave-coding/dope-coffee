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

export const NavigationBottom: FC = () => {
  const [active, setActive] = useState<null | NavigationItem>(null);
  const [hover, setHover] = useState<null | NavigationItem>(null);

  return (
    <nav className="flex items-baseline justify-around bg-white py-1">
      {menuItems.map((item, index) => {
        const { activeIcon, icon, title } = item;
        const isCurrentItemActive = active && item === active;
        const Icon =
          isCurrentItemActive || (hover && item === hover)
            ? Icons[activeIcon]
            : Icons[icon];
        return (
          <div
            className=" group flex w-full flex-col items-center hover:cursor-pointer"
            key={index}
            onClick={() => setActive(item)}
            onMouseEnter={() => setHover(item)}
            onMouseLeave={() => setHover(null)}
          >
            <div className="flex w-2/5 flex-col items-center">
              <Icon
                className={`svg mb-1 fill-color-neutral/50 group-hover:fill-color-three ${
                  isCurrentItemActive ? 'fill-color-three' : ''
                }`}
              />
              <span
                className={`text-label-md text-color-neutral/50 group-hover:text-color-neutral/90 ${
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
