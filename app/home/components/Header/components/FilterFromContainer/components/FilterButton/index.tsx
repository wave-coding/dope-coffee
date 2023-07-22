import { Button } from '@/components';

const FilterButton = () => {
  return (
    <div className="flex w-2/12">
      <div className="h-full w-full">
        <Button
          type="primary"
          iconProps={{ viewBox: '2 -2 16 24' }}
          iconName="filter"
          text="Filter"
          classNames="justify-evenly py-2"
        />
      </div>
    </div>
  );
};

export default FilterButton;
