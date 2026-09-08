import { useLangStore } from '../../../store/useLangStore';
import ServicesGrid from './ServicesGrid';

const ServicesSection = () => {
  const { t } = useLangStore();

  return (
    <section
      className="
        mx-auto
        w-full
        max-w-[1200px]
        pt-[80px]
        pb-[64px]
      "
    >
      {/* Section Header */}
      <div
        className="
          flex
          w-full
          flex-col
          items-center
          text-center
        "
      >
        <h2
          className="
            w-full
    max-w-[610px]
    px-[20px]
    text-[28px]
    sm:text-[32px]
    lg:text-[40px]
    font-[900]
    leading-[130%]
    text-center
    text-brand-black
    whitespace-normal
    lg:whitespace-nowrap
  "
        >
          {t.services?.title}
        </h2>

        {/* Yellow Divider */}
        <div
          className="
            mt-[13px]
            h-[4px]
            w-[514px]
            max-w-full
            bg-brand-yellow
          "
        />
      </div>

      {/* Services Grid */}
      <div className="mt-[46px]">
        <ServicesGrid />
      </div>
    </section>
  );
};

export default ServicesSection;