const processSteps = [
  {
    number: 1,
    title: "انتخاب موتر یا خدمات",
    description: "موتر و خدمات مورد نیاز خود را به سادگی انتخاب کنید.",
    image: "src/components/home/images/four.png",
  },
  {
    number: 2,
    title: "ارسال جزئیات سفر",
    description: "تاریخ، مقصد، مدت سفر و نیاز خود را با ما شریک سازید.",
    image: "src/components/home/images/third.png",
  },
  {
    number: 3,
    title: "هماهنگی خدمات",
    description: "تیم ما موتر، راننده و سایر خدمات مورد نیاز را تنظیم میکند.",
    image: "src/components/home/images/second.png",
  },
  {
    number: 4,
    title: "آغاز سفر",
    description: "با آرامش و اطمینان، سفر خود را با خدمات ما آغاز کنید.",
    image: "src/components/home/images/first.png",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8" dir="rtl">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="mx-auto h-[62px] w-full max-w-[653px] text-center font-yekan text-[40px] font-black leading-[100%] tracking-[0px] text-black">
            سفر خود را در چند مرحله ساده تنظیم کنید
          </h2>

          <div className="mx-auto mt-3 h-[4px] w-[514px] max-w-full rounded-full bg-[#F7D102]" />
        </div>

        {/* travel Steps */}
        <div className="mx-auto grid h-[285px] w-[1200px] max-w-full grid-cols-1 gap-[20px] overflow-hidden rounded-[20px] sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="group relative h-[285px] w-[285px] overflow-hidden rounded-[20px]"
            >
              <img
                src={step.image}
                alt={step.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-[5px] left-1/2 z-10 h-[123px] w-[258px] -translate-x-1/2 text-right text-white">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full bg-[#F7D102] text-center font-yekan text-[20px] font-bold leading-[100%] tracking-[0%] text-black">
                    {step.number}
                  </div>
                </div>
                <h3 className="h-[31px] w-[258px] text-right font-yekan text-[20px] font-bold leading-[100%] tracking-[0%] text-white">
                  {step.title}
                </h3>
                <p className="h-[54px] w-[258px] text-right font-yekan text-[14px] font-normal leading-[150%] tracking-[0%] text-white">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
