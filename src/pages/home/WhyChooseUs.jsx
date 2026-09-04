import { useLangStore } from "../../store/useLangStore";
import bgWhyUs from "../../assets/images/Rectangle 19.png";

const WhyChooseUs = () => {
  const { t } = useLangStore();
  const cards = t.home.whyChooseUs.cards;

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat px-4 py-10 sm:px-6 sm:py-12 md:py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.84)), url(${bgWhyUs})`,
      }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="flex w-full items-center justify-center gap-2 sm:gap-4">
          <span className="h-1 flex-1 bg-brand-yellow" />

          <h2 className="shrink-0 text-center font-sans text-2xl font-[900] leading-tight text-white sm:text-3xl md:text-[40px]">
            {t.home.whyChooseUs.title}
          </h2>

          <span className="h-1 flex-1 bg-brand-yellow" />
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(cards).map(([key, card]) => (
            <div
              key={key}
              className="min-h-[176px] overflow-hidden rounded-[20px] bg-white"
            >
              {/* Card title */}
              <div className="flex min-h-[52px] items-center justify-center rounded-[20px] bg-brand-yellow px-3 py-3 sm:min-h-[56px]">
                <h3 className="text-center font-sans text-sm font-[700] leading-6 text-brand-black sm:text-base sm:leading-7">
                  {card.title}
                </h3>
              </div>

              {/* Card description */}
              <div className="px-4 py-6 sm:px-5 sm:py-7">
                <p className="text-center font-sans text-xs font-[600] leading-6 text-brand-black/70 sm:text-sm sm:leading-7 md:text-base md:leading-8">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
