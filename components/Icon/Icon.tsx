import { FC } from 'react';
import { SVG, SVGIcon, iconNames } from './icon.type';
import icons from './icons';

interface IconProps {
  name: iconNames;
  color: string;
  size: number;
}

const Icon: FC<IconProps> = ({ name, color, size }) => {
  const icon: SVGIcon = icons[name];
  if (!icon) return null;

  return (
    <i className="flex">
      <svg
        className="flex"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size} // added size here
        height={size} // added size here
        fill={color} // added color here
      >
        {icon.path.map((p: SVG, index) => (
          <path key={index} d={p.d} stroke={p?.stroke ? color : ''}></path>
        ))}
      </svg>
    </i>
  );
};

export default Icon;
