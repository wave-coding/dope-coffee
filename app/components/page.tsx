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
  CardRestaurantLocation,
  CardMenu,
  CardDeliver,
  Accordion,
  List,
  Input,
  Select,
  FilterChip,
  Button,
} from '@/components';
import { Product } from '@/interfaces/share.interface';

export type ConfigType = {
  Chips: ChipProps[];
  product: Product;
};
const Config: ConfigType = {
  Chips: [
    { type: 'Carb', intensity: 'low' },
    { type: 'Protein', intensity: 'high' },
    { type: 'Hug', intensity: 'high' },
    { type: 'Vegetarian' },
    { type: 'Fat', intensity: 'low' },
  ],
  product: {
    image:
      'https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245_1280.jpg',
    name: 'Beef steak',
    price: 200,
    description: 'description',
    calories: 122,
    ingredients: ['Shrimp', 'Parmesan', 'Olive', 'Bread'],
    macros: [
      {
        amount: 12,
        type: 'Carb',
        intensity: 'low',
      },
      {
        amount: 15,
        type: 'Protein',
        intensity: 'high',
      },
      {
        amount: 29,
        type: 'Fat',
        intensity: 'low',
      },
      {
        amount: 30,
        type: 'Vegetarian',
        intensity: null,
      },
    ],
  },
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
          <Frame macros={Config.product.macros} />
        </div>
        <div className="bg-white">
          <h1 className="text-body-lg text-color-two">Legend</h1>
          <Legend amount={230} type="Carb" />
          <Legend amount={230} type="Fat" />
          <Legend amount={230} type="Protein" />
        </div>
        <div className="bg-slate-100 p-1 [&>*]:mt-1">
          <h1 className="p-2 text-body-lg text-color-two">Card Basket</h1>
          <CardBasket product={Config.product} quantity={3} />
          <CardBasket product={Config.product} quantity={3} />
          <CardBasket product={Config.product} quantity={3} />
        </div>
        <div className="bg-slate-100 p-1 [&>*]:mt-1">
          <h1 className="p-2 text-body-lg text-color-two">
            Card Restaurant Location
          </h1>
          <CardRestaurantLocation
            name="Ying bin"
            type="Asian"
            score={4.45}
            macros={Config.product.macros}
            reviewsCount="10k"
          />
        </div>
        <div className="bg-white p-1 [&>*]:mt-1">
          <h1 className="p-2 text-body-lg text-color-two">Card Menu</h1>
          <CardMenu product={Config.product} quantity={3} />
        </div>
        <div className="bg-white p-1 [&>*]:mt-1">
          <h1 className="p-2 text-body-lg text-color-two">Card Deliver</h1>
          <CardDeliver
            fullName="Hanieh kaheli"
            phone="+31 6 20 00 00 00"
            address="Oudwijkerdwarsstraat 151"
            isActive={false}
          />
        </div>
        <div className="bg-white p-1 [&>*]:mt-1">
          <h1 className="p-2 text-body-lg text-color-two">Accordion</h1>
          <Accordion name={'zoheir'} isActive={false} />
        </div>
        <div className="bg-white p-1 [&>*]:mt-1">
          <h1 className="p-2 text-body-lg text-color-two">List</h1>
          <List name={'zoheir'} />
          <List name={'zoheir'} />
          <List name={'zoheir'} />
        </div>
        <div className="bg-slate-200 p-1 [&>*]:mt-1">
          <h1 className="p-2 text-body-lg text-color-two">Select</h1>
          <Select options={['first', 'second']} />
        </div>
        <div className="bg-slate-200 p-1 [&>*]:mt-1">
          <h1 className="p-2 text-body-lg text-color-two">input</h1>
          <Input />
        </div>
        <div className="flex flex-grow flex-col bg-slate-200 p-1 [&>*]:mt-1">
          <h1 className="p-2 text-body-lg text-color-two">Filter Chip</h1>
          <div className="flex">
            {Config.Chips.map((chip, index) => {
              return <FilterChip {...chip} key={index} />;
            })}
          </div>
        </div>
        <div className="flex flex-grow flex-col bg-slate-200 p-1 [&>*]:mt-1">
          <h1 className="p-2 text-body-lg text-color-two">Filter Chip</h1>
          <div className="flex flex-row">
            <Button type="primary" text={'Button'} />
            <Button type="secondary" text={'Button'} />
            <Button type="text" text={'Button'} hasStar={false} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
