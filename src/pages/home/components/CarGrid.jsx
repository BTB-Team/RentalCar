import db from '../../../../db.json';
import { CarCard } from './CarCard';

export const CarGrid = () => {
  const cars = db.cars.slice(0, 6);

  return (
    <div
      className="
        grid
        grid-cols-1
        justify-items-center
        gap-6
        md:grid-cols-2
        lg:grid-cols-3
      "
    >
      {cars.map((car) => (
        <CarCard
          key={car.id}
          car={car}
        />
      ))}
    </div>
  );
};