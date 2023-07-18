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
  const items = [
    // eslint-disable-next-line react/jsx-key
    <div className="flex w-full flex-col p-2">
      <header>
        <h1>High protein Lunch</h1>
      </header>
      <div>
        <span>Enjoy your break with these high protein selection </span>
      </div>
      <Link className="w-fit" href={''}>
        <Button hasStar={false} type="primary" text="Check them out" />
      </Link>
    </div>,
    // eslint-disable-next-line react/jsx-key
    <div className="flex w-full flex-col  p-2">
      <header>
        <h1>High protein Lunch</h1>
      </header>
      <div>
        <span>Enjoy your break with these high protein selection </span>
      </div>
      <Link className="w-fit" href={''}>
        <Button hasStar={false} type="primary" text="Check them out" />
      </Link>
    </div>,
    // eslint-disable-next-line react/jsx-key
    <div className="flex w-full flex-col  p-2">
      <header>
        <h1>High protein Lunch</h1>
      </header>
      <div>
        <span>Enjoy your break with these high protein selection </span>
      </div>
      <Link className="w-fit" href={''}>
        <Button hasStar={false} type="primary" text="Check them out" />
      </Link>
    </div>,
  ];
  return <SwiperSlider hasPaddingBottom items={items} />;
};

export default Banner;
