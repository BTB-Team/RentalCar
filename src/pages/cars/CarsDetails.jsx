import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLangStore } from "../../store/useLangStore";
import { RelatedCars } from "./RelatedCars";
import { CarsDetailsHero } from "./CarsDetailsHero";
import TechnicalSpecsList from "../../components/cars/TechnicalSpecsList";


const relatedCars = [
  {
    image: "/RentalCar/images/toyota-hilux.jpg",
    title: "Toyota Hilux",
    tags: ["4WD قدرتمند", "سیستم تهویه هوا"],
    description:
      "موتر قدرتمند و قابل اعتماد برای سفرهای ولایتی، شهری و مسیرهای دشوار با شرایط جاده‌ای.",
    passengers: "4 نفر",
  },
  {
    image: "/RentalCar/images/lexus.jpg",
    title: "Lexus",
    tags: ["لوکس و راحت", "مناسب سفرهای VIP"],
    description:
      "انتخابی لوکس و راحت برای سفرهای شهری، ترانسفر فرودگاه و خدمات مهمانان ویژه.",
    passengers: "4 نفر",
  },
  {
    image: "/RentalCar/images/about-hero.png",
    title: "Armored Toyota Land Cruiser",
    tags: ["4WD | امنیت بالا", "زرهی"],
    description:
      "موتر زرهی و قدرتمند برای سفرهای ویژه و مشتریانی که به سطح بالاتری از امنیت نیاز دارند.",
    passengers: "6 نفر",
  },
  {
    image: "/RentalCar/images/toyota-hilux.jpg",
    title: "Toyota Hilux",
    tags: ["4WD قدرتمند", "سیستم تهویه هوا"],
    description:
      "موتر قدرتمند و قابل اعتماد برای سفرهای ولایتی، شهری و مسیرهای دشوار با شرایط جاده‌ای.",
    passengers: "4 نفر",
  },
];

export const CarsDetails = () => {
  const { t, lang } = useLangStore();
  const { id } = useParams();

  const [car, setCar] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // fetch cars
  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await fetch(`http://localhost:5000/cars/${id}`);

        if (!response.ok) throw new Error("Failed to fetch car");

        const data = await response.json();

        setCar(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCar();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  if (!car) return <p>Car not found.</p>;

  return (
    <main dir="ltr" className="min-h-screen bg-white ">
      <CarsDetailsHero car={car} />
      {/* =========================
          Technical Specifications
      ========================== */}
      {/* <section
        className="mx-auto mt-[58px] w-full max-w-[874px] px-4"
        dir="rtl"
      >
        <div className="rounded-[15px] border border-[#E5E5E5] px-6 py-5">
          <h2 className="mb-5 text-right text-[20px] font-bold text-black">
            مشخصات تخنیکی
          </h2>

          <div className="grid grid-cols-1 gap-[7px] md:grid-cols-2">
            {specifications.map((spec) => {
              return (
                <div
                  key={spec.label}
                  className="flex h-[43px] items-center justify-between rounded-[12px] border border-[#E5E5E5] px-3"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={spec.icon}
                      alt="home icon"
                      className="h-auto w-[15px]"
                    />
                    <span className="text-[11px] font-medium text-[#222]">
                      {spec.label}
                    </span>
                  </div>
                  <span className="text-[10px] font-medium text-[#222]">
                    {spec.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}
      {car && <TechnicalSpecsList specs={car.specs} lang={lang} />}

      {/* =========================
          Related Cars
      ========================== */}
       <RelatedCars relatedCars={relatedCars} />
      {/* <section className="mx-auto mt-[45px] w-full max-w-[874px] px-4 pb-20">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-[27px] w-[27px] items-center justify-center rounded-full bg-[#FFD000]"
            >
              <img
                src="/RentalCar/images/icons/left_arrow_icon.png"
                alt="Chevron Left icon"
                className="h-auto w-[15px]"
              />
            </button>

            <button
              type="button"
              className="flex h-[27px] w-[27px] items-center justify-center rounded-full bg-[#FFD000]"
            >
              <img
                src="/RentalCar/images/icons/right_arrow_icon.png"
                alt="Chevron Right icon"
                className="h-auto w-[15px]"
              />
            </button>
          </div>

          <h2 className="text-[20px] font-bold text-black">موتر های مرتبط</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {relatedCars.map((car) => (
            <article
              key={car.title}
              className="overflow-hidden rounded-[14px] border border-[#E5E5E5] bg-white"
            >
              <div className="h-[145px] w-full overflow-hidden">
                <img
                  src={car.image}
                  alt={car.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="px-2 pb-3 pt-3">
                <h3 className="text-center text-[14px] font-bold text-[#111]">
                  {car.title}
                </h3>
                <div className="mt-4 flex flex-wrap justify-end gap-1">
                  {car.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#FFD000] px-2 py-[4px] text-[9px] font-bold text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-3 h-[58px] overflow-hidden text-right text-[10px] leading-[1.9] text-[#333]">
                  {car.description}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <button
                    type="button"
                    className="rounded-full bg-[#FFD000] px-3 py-[5px] text-[9px] font-bold text-black"
                  >
                    مشاهده جزئیات
                  </button>

                  <span className="rounded-full border border-[#FFD000] px-3 py-[4px] text-[9px] font-medium">
                    {car.passengers}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section> */}
     
    </main>
  );
};
