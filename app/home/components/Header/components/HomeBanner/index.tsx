import { Banner } from '@/components';

const HomeBanner = () => {
  return (
    <div className="home-banner h-48">
      <div className="h-full w-full">
        <Banner
          title="High protein lunch"
          // description="simple description"
          // link="/"
          // buttonText="check it out"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
