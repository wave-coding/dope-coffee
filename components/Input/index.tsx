'use client';
import { ChangeEvent, ChangeEventHandler, FC, useState } from 'react';
import Icons from '@/components/Icon';

interface InputFieldProps {
  handler: (e: ChangeEvent<HTMLInputElement>) => void;
  input: string;
  placeHolder?: string;
}

interface CloseIconProps {
  handler: () => void;
  input: string;
}

interface InputContainerProps {
  clickHandler: () => void;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  input: string;
  placeHolder?: string;
}

const InputField: FC<InputFieldProps> = ({ handler, input, placeHolder }) => {
  return (
    <input
      name="input"
      onChange={handler}
      className="w-full appearance-none px-3 py-2 text-body-md leading-tight text-color-neutral/90 focus:bg-white focus:outline-none active:outline-none"
      value={input}
      placeholder={placeHolder}
    />
  );
};

const CloseIcon: FC<CloseIconProps> = ({ handler, input }) => {
  const Icon = Icons['close-circle'];

  return (
    <div className="flex h-full w-1/6 justify-end">
      {input?.length > 0 ? (
        <Icon
          onClick={handler}
          height={'100%'}
          width={'40%'}
          className="w-3/12 cursor-pointer"
        />
      ) : null}
    </div>
  );
};

const InputContainer: FC<InputContainerProps> = ({
  changeHandler,
  clickHandler,
  input,
  placeHolder,
}) => {
  return (
    <div className="flex h-full w-full items-center justify-between overflow-hidden rounded-md bg-white px-2 text-gray-400">
      <InputField
        handler={changeHandler}
        input={input}
        placeHolder={placeHolder}
      />
      <CloseIcon handler={clickHandler} input={input} />
    </div>
  );
};

type UseInputType = (defaultValue: string) => {
  input: string;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  handleClearClick: () => void;
};

const useInput: UseInputType = (defaultValue: string) => {
  const [input, setInput] = useState(defaultValue);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };

  const handleClearClick = () => {
    setInput('');
  };

  return {
    input,
    handleInputChange,
    handleClearClick,
  };
};

interface InputProps {
  placeHolder?: string;
}

const Input: FC<InputProps> = (props) => {
  const { input, handleClearClick, handleInputChange } = useInput('');

  return (
    <InputContainer
      changeHandler={handleInputChange}
      clickHandler={handleClearClick}
      input={input}
      {...props}
    />
  );
};

export default Input;
