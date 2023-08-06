import { CardMenu, GoBackTopBarTitle } from '@/components';
import { Product } from '@/interfaces/share.interface';
import { FC } from 'react';

const Product: Product = {
  image:
    'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg',
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
      amount: 45,
      type: 'Protein',
      intensity: 'high',
    },
    {
      amount: 29,
      type: 'Fat',
      intensity: 'low',
    },
  ],
};

const cardMenuMapper = (item: Product, index: number) => {
  return (
    <div className="mb-3 rounded-lg" key={index}>
      <CardMenu key={index} product={item} quantity={index} />
    </div>
  );
};
const Products: FC = () => {
  const products = Array(8).fill(Product);

  return (
    <div>{products.map((item, index) => cardMenuMapper(item, index))}</div>
  );
};

const TopBar = () => {
  return (
    <div className="mb-5 mt-2">
      <GoBackTopBarTitle title="High Protein" />
    </div>
  );
};
const getHome = () => {
  return (
    <>
      <div className="container m-auto flex flex-col px-3">
        <TopBar />
        <Products />
      </div>
    </>
  );
};

export default getHome;
