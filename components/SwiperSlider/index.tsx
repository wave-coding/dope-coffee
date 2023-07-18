'use client';
import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperProps } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/app/globals.css';

export type SwiperConfigs = SwiperProps & SwiperOptions;

interface SwiperSliderProps {
  items: ReactNode[];
  configs?: SwiperConfigs;
  hasPaddingBottom?: boolean;
}

const SWIPER_CONFIGS: SwiperConfigs = {
  modules: [Pagination, Navigation],
  slidesPerView: 1,
  pagination: { clickable: true },
  scrollbar: { draggable: true },
};

const SwiperSlider: FC<SwiperSliderProps> = ({
  items,
  configs,
  hasPaddingBottom = false,
}) => {
  const settings = {
    ...SWIPER_CONFIGS,
    ...configs,
  };

  const className = clsx({
    'pb-10': hasPaddingBottom,
  });

  return (
    <div>
      <Swiper className={className} {...settings}>
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
