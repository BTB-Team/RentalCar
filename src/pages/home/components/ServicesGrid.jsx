import { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceCard from './ServiceCard';

export const ServicesGrid = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          'http://localhost:5000/services'
        );

        setServices(response.data);
      } catch (error) {
        console.error('Failed to fetch services:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Loading Skeleton
  if (loading) {
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
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="
              h-[224px]
              w-full
              max-w-[285px]
              animate-pulse
              rounded-[20px]
              bg-gray-100
            "
          />
        ))}
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <p className="py-10 text-center">
        Failed to load services.
      </p>
    );
  }

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