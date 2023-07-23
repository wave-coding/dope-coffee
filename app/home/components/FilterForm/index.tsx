import { Button, Input } from '@/components';

const FilterForm = () => {
  return (
    <div className="my-2 flex w-full justify-between gap-3">
      <div className="flex w-10/12">
        <Input placeHolder="Search by place or item" />
      </div>
      <div className="flex w-2/12">
        <div className="h-full w-full">
          <Button
            type="primary"
            iconProps={{ viewBox: '2 -2 16 24' }}
            iconName="filter"
            text="Filter"
            classNames="justify-evenly"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
