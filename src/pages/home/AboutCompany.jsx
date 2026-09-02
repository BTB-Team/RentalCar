import { useLangStore } from '../../store/useLangStore';

const AboutCompany = () => {
  const { t, lang } = useLangStore();

  return (
    <section className="px-4 py-16 mx-auto max-w-7xl md:py-20">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
        {/* متن */}
        <div className="text-start">
          <h2 className="font-sans font-blackfont text-brand-black text-2xl md:text-3xl">
            {t.home.about.title}
          </h2>
          <span className="mt-3 block h-1 w-16 rounded bg-brand-yellow" />

          <p className="mt-6 font-sans font-regular text-brand-black/80 text-sm leading-7 md:text-base md:leading-8">
            {t.home.about.description}
          </p>

          {/* پاراگراف دوم با هایلایت زرد ملایم، مطابق دیزاین فیگما */}
          <p className="mt-4 rounded-lg bg-brand-yellow/10 p-3 font-sans font-regular text-brand-black/80 text-sm leading-7 md:text-base md:leading-8">
            {t.home.about.description_2}
          </p>

          <button className="mt-6 inline-flex h-[50px] items-center gap-2 rounded bg-brand-yellow px-8 font-sans font-extrabold text-base text-brand-black transition-opacity hover:opacity-90 active:scale-[0.98]">
            {t.home.about.btnReadMore}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`h-4 w-4 ${lang === 'dr' ? '' : 'rotate-180'}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
          </button>
        </div>

        {/* تصویر شرکت */}
        <div>
          <img
            src="/images/Rectangle 97.png"
            alt=""
            className="h-[280px] w-full rounded-lg object-cover md:h-[360px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
