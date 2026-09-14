import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import db from "../../../db.json";

import { useLangStore } from "../../store/useLangStore";

import { CarDetailsHero } from "./components/CarDetailsHero";

import TechnicalSpecsList from "../../components/cars/TechnicalSpecsList";

import { RelatedCars } from "./components/RelatedCars";

import { CtaBanner } from "../../components/common/CtaBanner";

export const CarDetails = () => {
  const { lang } = useLangStore();
  const { id } = useParams();

  const [car, setCar] = useState(null);
  const [relatedCars, setRelatedCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCarData = () => {
      try {
        setIsLoading(true);

        const cars = db.cars;

        // Find current car
        const currentCar = cars.find((item) => String(item.id) === String(id));

        if (!currentCar) {
          setCar(null);
          setRelatedCars([]);
          return;
        }

        setCar(currentCar);

        // Find related cars using the first word of the English name
        const filterWord = currentCar.name_en?.split(" ")[0];

        const filteredCars = cars.filter(
          (item) =>
            String(item.id) !== String(currentCar.id) &&
            item.name_en?.includes(filterWord),
        );

        setRelatedCars(filteredCars);
      } catch (error) {
        console.error("Failed to load car data:", error);
        setCar(null);
        setRelatedCars([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCarData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!car) {
    return <p>Car not found.</p>;
  }

  return (
    <>
      <CarDetailsHero car={car} lang={lang} />

      <TechnicalSpecsList specs={car.specs} lang={lang} />

      <RelatedCars cars={relatedCars} lang={lang} />

      <CtaBanner />
    </>
  );
};