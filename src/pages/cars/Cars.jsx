import db from "../../../db.json";

import { useEffect, useMemo, useState } from "react";
import { useLangStore } from "../../store/useLangStore";
import { CarFilter } from "../../components/cars/CarFilter";
import { CarCard } from "../home/components/CarCard";
import { CarSkeleton } from "../../components/cars/CarSkeleton";
import { TravelBanner } from "../../components/common/TravelBanner";
import { ServiceCtaSkeleton } from "../../components/cars/ServiceCtaSkeleton";
import { CarHeroSkeleton } from "../../components/cars/CarHeroSkeleton";

export const Cars = () => {
  const { t, lang, activeFilter } = useLangStore();

  const cars = db.cars;
  const loading = false;

  // number of visible cars
  const [visibleCount, setVisibleCount] = useState(9);


  // filter cars based on global Zustand filter
  const filteredCars = useMemo(() => {
    switch (activeFilter) {
      case "luxury":
        return cars.filter((car) => car.type === "luxury");

      case "4wd":
        return cars.filter((car) => car.category_en === "4WD");

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
    setVisibleCount(9);
  };

  // reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(9);
  }, [activeFilter]);

  return (
    <section className=" min-h-screen bg-white">
      {/* hero */}
      {loading ? (
        <CarHeroSkeleton />
      ) : (
        <div className="overflow-hidden px-4 pb-20 pt-52 md:px-8 lg:px-16">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-blackfont text-brand-black md:text-5xl">
              {t.cars.title}
            </h1>

            <p className="mx-auto mt-10  max-w-xl text-sm leading-10 font-bold text-brand-black md:text-2xl">
              {t.cars.description}
            </p>

            {/* filters */}
            <CarFilter />
          </div>

          {/* decorative circle */}
          <div className="absolute top-0 start-0 h-full w-full bg-[url('/images/Ellipse.png')] bg-cover bg-center bg-no-repeat" />
        </div>
      )}

      {/* cars */}
      <div className="mx-auto max-w-7xl mt-10 px-4 pb-16 md:px-8 lg:px-12">
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
            {filteredCars.length > 9 && (
              <div className="mt-10 flex justify-center">
                {visibleCount < filteredCars.length && (
                  <button
                    type="button"
                    onClick={handleViewMore}
                    className="flex gap-1.5 items-center justify-center rounded-2xl bg-brand-yellow px-5 py-4 font-extrabold text-brand-black transition hover:scale-105"
                  >
                    {t.cars.viewMore}
                    <svg
                      viewBox="0 0 10 23"
                      fill="none"
                      className={`h-[16px] w-7 ${
                        lang === "dr" ? "" : "rotate-180"
                      }`}
                    >
                      <path
                        d="M30 11H5M11 3L3 11L11 19"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}
                {/* view Less */}
                {visibleCount >= filteredCars.length && (
                  <button
                    type="button"
                    onClick={handleViewLess}
                    className="flex gap-1.5 items-center justify-between rounded-2xl bg-brand-yellow px-5 py-4 font-extrabold text-brand-black transition hover:scale-105"
                  >
                    {t.cars.viewLess}
                    <svg
                      viewBox="0 0 10 23"
                      fill="none"
                      className={`h-[16px] w-7 ${
                        lang === "dr" ? "" : "rotate-180"
                      }`}
                    >
                      <path
                        d="M30 11H5M11 3L3 11L11 19"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
      {/* travel banner */}
      <div className="mx-auto max-w-7xl mt-10 px-4 pb-16 md:px-8 lg:px-12">
        {loading ? <ServiceCtaSkeleton /> : <TravelBanner />}
      </div>
    </section>
  );
};
