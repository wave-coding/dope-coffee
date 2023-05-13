import icons, { ISVGIcon, iconNames } from './icons';

interface IconProps {
  name: iconNames;
  color: string;
  size: number;
}
const Icon = ({ name, color, size }: IconProps) => {
  const icon: ISVGIcon = icons[name];
  if (!icon) return null;

  return (
    <div className="container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size} // added size here
        height={size} // added size here
        fill={color} // added color here
      >
        {icon.path.map((p, index) => (
          <path key={index} d={p.d}></path>
        ))}
      </svg>
    </div>
  );
};

export default Icon;
