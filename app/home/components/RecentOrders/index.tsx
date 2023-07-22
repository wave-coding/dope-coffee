import { SwiperSlider } from '@/components';
import { FC, ReactNode } from 'react';

interface RecentOrdersProps {
  cards: ReactNode[];
}

const RecentOrders: FC<RecentOrdersProps> = ({ cards }) => {
  return (
    <div className="recent-orders mt-5">
      <header className="mb-2 flex items-center justify-between">
        <h2 className="text-headline-lg text-color-neutral/90">
          Recent Orders
        </h2>
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
              overflowX: 'unset',
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
