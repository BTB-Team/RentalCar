import TechnicalSpecsItem from "./TechnicalSpecsItem";

const TechnicalSpecsList = ({ specs, lang }) => {

  if (!specs) return null;
  
  const specItems = [
    {
      icon: "/RentalCar/images/icons/fuel.png",
      label: lang === "dr" ? "نوع سوخت" : "Fuel Type",
      value: lang === "dr" ? specs.fuelType_dr : specs.fuelType_en,
    },
    {
      icon: "/RentalCar/images/icons/engine.png",
      label: lang === "dr" ? "قدرت انجین" : "Engine",
      value: lang === "dr" ? specs.engine_dr : specs.engine_en,
    },
    {
      icon: "/RentalCar/images/icons/gearbox.png",
      label: lang === "dr" ? "گیربکس" : "Gearbox",
      value: lang === "dr" ? specs.gearbox_dr : specs.gearbox_en,
    },
    {
      icon: "/RentalCar/images/icons/passengers.png",
      label: lang === "dr" ? "حالت انتقال قدرت" : "Drive Type",
      value: lang === "dr" ? specs.driveType_dr : specs.driveType_en,
    },
    {
      icon: "/RentalCar/images/icons/security.png",
      label: lang === "dr" ? "سیستم امنیتی" : "Security System",
      value: lang === "dr" ? specs.security_dr : specs.security_en,
    },
    {
      icon: "/RentalCar/images/icons/fuel-consumption.png",
      label: lang === "dr" ? "مصرف سوخت (تقریبی)" : "Fuel Consumption",
      value: lang === "dr" ? specs.consumption_dr : specs.consumption_en,
    },
    {
      icon: "/RentalCar/images/icons/luggage.png",
      label: lang === "dr" ? "تعداد بکس" : "Luggage",
      value: lang === "dr" ? specs.luggage_dr : specs.luggage_en,
    },
  ];

  return (
    <section className="mx-auto mt-[58px] w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">
      <div className="rounded-[15px] border border-[#E5E5E5] px-6 py-5">
        <h2 className="mb-5 text-start text-[20px] font-bold text-black">
          {lang === "dr" ? "مشخصات تخنیکی" : "Technical Specifications"}
        </h2>

        <div className="grid grid-cols-1 gap-[7px] md:grid-cols-2">
          {specItems.map((spec) => (
            <TechnicalSpecsItem key={spec.label} spec={spec} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecsList;
