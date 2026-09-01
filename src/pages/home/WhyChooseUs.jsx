import { useLangStore } from '../../store/useLangStore';

const WhyChooseUs = () => {
  const { t } = useLangStore();
  const cards = t.home.whyChooseUs.cards;

  return (
    <section className="px-4 py-16 bg-brand-black md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* تیتر با خط‌های زرد طرفین، مطابق دیزاین فیگما */}
        <div className="flex items-center justify-center max-w-md gap-4 mx-auto rounded-lg">
          <span className="h-0.5 flex-1 rounded-lg bg-brand-yellow" />
          <h2 className="font-sans text-xl text-white whitespace-nowrap font-blackfont md:text-2xl">
            {t.home.whyChooseUs.title}
          </h2>
          <span className="h-0.5 flex-1 bg-brand-yellow" />
        </div>

        {/* گرید ۴ ستونه کارت‌های دو رنگ (زرد/سفید) */}
        <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(cards).map(([key, card]) => (
            <div key={key} className="overflow-hidden bg-white rounded-lg ">
              <div className="top-0 px-3 py-2 text-center rounded-lg bg-brand-yellow">
                <h3 className="font-sans text-sm font-extrabold text-brand-black md:text-base">
                  {card.title}
                </h3>
              </div>
              <div className="px-3 py-4 text-center">
                <p className="font-sans text-xs leading-6 font-regular text-brand-black/70 md:text-sm">
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
