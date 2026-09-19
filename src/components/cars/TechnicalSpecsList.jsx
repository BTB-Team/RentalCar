import TechnicalSpecsItem from "./TechnicalSpecsItem";

// const TechnicalSpecsList = ({ specs, lang }) => {

//   if (!specs) return null;
const TechnicalSpecsList = ({ specs, lang, passengerCapacity, passengerLabel_dr, passengerLabel_en }) => {
  if (!specs) return null;
  
  const specItems = [
    {
      icon: "/RentalCar/images/icons/fuel.png",
      label: lang === "dr" ? "نوع سوخت" : "Fuel Type",
      value: lang === "dr" ? specs.fuelType_dr : specs.fuelType_en,
    },
    {
      icon: "/RentalCar/images/icons/power.png",
      label: lang === "dr" ? "قدرت انجین" : "Engine",
      value: lang === "dr" ? specs.engine_dr : specs.engine_en,
    },
    {
      icon: "/RentalCar/images/icons/engine.png",
      label: lang === "dr" ? "حالت انتقال قدرت" : "Drive Type",
      value: lang === "dr" ? specs.driveType_dr : specs.driveType_en,
    },
    {
      icon: "/RentalCar/images/icons/gearbox.png",
      label: lang === "dr" ? "گیربکس" : "Gearbox",
      value: lang === "dr" ? specs.gearbox_dr : specs.gearbox_en,
    },
    {
      icon: "/RentalCar/images/icons/security.png",
      label: lang === "dr" ? "سیستم امنیتی" : "Security System",
      value: lang === "dr" ? specs.security_dr : specs.security_en,
    },
    {
      icon: "/RentalCar/images/icons/passengers.png",
      label: lang === "dr" ? "ظرفیت سرنشین" : "Passenger Capacity",
      // ترکیب ظرفیت عددی و برچسب متنی (مثلاً: 7 نفر یا 7 People)
      value: `${passengerCapacity} ${lang === "dr" ? (passengerLabel_dr || "نفر") : (passengerLabel_en || "People")}`,
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
    <section className="mx-auto mt-12 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24">
      <div className="rounded-[20px] border border-[#D9D9D9] p-4 sm:p-8">
        <h2 className="mb-5 text-start text-xl sm:text-2xl font-bold text-black">
          {lang === "dr" ? "مشخصات تخنیکی" : "Technical Specifications"}
        </h2>

        {/* فیکس چیدمان به صورت یک‌ستونه عریض در موبایل و تبلت | دو ستونه فقط در دسکتاپ بزرگ */}
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-x-6">
          {specItems.map((spec) => (
            <div
              key={spec.label}
              className="flex min-h-[46px] py-2 items-center justify-between rounded-[15px] border border-[#D9D9D9] px-3 gap-4"
            >
              <div className="flex items-center gap-2 shrink-0">
                <img src={spec.icon} alt="" className="size-5 sm:size-6" />
                <span className="text-xs sm:text-sm font-bold text-brand-black">{spec.label}</span>
              </div>
              {/* مهار کامل متون طولانی با break-words برای جلوگیری از مچاله شدن فونت‌ها در تبلت */}
              <span className="text-xs sm:text-sm font-semibold text-gray-700 text-end break-words max-w-[60%]">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecsList;
