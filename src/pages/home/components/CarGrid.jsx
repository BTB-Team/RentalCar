import { useEffect, useState } from 'react';
import axios from 'axios';
import { CarCard } from './CarCard';

export const CarGrid = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          'http://localhost:5000/cars'
        );

        setCars(response.data.slice(0, 6));
      } catch (error) {
        console.error('Failed to fetch cars:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return (
    <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="
              h-[455px]
              w-full
              max-w-[380px]
              animate-pulse
              rounded-[20px]
              bg-gray-100
            "
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <p className="py-10 text-center">
        Failed to load cars.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};