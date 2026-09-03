import { useEffect, useMemo, useState } from "react";
import { useLangStore } from "../../store/useLangStore";

import { CarFilter } from "../../components/cars/CarFilter";
import { CarCard } from "../../components/cars/CarCard";
import { CarSkeleton } from "../../components/cars/CarSkeleton";
import { TravelBanner } from "../../components/common/TravelBanner";

export const Cars = () => {
  const { t, lang, activeFilter } = useLangStore();

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // number of visible cars
  const [visibleCount, setVisibleCount] = useState(6);

  // fetch cars
  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);

        const response = await fetch("http://localhost:5000/cars");

        // check HTTP status
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        // convert response to JSON
        const data = await response.json();

        console.log("Cars API:", data);

        setCars(data);
      } catch (error) {
        console.error("Failed to fetch cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // filter cars based on global Zustand filter
  const filteredCars = useMemo(() => {
    switch (activeFilter) {
      case "luxury":
        return cars.filter((car) => car.type === "luxury");

      case "4wd":
        return cars.filter((car) => car.category === "4WD");

      case "armored":
        return cars.filter((car) => car.isArmored === true);

      case "all":
      default:
        return cars;
    }
  }, [cars, activeFilter]);

  // cars shown on screen
  const visibleCars = filteredCars.slice(0, visibleCount);

  // view more
  const handleViewMore = () => {
    setVisibleCount((current) => current + 3);
  };
  // view less
  const handleViewLess = () => {
    setVisibleCount((current) => current - 3);
  };

  // reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(6);
  }, [activeFilter]);

  return (
    <section className=" min-h-screen bg-white">
      {/* hero */}
      <div className="overflow-hidden px-4 pb-20 pt-52 md:px-8 lg:px-16">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-blackfont text-brand-black md:text-5xl">
            {t.cars.title}
          </h1>

          <p className="mx-auto mt-6  max-w-xl text-sm leading-10 font-extrabold  text-brand-black md:text-base">
            {t.cars.description}
          </p>

          {/* filters */}
          <CarFilter />
        </div>

        {/* decorative circle */}
        <div className="absolute top-0 start-0 h-full w-full bg-[url('/images/Ellipse.png')] bg-cover bg-center bg-no-repeat" />
      </div>

      {/* cars */}
      <div className="mx-auto  max-w-7xl mt-20 px-4 pb-16 md:px-8 lg:px-12">
        {loading ? (
          <CarSkeleton />
        ) : filteredCars.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg font-extrabold text-brand-black">
              {t.cars.noCars}
            </p>
          </div>
        ) : (
          <>
            {/* 3 column grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleCars.map((car) => (
                <CarCard key={car.id} car={car} lang={lang} t={t} />
              ))}
            </div>

            {/* view more */}
            {visibleCount < filteredCars.length && (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={handleViewMore}
                  className="rounded-2xl bg-brand-yellow px-6 py-3 text-sm font-extrabold text-brand-black transition hover:scale-105"
                >
                  {t.cars.viewMore}
                </button>
              </div>
            )}
            {/* view Less */}
            {visibleCount > 6 && (
              <div className="mt-12 flex justify-center">
                <button
                  type="button"
                  onClick={handleViewLess}
                  className="rounded-2xl bg-brand-yellow px-6 py-3 text-sm font-extrabold text-brand-black transition hover:scale-105"
                >
                  {t.cars.viewLess}
                </button>
              </div>
            )}
            <TravelBanner />
          </>
        )}
      </div>
    </section>
  );
};
