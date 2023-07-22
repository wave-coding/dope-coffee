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
    <div className="rounded-lg bg-color-dark">
      <div
        style={{
          background: `url(/upload-banner.png${''}) no-repeat right`,
          backgroundColor: 'transparent',
          backgroundSize: 'auto 100%',
        }}
        className="flex w-full flex-col rounded-lg px-6 py-4"
      >
        {/* <Image alt="" width={252} height={290} src={'/upload-banner.png'} /> */}
        <header className="mb-3">
          <h1 className="title text-headline-lg text-white">
            High protein Lunch
          </h1>
        </header>
        <div className="description mb-3">
          <span className="text-body-md text-neutral-300">
            Enjoy your break with <br />
            these high protein selection
          </span>
        </div>
        <Link className="link w-fit" href={''}>
          <Button
            classNames="px-4 py-3 text-body-md text-neutral-200"
            type="primary"
            text="Check them out"
          />
        </Link>
      </div>
    </div>
  );

  const items = Array(3).fill(item);

  return (
    <SwiperSlider
      configs={{
        className: 'banner',
        grabCursor: true,
      }}
      hasPaddingBottom={true}
      items={items}
    />
  );
};

export default Banner;
