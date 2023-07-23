import { FC } from 'react';
import Button from '../Button';
import SwiperSlider from '../SwiperSlider';
import Link from 'next/link';

interface BannerProps {
  image?: string;
  title: string;
  description?: string;
  link?: string;
  buttonText?: string;
}

const Banner: FC<BannerProps> = ({
  image,
  title,
  description,
  link,
  buttonText,
}) => {
  const item = (
    <div className="h-full rounded-lg bg-color-dark">
      <div
        className="h-full rounded-lg bg-none"
        style={{
          // background: `url(${image}) no-repeat right`,
          background: `url(/upload-banner.png) no-repeat center right`,
          backgroundColor: 'transparent',
          backgroundSize: 'auto 100%',
        }}
      >
        <div className="flex w-full flex-col px-6 py-4">
          <header className="mb-3">
            {title ? (
              <h1 className="title text-headline-lg text-white">{title}</h1>
            ) : null}
          </header>
          <div className="description mb-3">
            {description ? (
              <span className="text-body-md text-neutral-300">
                {description}
              </span>
            ) : null}
          </div>
          {link && buttonText ? (
            <Link className="link w-fit" href={link}>
              <Button
                classNames="px-4 py-3 text-body-md text-neutral-200"
                type="primary"
                text={buttonText}
              />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );

  const items = Array(3).fill(item);

  return (
    <SwiperSlider
      className="h-full min-h-full"
      configs={{
        className: 'banner h-full',
        grabCursor: true,
        autoplay: {
          delay: 200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
      }}
      items={items}
    />
  );
};

export default Banner;
