import Button from '@/components/buttons/Button';
import { Buttons } from '@/components/buttons/button.type';

const CardDetailsMicros = ({ micros }: { micros: Buttons[] }) => {
  return (
    <div className="flex text-label-sm space-x-1 text-white items-center">
      {micros.map((micro: Buttons, index) => (
        <Button key={index} type={micro} />
      ))}
    </div>
  );
};

export default CardDetailsMicros;
