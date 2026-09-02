import { useEffect, useState } from 'react';

import { useLangStore } from '../../store/useLangStore';
import { CarCard } from '../home/components/CarCard';

export const Cars = () => {
  const { lang } = useLangStore();

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const isDari = lang === 'dr';

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:5000/cars');

        if (!response.ok) {
          throw new Error('Failed to fetch cars');
        }

        const data = await response.json();

        setCars(data);
      } catch (error) {
        console.error('Error fetching cars:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return (
      <section className="w-full py-[80px] text-center">
        <p className="text-[18px] font-semibold text-brand-black">
          {isDari ? 'در حال بارگذاری...' : 'Loading...'}
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full py-[80px] text-center">
        <p className="text-[18px] font-semibold text-brand-black">
          {isDari
            ? 'در دریافت اطلاعات موترها مشکلی پیش آمد.'
            : 'Failed to load cars.'}
        </p>
      </section>
    );
  }

  return (
    <section
      className="
        w-full
        px-[20px]
        md:px-[40px]
        lg:px-[60px]
        xl:px-[120px]
        py-[60px]
        md:py-[80px]
      "
    >
      {/* Page Header */}
      <div
        className="
          mx-auto mt-[60px]
          mb-[50px]
          max-w-[900px]
          text-center
        "
      >
        <h1
          dir={isDari ? 'rtl' : 'ltr'}
          className="
            font-extrabold
            text-[32px]
            md:text-[42px]
            leading-[110%]
            text-brand-black
          "
        >
          {isDari ? 'تمام موترها' : 'All Cars'}
        </h1>

        <p
          dir={isDari ? 'rtl' : 'ltr'}
          className="
            mt-[16px]
            font-semibold
            text-[16px]
            md:text-[18px]
            leading-[150%]
            text-brand-black
          "
        >
          {isDari
            ? 'موتر مناسب خود را از مجموعه موترهای ما انتخاب کنید.'
            : 'Choose the perfect vehicle from our collection.'}
        </p>
      </div>

      {/* Cars Grid */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1200px]
          grid-cols-1
          justify-items-center
          gap-x-[24px]
          gap-y-[30px]
          sm:grid-cols-2
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
    </section>
  );
};