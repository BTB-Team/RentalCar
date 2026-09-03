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
            whitespace-nowrap
            w-[610px]
            max-w-full
            font-black
            text-[40px]
            leading-[60px]
            text-brand-black
          " 
        >
          {t.services?.services_title}
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