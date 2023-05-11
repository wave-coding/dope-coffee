import CaloriePrice from './CaloriePrice';
import CardDetailsMicros from './CardDetailsMacros';

const CardDetails = () => (
  <div className="details flex flex-col space-y-2 px-2 pt-2 pb-2">
    <h3 className="text-label-sm text-slate-900">Shrimp Pizza</h3>
    <CardDetailsMicros micros={['Carb', 'Protein', 'Hug']} />
    <CaloriePrice price={12} calorie={1200} />
  </div>
);

export default CardDetails;
