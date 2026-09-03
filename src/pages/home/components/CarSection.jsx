import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import { SectionHeader } from './SectionHeader';
import { CarGrid } from './CarGrid';
import { useLangStore } from '../../../store/useLangStore';

const CarSection = () => {
  const { lang, t } = useLangStore();
  const isDari = lang === 'dr';

  return (
    <section
      className="
        mx-auto
        w-full
        max-w-[1200px]
        pt-[120px]
        pb-[80px]
      "
    >
      <SectionHeader
        title={t.cars?.cars_title}
        description={t.cars?.cars_description}
      />

      <div className="mt-[77px]">
        <CarGrid />
      </div>

      {/* View More Vehicles */}
      <div className="mt-[48px] flex justify-center">
        <Link
        to="/cars"
        className="
          flex
          h-[60px]
          w-[280px]
          shrink-0
          items-center
          justify-center
          gap-[12px]
          rounded-[20px]
          bg-brand-yellow
          font-[700]
          text-[20px]
          leading-[100%]
          tracking-[0%]
          text-brand-black
          transition-all
          duration-300
          ease-out
          hover:scale-[1.04]
          hover:shadow-[0_5px_12px_rgba(0,0,0,0.12)]
      "
      >
        <span className="whitespace-nowrap">
          {t.cars?.view_more}
        </span>

        <Icon
          icon="humbleicons:arrow-up"
          width="32"
          height="32"
          className={`shrink-0 ${isDari ? '-rotate-90' : 'rotate-90'}`}
          aria-hidden="true"
        />
      </Link>
      </div>
    </section>
  );
};

export default CarSection;