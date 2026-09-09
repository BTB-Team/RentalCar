import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLangStore } from "../../store/useLangStore";
import { CarsDetailsHero } from "./CarsDetailsHero";
import TechnicalSpecsList from "../../components/cars/TechnicalSpecsList";
import { RelatedCars } from "./RelatedCars";

export const CarsDetails = () => {
 const { t, lang } = useLangStore();
 const { id } = useParams();

 const [car, setCar] = useState(null);
 const [relatedCars, setRelatedCars] = useState([]);
 const [isLoading, setIsLoading] = useState(false);

 useEffect(() => {
  const fetchCars = async () => {
   try {
    setIsLoading(true);

    const [carResponse, carsResponse] = await Promise.all([
     fetch(`http://localhost:5000/cars/${id}`),
     fetch("http://localhost:5000/cars"),
    ]);

    if (!carResponse.ok || !carsResponse.ok) {
     throw new Error("Failed to fetch cars");
    }

    const currentCar = await carResponse.json();
    const allCars = await carsResponse.json();

    setCar(currentCar);

    const getRelatedCars = (cars, currentCar) => {
     const words = currentCar.name_en.split(" ");

     // فقط یک کلمه برای فیلتر
     const filterWord = words[0];

     return cars.filter(
      (item) =>
       item.id !== currentCar.id &&
       item.name_en.includes(filterWord),
     );
    };

    const filteredCars = getRelatedCars(allCars, currentCar);

    setRelatedCars(filteredCars);
   } catch (error) {
    console.error(error);
   } finally {
    setIsLoading(false);
   }
  };

  fetchCars();
 }, [id]);

 if (isLoading) return <p>Loading...</p>;

 if (!car) return <p>Car not found.</p>;

 return (
  <>
   <CarsDetailsHero car={car} lang={lang} />

   <TechnicalSpecsList specs={car.specs} lang={lang} />

   <RelatedCars cars={relatedCars} lang={lang} />
  </>
 );
};