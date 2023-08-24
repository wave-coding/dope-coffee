'use client';
import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperProps } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

// import css files
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/app/globals.css';

export type SwiperConfigs = SwiperProps & SwiperOptions;

interface SwiperSliderProps {
  items: ReactNode[];
  configs?: SwiperConfigs;
  className?: string;
}

const SWIPER_CONFIGS: SwiperConfigs = {
  modules: [Pagination, Navigation, Scrollbar],
  slidesPerView: 1,
  pagination: { clickable: true },
  scrollbar: { draggable: true },
};

const SwiperSlider: FC<SwiperSliderProps> = ({ items, configs, className }) => {
  const settings: SwiperConfigs = {
    ...SWIPER_CONFIGS,
    ...configs,
  };

  return (
    <div className="h-full">
      <Swiper className={clsx('h-full', className)} {...settings}>
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
