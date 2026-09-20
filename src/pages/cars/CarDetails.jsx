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
    <section>
         {/* 💡 تبدیل باکس SVG به لایه مطلق (absolute top-0) و تمام‌عرض مستقل تا بدون اشغال فضای مرده، به پس‌زمینه قفل شود */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen  h-[672px] z-0 pointer-events-none flex justify-center overflow-hidden">
        <svg 
          width="1440" 
          height="672" 
          viewBox="0 0 1440 672" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-fill opacity-100"
        >
          {/* اصلاح فضای نامی زنده طبق استانداردهای W3C برای نمایش شفاف دایره زرد */}
          <circle cx="727" cy="-148" r="820" fill="#F7D102" fillOpacity="0.18" />
        </svg>    
      </div>
      <CarDetailsHero car={car} lang={lang} />

      {/* <TechnicalSpecsList specs={car.specs} lang={lang} /> */}
      <TechnicalSpecsList 
        specs={car.specs} 
        lang={lang} 
        passengerCapacity={car.passengerCapacity}
        passengerLabel_dr={car.passengerLabel_dr}
        passengerLabel_en={car.passengerLabel_en}
      />
      <RelatedCars cars={relatedCars} lang={lang} />

      <CtaBanner/>
    </section>
  );
};