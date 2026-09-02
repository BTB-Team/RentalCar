import { useLangStore } from '../../store/useLangStore';

const HeroSection = () => {
  const { t } = useLangStore();

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="px-4 pt-8 mx-auto max-w-7xl md:pt-12">
        <div className="text-center">
          <h1 className="font-sans text-2xl leading-tight font-blackfont text-brand-black md:text-4xl md:leading-tight">
            {t.home.hero.titleStart}{t.home.hero.titleStart ? ' ' : ''}
            <span className="text-brand-yellow">{t.home.hero.titleHighlight}</span>{' '}
            {t.home.hero.titleEnd}
          </h1>

          <p className="max-w-2xl mx-auto mt-4 font-sans text-sm leading-7 font-regular text-brand-black/70 md:text-base">
            {t.home.hero.description}
          </p>
        </div>

        <div className="mt-8 md:mt-10">
          <img
            src="/images/Hero.webp"
            alt=""
            className="w-full h-[400px] sm:h-[320px] md:h-[440px] object-cover object-bottom rounded-lg"
            loading="eager"
          />
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
