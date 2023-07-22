import { FilterButton, FilterForm } from './components';

const FilterFormContainer = () => {
  return (
    <div className="my-4 flex w-full justify-between gap-3">
      <FilterForm />
      <FilterButton />
    </div>
  );
};

export default FilterFormContainer;
