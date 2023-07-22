import { FC } from 'react';
import Button from '../Button';
import SwiperSlider from '../SwiperSlider';
import Link from 'next/link';

interface BannerProps {
  image?: string;
  title?: string;
  description?: string;
  link?: string;
}

const Banner: FC<BannerProps> = () => {
  const item = (
    <div className="flex w-full flex-col rounded-lg bg-color-dark px-6 py-4">
      <header className="mb-3">
        <h1 className="text-headline-lg">High protein Lunch</h1>
      </header>
      <div className="mb-3">
        <span className="text-body-md">
          Enjoy your break with <br />
          these high protein selection
        </span>
      </div>
      <Link className="w-fit" href={''}>
        <Button type="primary" text="Check them out" />
      </Link>
    </div>
  );

  const items = Array(3).fill(item);

  return (
    <SwiperSlider
      configs={{
        wrapperClass: 'banner',
        containerModifierClass: 'banner',
        className: 'banner',
      }}
      hasPaddingBottom={true}
      items={items}
    />
  );
};

export default Banner;
