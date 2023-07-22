import { Card } from '@/components';
import { Popular, RecentOrders } from './components';
import Header from './components/Header';

const getHome = () => {
  const cards = Array(10).fill(<Card />);

  return (
    <>
      <div className="container m-auto flex flex-col">
        <Header />
        <Popular cards={cards} />
        <RecentOrders cards={cards} />
      </div>
    </>
  );
};

export default getHome;
