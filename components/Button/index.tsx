'use client';
import { FC, useState } from 'react';
import Icons from '@/components/Icon';
import { IconNames, IconProps } from '@/components/Icon/icon.type';

const BUTTON_COLORS = {
  primary: {
    enabled: 'bg-color-three text-white',
    selected: 'bg-color-two text-white',
  },
  secondary: {
    enabled: 'bg-color-secondary-light text-white',
    selected: 'bg-color-secondary-dark text-white',
  },
  text: {
    enabled: 'bg-transparent text-color-neutral/30',
    selected: 'bg-transparent text-color-neutral/60',
  },
};

type ButtonTypes = 'primary' | 'secondary' | 'text';

interface ButtonProps {
  type: ButtonTypes;
  text: string;
  iconName?: IconNames;
  iconProps?: IconProps;
  classNames?: string;
}

const ButtonIcon: FC<Pick<ButtonProps, 'iconName' | 'iconProps'>> = ({
  iconName,
  iconProps,
}) => {
  const Icon = iconName ? Icons[iconName] : null;
  return (
    <>
      {Icon ? (
        <Icon
          className="w-2/12 fill-white"
          viewBox="0 1 33 24"
          {...iconProps}
        />
      ) : null}
    </>
  );
};

const ButtonText: FC<Pick<ButtonProps, 'text'>> = ({ text }) => {
  return <span className="mr-0">{text}</span>;
};

const ButtonContentContainer: FC<Omit<ButtonProps, 'type'>> = (props) => {
  return (
    <>
      <ButtonIcon {...props} />
      <ButtonText {...props} />
    </>
  );
};

const useButtonState = (initialState: boolean) => {
  const [selected, setSelected] = useState<boolean>(initialState);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  return {
    selected,
    toggleSelected,
  };
};

const Button: FC<ButtonProps> = ({ type, classNames, ...rest }) => {
  const color = BUTTON_COLORS[type];

  const { selected, toggleSelected } = useButtonState(false);

  const className = `flex w-full h-full content-center items-center justify-center rounded-md p-1 text-body-md ${
    color[selected ? 'selected' : 'enabled']
  } ${classNames}`;

  return (
    <button onClick={toggleSelected} className={className}>
      <ButtonContentContainer {...rest} />
    </button>
  );
};

export default Button;
