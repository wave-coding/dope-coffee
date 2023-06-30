'use client';
import { FC, useState } from 'react';
import Icons from '@/components/Icon';

interface SelectProps {
  options: string[];
}

const Select: FC<SelectProps> = ({ options }) => {
  const Icon = Icons['filled-star'];
  const [selectedItem, setSelectedItem] = useState('Select...');
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setShowDropDown(!showDropDown);
        }}
        className="flex h-full items-center justify-between overflow-hidden rounded-md bg-white px-2 text-gray-400"
      >
        <div className="w-full appearance-none  px-3 py-3 text-body-md leading-tight text-color-neutral/90 focus:bg-white focus:outline-none active:outline-none">
          {selectedItem}
        </div>

        <div className="flex h-full justify-end">
          <Icon
            viewBox="-8 -5 24 24"
            className="w-2/12 cursor-pointer fill-transparent stroke-color-neutral/40"
          />
        </div>
      </div>
      <div className={!showDropDown ? 'hidden' : ''}>
        <ul className="rounded-md bg-white text-color-neutral/90">
          {options.map((option, index) => {
            return (
              <li
                className="mb-1 cursor-pointer p-1 px-5 hover:bg-neutral-100"
                key={index}
                onClick={(event) => {
                  setSelectedItem(event.currentTarget.innerText);
                  setShowDropDown(false);
                }}
              >
                {option}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Select;
