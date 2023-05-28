import { FC } from 'react';
import { Card } from '@/components';
import Chip, { ChipProps } from '@/components/Chip';

export type ConfigType = {
  Chips: ChipProps[];
};
const Config: ConfigType = {
  Chips: [
    { type: 'Carb', intensity: 'low' },
    { type: 'Protein', intensity: 'high' },
    { type: 'Hug', intensity: 'high' },
    { type: 'Vegetarian' },
    { type: 'Fat', intensity: 'low' },
  ],
};
const Home: FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-color-five p-24 font-roboto text-color-three">
      <div className="bg-white p-3">
        <h1 className="text-headline-lg">Components</h1>

        <hr />

        <div className="mb-2 bg-white">
          <h1 className="text-body-lg text-color-two">Card</h1>
          <Card />
        </div>

        <div className="mb-2 bg-white">
          <h1 className="text-body-lg text-color-two">Chips</h1>

          <div className="flex gap-x-1">
            {Config.Chips.map((chip, index) => {
              return <Chip key={index} {...chip} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
