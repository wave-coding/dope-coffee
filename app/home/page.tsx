import { Banner, Button, Card, Input, SwiperSlider } from '@/components';
import Link from 'next/link';

const getHome = () => {
  // eslint-disable-next-line react/jsx-key
  const cards = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />];
  return (
    <div className="container m-auto flex flex-col">
      <header className="top-bar w-full">
        {/* search form */}
        <div className="my-2 flex w-full justify-between gap-3">
          <div className="flex w-5/6">
            <Input />
          </div>
          <div className="flex w-1/6">
            <div className="h-full w-full">
              <Button type="primary" hasStar={false} text="Filter" />
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="w-full">
            <Banner />
          </div>
        </div>
      </header>
      <div className="popular mt-8">
        <header className="mb-2 flex items-center justify-between">
          <h2 className="text-headline-lg text-color-neutral/90">Popular</h2>
          <Link className="text-body-md text-color-neutral/50" href={''}>
            See More
          </Link>
        </header>
        <div className="">
          <SwiperSlider
            configs={{
              slidesPerView: 2,
              spaceBetween: 10,
              pagination: false,
              navigation: true,
            }}
            hasPaddingBottom={false}
            items={cards}
          />
        </div>
      </div>
      <div className="recent-orders mt-8">
        <header className="mb-2 flex items-center justify-between">
          <h2 className="text-headline-lg text-color-neutral/90">
            Recent Orders
          </h2>
        </header>
        <div className="">
          <SwiperSlider
            configs={{
              slidesPerView: 2,
              spaceBetween: 10,
              pagination: false,
              navigation: true,
            }}
            hasPaddingBottom={false}
            items={cards}
          />
        </div>
      </div>
    </div>
  );
};

export default getHome;
