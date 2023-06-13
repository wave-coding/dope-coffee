import { FC } from 'react';
import { ChipProps } from '@/components/Chip';
import {
  NavigationBottom,
  Chip,
  NumberButton,
  Card,
  Frame,
  Legend,
  CardBasket,
} from '@/components';

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
    <main className="flex flex-col items-center justify-between bg-color-five p-0 font-roboto text-color-three">
      <div className="min-w-full bg-white">
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
        <div className="bg-white">
          <h1 className="text-body-lg text-color-two">Navigation Bottom</h1>

          <NavigationBottom />
        </div>
        <div className="bg-white">
          <h1 className="text-body-lg text-color-two">Number Bottom</h1>
          <NumberButton />
        </div>
        <div className="bg-white">
          <h1 className="text-body-lg text-color-two">Frame</h1>
          <Frame
            macros={[
              {
                amount: 12,
                type: 'Carb',
              },
              {
                amount: 15,
                type: 'Protein',
              },
              {
                amount: 29,
                type: 'Fat',
              },
              {
                amount: 30,
                type: 'Vegetarian',
              },
            ]}
          />
        </div>
        <div className="bg-white">
          <h1 className="text-body-lg text-color-two">Legend</h1>
          <Legend amount={230} type="Carb" />
          <Legend amount={230} type="Fat" />
          <Legend amount={230} type="Protein" />
        </div>
        <div className="bg-slate-100 p-1 [&>*]:mt-1">
          <h1 className="p-2 text-body-lg text-color-two">Card Basket</h1>
          <CardBasket
            image="https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245_1280.jpg"
            name="Beef steak"
            price={200}
            quantity={3}
          />
          <CardBasket
            image="https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245_1280.jpg"
            name="Beef steak"
            price={200}
            quantity={3}
          />
          <CardBasket
            image="https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245_1280.jpg"
            name="Beef steak"
            price={200}
            quantity={3}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
