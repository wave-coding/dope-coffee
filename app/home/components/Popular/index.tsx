import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { SwiperSlider } from '@/components';

interface RecentOrdersProps {
  cards: ReactNode[];
}

const RecentOrders: FC<RecentOrdersProps> = ({ cards }) => {
  return (
    <div className="popular mt-5">
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
          items={cards}
        />
      </div>
    </div>
  );
};

export default RecentOrders;
