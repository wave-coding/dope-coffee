import { Banner, Button, Card, Input } from '@/components';
import { Popular, RecentOrders } from './components';

const getHome = () => {
  const cards = Array(10).fill(<Card />);

  return (
    <>
      <div className="container m-auto flex flex-col">
        <header className="top-bar w-full">
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
          <div className="home-banner">
            <div className="w-full">
              <Banner />
            </div>
          </div>
        </header>
        <Popular cards={cards} />
        <RecentOrders cards={cards} />
      </div>
    </>
  );
};

export default getHome;
