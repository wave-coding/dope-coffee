import { FC } from 'react';
import CaloriePrice from './components/CaloriePrice';
import CardDetailsMacros from './components/CardDetailsMacros';
import { ChipProps } from '@/components/Chip';

const macros: ChipProps[] = [
  { type: 'Carb', intensity: 'low' },
  { type: 'Protein', intensity: 'high' },
  { type: 'Vegetarian' },
  { type: 'Fat', intensity: 'low' },
  { type: 'Hug', intensity: 'high' },
];
const CardDetails: FC = () => (
  <div className="details flex flex-col space-y-2 px-2 pb-2 pt-2">
    <h3 className="text-label-sm text-slate-900">Shrimp Pizza</h3>
    <CardDetailsMacros macros={macros} />
    <CaloriePrice price={12} calorie={1200} />
  </div>
);

export default CardDetails;
