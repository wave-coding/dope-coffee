import { HomeBanner } from './components';
import FilterFormContainer from './components/FilterFromContainer';

const Header = () => {
  return (
    <header className="top-bar w-full">
      <FilterFormContainer />
      <HomeBanner />
    </header>
  );
};

export default Header;
