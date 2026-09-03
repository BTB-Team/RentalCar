import { useLangStore } from "../../store/useLangStore";
import heroBg from "../../assets/images/bg.png";

const HeroSection = () => {
  const { t } = useLangStore();

  return (
    <section
      className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Bottom gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-[15%] bg-[linear-gradient(0deg,#FFFFFF_19.65%,rgba(255,255,255,0)_100%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 sm:pt-20 md:pt-32 lg:pt-40">
        <div className="text-center">
          <h1 className="mx-auto max-w-5xl font-sans text-2xl leading-tight font-blackfont text-brand-black sm:text-3xl md:text-4xl lg:text-5xl">
            {t.home.hero.titleStart}
            {t.home.hero.titleStart ? " " : ""}

            <span className="text-brand-yellow">
              {t.home.hero.titleHighlightOne}
            </span>

            {t.home.hero.titleConjuction}

            <span className="text-brand-yellow">
              {t.home.hero.titleHighlightTwo}
            </span>

            {t.home.hero.titleEnd}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl font-sans text-base leading-7 font-regular text-brand-black/70 sm:text-lg sm:leading-8 md:text-[20px] md:leading-[37px]">
            {t.home.hero.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
