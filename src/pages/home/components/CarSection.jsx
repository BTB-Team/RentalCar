import { SectionHeader } from './SectionHeader';
import { CarGrid } from './CarGrid';
import { useLangStore } from '../../../store/useLangStore';

const CarSection = () => {
  const { t } = useLangStore();

  return (
    <section className="mx-auto w-full max-w-[1200px] py-16">
      <SectionHeader
        title={t.cars?.cars_title}
        description={t.cars?.cars_description}
      />

      <div className="mt-[77px]">
        <CarGrid />
      </div>

      {/* View More Vehicles */}
      <div className="mt-[48px] flex justify-center">
        <button
          type="button"
          className="
            flex
            h-[48px]
            min-w-[220px]
            items-center
            justify-center
            rounded-[20px]
            bg-brand-yellow
            px-[24px]
            font-extrabold
            text-[16px]
            leading-none
            text-brand-black
            transition-opacity
            hover:opacity-80
          "
        >
          {t.cars?.view_more}
        </button>
      </div>
    </section>
  );
};

export default CarSection;