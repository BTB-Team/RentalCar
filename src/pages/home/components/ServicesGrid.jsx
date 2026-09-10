import db from '../../../../db.json';
import ServiceCard from './ServiceCard';

export const ServicesGrid = () => {
  const services = db.services;

  // Services
  return (
    <div
      className="
        grid
        grid-cols-1
        justify-items-center
        gap-x-[20px]
        gap-y-[15px]
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
};

export default ServicesGrid;