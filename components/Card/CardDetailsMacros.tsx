import Button from '@/components/buttons/Button';
import { Buttons } from '@/components/buttons/button.type';

const CardDetailsMicros = ({ micros }: { micros: Buttons[] }) => {
  return (
    <div className="flex space-x-2 text-white items-center text-xs">
      {micros.map((micro: Buttons, index) => (
        <Button key={index} type={micro} />
      ))}
    </div>
  );
};

export default CardDetailsMicros;
