import Link from 'next/link';
import { ReactNode } from 'react';
import { SwiperSlider } from '@/components';

const RecentOrders = (cards: ReactNode[]) => {
  return (
    <div className="popular mt-8">
      <header className="mb-2 flex items-center justify-between">
        <h2 className="text-headline-lg text-color-neutral/90">Popular</h2>
        <Link className="text-body-md text-color-neutral/50" href={''}>
          See More
        </Link>
      </header>
      <div>
        <SwiperSlider
          configs={{
            slidesPerView: 2,
            spaceBetween: 10,
            pagination: false,
            grabCursor: true,
            style: {
              overflow: 'visible',
            },
          }}
          hasPaddingBottom={false}
          items={cards}
        />
      </div>
    </div>
  );
};

export default RecentOrders;
