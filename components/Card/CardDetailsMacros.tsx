import Button from '@/components/buttons/Button';
import { Buttons } from '@/components/buttons/button.type';

const CardDetailsMicros = ({ micros }: { micros: Buttons[] }) => {
  return (
    <div className="flex items-center space-x-1 text-label-sm text-white">
      {micros.map((micro: Buttons, index) => (
        <Button key={index} type={micro} />
      ))}
    </div>
  );
};

export default CardDetailsMicros;
