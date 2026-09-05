import { useLangStore } from "../../store/useLangStore";
import firstImage from "./images/four-n.jpeg";
import fourImage from "./images/first-n.jpeg";
import secondImage from "./images/second.png";
import thirdImage from "./images/third.png";

const processSteps = [
  {
    number: 1,
    title: "انتخاب موتر یا خدمات",
    description: "موتر و خدمات مورد نیاز خود را به سادگی انتخاب کنید.",
    image: fourImage,
  },
  {
    number: 2,
    title: "ارسال جزئیات سفر",
    description: "تاریخ، مقصد، مدت سفر و نیاز خود را با ما شریک سازید.",
    image: thirdImage,
  },
  {
    number: 3,
    title: "هماهنگی خدمات",
    description: "تیم ما موتر، راننده و سایر خدمات مورد نیاز را تنظیم میکند.",
    image: secondImage,
  },
  {
    number: 4,
    title: "آغاز سفر",
    description: "با آرامش و اطمینان، سفر خود را با خدمات ما آغاز کنید.",
    image: firstImage,
  },
];

const ProcessSection = () => {
  const { t, lang } = useLangStore();

  return (
    <section
      className="bg-white px-4 py-10 sm:px-6 lg:px-8"
      dir={lang === "dr" ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-8 text-center">
          <h2
            className={`mx-auto min-h-[62px] w-full max-w-[653px] font-yekan text-[28px] font-black leading-[120%] tracking-[0px] text-black sm:text-[34px] sm:leading-[110%] lg:h-[62px] lg:text-[40px] lg:leading-[100%] ${
              lang === "dr" ? "text-center" : "text-left max-w-[700px]"
            }`}
          >
            {t.home.process_title}
          </h2>

          <div className="mx-auto mt-3 h-[4px] w-full max-w-[514px] rounded-full bg-[#F7D102]" />
        </div>

        {/* Travel Steps */}
        <div className="mx-auto grid h-auto w-full max-w-full grid-cols-1 gap-[20px] overflow-hidden rounded-[20px] sm:grid-cols-2 lg:grid-cols-2 xl:h-[285px] xl:w-[1200px] xl:grid-cols-4">
          {t.home.process_steps.map((step, index) => (
            <div
              key={processSteps[index].number}
              className="group relative h-[285px] w-full overflow-hidden rounded-[20px] xl:w-[285px]"
            >
              <img
                src={processSteps[index].image}
                alt={step.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div
                className={`absolute bottom-[5px] left-1/2 z-10 h-[123px] w-[calc(100%-24px)] max-w-[258px] -translate-x-1/2 text-white xl:w-[258px] ${
                  lang === "dr" ? "text-right" : "text-left"
                }`}
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full bg-[#F7D102] text-center font-yekan text-[20px] font-bold leading-[100%] tracking-[0%] text-black">
                    {processSteps[index].number}
                  </div>
                </div>

                <h3
                  className={`h-[31px] w-full font-yekan text-[20px] font-bold leading-[100%] tracking-[0%] text-white ${
                    lang === "dr" ? "text-right" : "text-left leading-[80%]"
                  }`}
                >
                  {step.title}
                </h3>

                <p
                  className={`h-[54px] w-full font-yekan text-[14px] font-normal leading-[150%] tracking-[0%] text-white ${
                    lang === "dr" ? "text-right" : "text-left"
                  }`}
                >
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
